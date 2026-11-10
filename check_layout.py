#!/usr/bin/env python3
"""检查各风格的布局是否一致：一套布局、多套皮肤。

用法：在本文件夹运行 python3 check_layout.py
做法：用 Chrome 无界面模式按每种风格打开 index.html，切到各个板块和子视图，量关键区域的位置和大小，
和第一个风格逐项对比。全部一致时退出码为 0，否则列出差异、退出码为 1。
风格清单从 index.html 里的 window.THEMES 读取，新增风格不用改本脚本。
视图清单写在下面的 VIEWS：名称 → 网址参数和要点的东西；新增板块或子视图时在这里加一行。
"""
import html, json, os, re, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
WIDTHS = [1440, 1024, 760, 375]
# 名称: (网址参数, 打开后要点的元素选择器；没有就写空串)
VIEWS = {
    "架构·五层": ("", ""),
    "架构·层": ("", ".deck:nth-of-type(3) .ln"),
    "架构·路线": ("view=map&sub=f0", "#nx"),
    "工作·按工作流": ("view=wf&sub=flow", ".deck:nth-of-type(1) .ln"),
    "工作·按工作类型": ("view=wf&sub=type", ".deck:nth-of-type(2) .ln"),
    "工作·打磨进度": ("view=wf&sub=prog", ""),
    "工作·模块详情": ("view=wf&sub=flow&m=M08", ""),
    "开始使用·接入": ("view=start&sub=setup", ""),
    "开始使用·建项目": ("view=start&sub=project", ""),
    "更新记录": ("view=log", ""),
}

PROBE = """<script>
setTimeout(() => {
  const sel = decodeURIComponent(location.hash.slice(1));
  if (sel && document.querySelector(sel)) document.querySelector(sel).click();
  const box = el => { let x = 0, y = 0, e = el; while (e) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent; }
    return [x, y, el.offsetWidth, el.offsetHeight].map(Math.round).join(','); };
  const out = {};
  const pick = { 风格菜单: '#themeBtn', 顶栏: '.top', 数字: '#stats', 一级菜单: '#tabs', 二级菜单: '#subnav', 左栏: '#stack', 右侧面板: '#panel', 图例: '#legend' };
  for (const k in pick) { const el = document.querySelector(pick[k]); out[k] = el ? box(el) : '-'; }
  document.querySelectorAll('.tab, .sub').forEach((d, i) => out['菜单项' + (i + 1)] = box(d));
  document.querySelectorAll('.deck').forEach((d, i) => out['卡片' + (i + 1)] = box(d));
  document.querySelectorAll('.tl-row').forEach((d, i) => out['记录' + (i + 1)] = box(d));
  document.querySelectorAll('#panel .step, #panel .it').forEach((d, i) => { if (i < 14) out['面板行' + (i + 1)] = box(d); });
  const pre = document.createElement('pre'); pre.id = 'geo'; pre.textContent = JSON.stringify(out); document.body.appendChild(pre);
}, 2500);
</script></body>"""


def main():
    src = open(os.path.join(HERE, "index.html"), encoding="utf-8").read()
    themes = re.findall(r'\{\s*id:\s*"([^"]+)"', src[src.index("window.THEMES"):src.index("];", src.index("window.THEMES"))])
    if len(themes) < 2:
        print("只有一种风格，不需要对比。"); return 0
    fd, test = tempfile.mkstemp(prefix="_layout_", suffix=".html", dir=HERE)
    os.close(fd)
    bad = 0
    try:
        open(test, "w", encoding="utf-8").write(src.replace("</body>", PROBE))
        for w in WIDTHS:
            for name, (query, click) in VIEWS.items():
                geo = {}
                for t in themes:
                    url = f"file://{test}?theme={t}" + (f"&{query}" if query else "") + (f"#{click.replace(' ', '%20')}" if click else "")
                    out = subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--force-prefers-reduced-motion",
                                          f"--window-size={w},900", "--virtual-time-budget=4000", "--dump-dom", url],
                                         capture_output=True, text=True).stdout
                    m = re.search(r'<pre id="geo">(.*?)</pre>', out)
                    geo[t] = json.loads(html.unescape(m.group(1))) if m else {}
                base = geo[themes[0]]
                if len(base) < 10:
                    bad += 1
                    print(f"✗ 宽 {w} · {name}：没量到页面，检查 Chrome 或视图参数")
                    continue
                for t in themes[1:]:
                    diff = [k for k in sorted(set(base) | set(geo[t])) if base.get(k) != geo[t].get(k)]
                    if diff:
                        bad += 1
                        print(f"✗ 宽 {w} · {name} · {themes[0]} 对 {t}：{len(diff)} 处不同")
                        for k in diff[:6]:
                            print(f"    {k}: {base.get(k)}  ≠  {geo[t].get(k)}")
                    else:
                        print(f"✓ 宽 {w} · {name} · {themes[0]} 对 {t}：{len(base)} 个区域一致")
    finally:
        os.remove(test)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
