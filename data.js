// 系统地图的数据。index.html 只负责展示，更新时只改这个文件。
// 全部内容从 Notion 正本读出来，不在这里写任何决定；和 Notion 冲突时以 Notion 为准。
// 来源见 meta.sources；重新生成时逐个回读，更新内容、版本号和 meta.generated。
// 条目标签 tag 只用这几种：草案、待建、待配置、仅手动、停用、待核实。

window.SYSTEM_MAP = {
  meta: {
    generated: "2026-11-07",
    sources: [
      { name: "AI 协作系统总架构", version: "v5.0", url: "https://app.notion.com/c52789ea0fc24051ad9fbe89d333dad2" },
      { name: "Agent 操作指南", version: "0.0.6", url: "https://app.notion.com/40fc7394815f816f9b28de00176a3b0a" },
      { name: "工作方法规划｜草案", version: "v0.4", url: "https://app.notion.com/410c7394815f816ab2e6d470fc89e748" },
      { name: "知识中心", version: "8 页", url: "https://app.notion.com/400c7394815f81d181eef3c3c4764461" },
      { name: "技能库", version: "18 个技能", url: "https://app.notion.com/3fcc7394815f80198359d76a9252e114" }
    ]
  },

  layers: [
    {
      id: "d",
      name: "决策层",
      sub: "Tim",
      role: "定方向、拍板、验收。系统里所有不可撤回的动作都停在这一层。",
      up: null,
      down: "向执行层下需求；只回答 Agent 列出的决策题。",
      modules: [
        { name: "提案", items: [{ t: "提出想法和需求，Agent 帮着起草" }] },
        { name: "拍板", items: [
          { t: "只回答 Agent 列出的决策题，每题附推荐答案" },
          { t: "改规则、建库、建定时任务都要当次同意，一次同意只管一次" }
        ] },
        { name: "验收", items: [
          { t: "现在：读全文判断" },
          { t: "第一期目标：只看证据卡就能判断，够用率 ≥ 80%", tag: "草案" }
        ] },
        { name: "永远人工", items: [{ t: "外发、删除、对外承诺、花钱" }] }
      ]
    },
    {
      id: "e",
      name: "执行层",
      sub: "谁来干活",
      role: "接需求、动手做、交付。每次会话先读规则层，再调用技能层，最后读写资料层。",
      up: "交付成果给 Tim，附证据卡。",
      down: "读规则、调技能、读写资料。",
      modules: [
        { name: "对话类 Agent", items: [
          { t: "Claude Code、Claude、贾维斯（Notion AI）、Codex" },
          { t: "主力通道：直接读写 Notion，不经任务卡" }
        ] },
        { name: "Grokbot", items: [
          { t: "外派通道：经任务看板派卡", url: "https://app.notion.com/28bbaa669cce40d19d474e8d7c45b81d" },
          { t: "负责外部成品，只生成不发送" }
        ] },
        { name: "定时与自动化", items: [
          { t: "Daily Notion memory and setup check：每天 20:58 同步记忆、检查指南版本" },
          { t: "这个定时任务不在本机，具体在哪待确认", tag: "待核实" },
          { t: "方案回填（Notion 自定义 Agent）", tag: "待配置" }
        ] }
      ]
    },
    {
      id: "r",
      name: "规则层",
      sub: "按什么规矩",
      role: "规定 Agent 怎么读、怎么写、什么不能做。只有状态为「生效」的页面才算数。",
      up: "约束执行层的每一步。",
      down: "规定资料放哪、技能怎么建。",
      modules: [
        { name: "Agent 操作指南", items: [
          { t: "0.0.6 · 生效 · 所有 Agent 每次会话读一次", url: "https://app.notion.com/40fc7394815f816f9b28de00176a3b0a" },
          { t: "管位置、分层、读写顺序、新建、边界、遗忘、核验" }
        ] },
        { name: "Tim 偏好", items: [
          { t: "v1.4 · 生效 · 所有 Agent", url: "https://app.notion.com/ddf815cb4af545ee8cd3d56105b54a09" }
        ] },
        { name: "任务流转规则", items: [
          { t: "v2.0 · 生效 · 只在外派时读", url: "https://app.notion.com/482774e3d44a4c2f9743a08ed2859044" }
        ] },
        { name: "Grokbot 配置说明", items: [
          { t: "v2.3 · 生效 · 执行端读", url: "https://app.notion.com/9394362037894103870323cb03094180" }
        ] },
        { name: "总架构", items: [
          { t: "v5.0 · 生效 · 只给 Tim 看的设计记录，Agent 不读", url: "https://app.notion.com/c52789ea0fc24051ad9fbe89d333dad2" }
        ] },
        { name: "工作方法草案", draft: true, items: [
          { t: "v0.4 · 草案 · 只当资料，Tim 说「试跑」才用", url: "https://app.notion.com/410c7394815f816ab2e6d470fc89e748", tag: "草案" },
          { t: "第一期：先查后问、证据卡、二次犯错就升级" }
        ] },
        { name: "工作流入库规范", items: [
          { t: "停用，只作参考", url: "https://app.notion.com/cdada48573c643d4a843151d92f17a89", tag: "停用" }
        ] }
      ]
    },
    {
      id: "k",
      name: "技能层",
      sub: "会做哪些事",
      role: "可重复的做法。技能库是唯一正本，Claude Code、Codex 本地只放指针。",
      up: "执行层接到需求时匹配技能，读正文后照做。",
      down: "技能规定读哪些资料、写到哪里。",
      modules: [
        { name: "方案推进", items: [
          { t: "起草方案", url: "https://app.notion.com/84b4d749ebe940ada234417eb5256cee" },
          { t: "推进项目", url: "https://app.notion.com/9d6f37f700cb4dca867f3144e0370015" },
          { t: "游戏方案编译器", url: "https://app.notion.com/df88652d49e14ee4a78ab66e7bf39df3" },
          { t: "派发任务卡", url: "https://app.notion.com/3fcc7394815f813b855ec1c458769a89", tag: "仅手动" },
          { t: "同步技能", url: "https://app.notion.com/40ec7394815f819486ece610963f061f", tag: "仅手动" }
        ] },
        { name: "文档输出", items: [
          { t: "起草汇报", url: "https://app.notion.com/317c7394815f8051bf90e7f7c51ff51c" },
          { t: "规范方案与汇报文档", url: "https://app.notion.com/bb27d96b82fa4ba18d14146f8726fa8d" },
          { t: "PPT · 大纲格式调整", url: "https://app.notion.com/31299f7373434fb9876ec691835cddac" },
          { t: "PPT · 文档生成", url: "https://app.notion.com/cf36cd02e7e6435e8431153968d252f5", tag: "仅手动" }
        ] },
        { name: "写作编辑", items: [
          { t: "改进写作", url: "https://app.notion.com/317c7394815f8123959eea73d1bd1432" },
          { t: "重排格式", url: "https://app.notion.com/317c7394815f81728d4be4a3c38b9d00" },
          { t: "校对", url: "https://app.notion.com/317c7394815f81deb91ad5a49dc7eb8c" },
          { t: "解释", url: "https://app.notion.com/317c7394815f81b6a73ccac2df70faea", tag: "仅手动" }
        ] },
        { name: "创意调研", items: [
          { t: "商业点子探矿", url: "https://app.notion.com/cd0260a816584400959e754793c75395" },
          { t: "全网需求探测 · 搜索翻译官", url: "https://app.notion.com/197f8af04e9846edaa4ee213bf5598da" },
          { t: "形态分析法 · 创意发散", url: "https://app.notion.com/fa9f1d8c07724a7d91cf0692d587bf5a", tag: "仅手动" }
        ] },
        { name: "职场与其他", items: [
          { t: "纵横", url: "https://app.notion.com/ede953cd27324937bf6cab9dad978c6a", tag: "仅手动" },
          { t: "创建 Notion 技能", url: "https://app.notion.com/764274dda42a4630aab16b865ba1f070" }
        ] },
        { name: "第一期改造", draft: true, items: [
          { t: "起草方案、起草汇报、推进项目：加先查后问和证据卡", tag: "草案" },
          { t: "C 线进度：草案里没有记录", tag: "待核实" }
        ] }
      ]
    },
    {
      id: "c",
      name: "资料层",
      sub: "东西放哪",
      role: "每类信息只有一处正本，别处只放链接。记忆成熟后上移到正本。",
      up: "被执行层和技能读写。",
      down: null,
      modules: [
        { name: "正式文档", items: [
          { t: "KM 文档库（主业）", url: "https://app.notion.com/6eb7eaab6c84443db9a6f8ff947affa0" },
          { t: "NT 文档库（副业）", url: "https://app.notion.com/5c3598c4b39444348a37b979fccd36a2" },
          { t: "项目内容、决策和依据的唯一正本" }
        ] },
        { name: "个人档案", items: [
          { t: "Tim · 个人档案：背景、目标、立项筛选器", url: "https://app.notion.com/7b0441dcd91f48808c79c0abef183aff" }
        ] },
        { name: "共享记忆", items: [
          { t: "Notion Memory：Memories 库", url: "https://app.notion.com/401c7394815f81c489ebe39613e34e11" },
          { t: "About Tim 摘要页", url: "https://app.notion.com/401c7394815f813f8f85f6c6a236a809" },
          { t: "五类：Profile、Preference（待确认）、Work、People、Notes" },
          { t: "成熟后上移到正本，只留指针" }
        ] },
        { name: "本地缓存", items: [
          { t: "CLAUDE.md：只放链接、开场步骤、硬边界" },
          { t: "平台自带记忆：不是正本，冲突以 Notion 为准" }
        ] },
        { name: "外派通道", items: [
          { t: "任务看板", url: "https://app.notion.com/28bbaa669cce40d19d474e8d7c45b81d" },
          { t: "工作流库", url: "https://app.notion.com/061b62c136d54595a8ffc19779d4fbb2" }
        ] },
        { name: "系统改进记录", draft: true, items: [
          { t: "等 Tim 批准建库", tag: "待建" },
          { t: "建库前先记在草案 9.1 过渡表", url: "https://app.notion.com/410c7394815f816ab2e6d470fc89e748" },
          { t: "字段：类型、关联技能、错误类别、同类次数、升级动作、状态" }
        ] }
      ]
    }
  ],

  flows: [
    {
      name: "一次任务怎么走",
      steps: [
        { layer: "d", text: "Tim 提出需求" },
        { layer: "e", text: "Agent 接单，先读 Agent 操作指南" },
        { layer: "k", text: "匹配技能，读技能正文" },
        { layer: "c", text: "先查后问：读项目简报、会议、记忆，只问要拍板的事", tag: "草案" },
        { layer: "e", text: "动手做；要外部成品时派卡给 Grokbot" },
        { layer: "c", text: "写进 Notion：草稿或正式文档" },
        { layer: "d", text: "交付附证据卡，Tim 看卡验收；外发由 Tim 来按", tag: "草案" }
      ]
    },
    {
      name: "遇到冲突听谁的",
      steps: [
        { layer: "d", text: "1. Tim 当前说的话，最优先" },
        { layer: "c", text: "2. 任务卡（只在外派时）" },
        { layer: "r", text: "3. 正本：规则、偏好" },
        { layer: "c", text: "3. 正本：档案、正式文档" },
        { layer: "c", text: "4. Notion Memory" },
        { layer: "e", text: "5. 平台本地记忆，只是缓存" },
        { layer: "d", text: "记忆成熟后：Tim 确认，上移到正本，记忆只留链接" }
      ]
    },
    {
      name: "错误怎么变成改进",
      steps: [
        { layer: "d", text: "Tim 纠正产出", tag: "草案" },
        { layer: "e", text: "Agent 先改好，再判断算不算纠错", tag: "草案" },
        { layer: "c", text: "记一条系统改进记录，回复末尾告知「同类第 N 次」", tag: "草案" },
        { layer: "e", text: "同类第 2 次：附升级建议", tag: "草案" },
        { layer: "d", text: "Tim 批准", tag: "草案" },
        { layer: "k", text: "优先改结构（模板、属性），其次加检查（技能自检）", tag: "草案" },
        { layer: "r", text: "实在不行，才在指南里加一句", tag: "草案" },
        { layer: "d", text: "每周五周复盘看数字", tag: "草案" }
      ]
    },
    {
      name: "草案怎么变成规则",
      steps: [
        { layer: "r", text: "草案页放在知识中心，状态为草案，只当资料" },
        { layer: "d", text: "Tim 说「按草案试跑」，只限当次" },
        { layer: "c", text: "每次试跑记一条，连续 3 次无大改才算过" },
        { layer: "d", text: "Tim 明确说「X 生效」" },
        { layer: "r", text: "内容拆进总架构或技能，草案改为停用" },
        { layer: "k", text: "对应技能同步更新" }
      ]
    }
  ]
};
