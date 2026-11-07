// 系统地图的数据。index.html 只负责展示，更新时只改这个文件。
// 全部内容从 Notion 正本读出来，不在这里写任何决定；和 Notion 冲突时以 Notion 为准。
// 来源见 meta.sources；重新生成时逐个回读，更新内容、版本号和 meta.generated。
// 条目标签 tag 只用这几种：草案、待建、待配置、仅手动、Agent 专用、停用、待核实。

window.SYSTEM_MAP = {
  meta: {
    generated: "2026-11-07",
    sources: [
      { name: "AI 协作系统总架构", version: "v5.0", url: "https://app.notion.com/c52789ea0fc24051ad9fbe89d333dad2" },
      { name: "Agent 操作指南", version: "0.0.6", url: "https://app.notion.com/40fc7394815f816f9b28de00176a3b0a" },
      { name: "工作方法规划｜草案", version: "v0.6", url: "https://app.notion.com/410c7394815f816ab2e6d470fc89e748" },
      { name: "知识中心", version: "8 页", url: "https://app.notion.com/400c7394815f81d181eef3c3c4764461" },
      { name: "技能库", version: "19 个技能", url: "https://app.notion.com/3fcc7394815f80198359d76a9252e114" },
      { name: "工作方法草案 · 附录 A 场景做法卡", version: "v0.9", url: "https://app.notion.com/410c7394815f816ab2e6d470fc89e748" }
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
          { t: "在云端执行，不在本机；以后加对账要按云端任务改" },
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
          { t: "v0.6 · 草案 · 只当资料，Tim 说「试跑」才用", url: "https://app.notion.com/410c7394815f816ab2e6d470fc89e748", tag: "草案" },
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
          { t: "同步技能", url: "https://app.notion.com/40ec7394815f819486ece610963f061f", tag: "仅手动" },
          { t: "更新系统地图", url: "https://app.notion.com/410c7394815f81559af6dabee5034225", tag: "Agent 专用" }
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
  ],

  // ---------- 按场景 ----------
  // 正本：工作方法草案附录 A「工作场景做法卡」（v0.9，草案）。scenarios 与附录 A 逐表一致，改流程先改附录 A 再改这里；
  // skills 的名称、链接、调用方式来自技能库。做法卡最终放在哪见草案第 8 节，搬走后改成从新位置生成。
  skills: {
    "起草方案": { url: "https://app.notion.com/84b4d749ebe940ada234417eb5256cee", call: "自动", cmd: "/起草方案", use: "把想法起草成 v0.1 方案，支持整体规划、产品、运营、营销、商业、评审与决策 6 类，写入 KM 或 NT 文档库" },
    "起草汇报": { url: "https://app.notion.com/317c7394815f8051bf90e7f7c51ff51c", call: "自动", cmd: "/起草汇报", use: "先读上期汇报、会议、项目简报，再起草周报、月报、季报或专项汇报 v0.1" },
    "推进项目": { url: "https://app.notion.com/9d6f37f700cb4dca867f3144e0370015", call: "自动", cmd: "/推进项目", use: "立项、更新项目简报、记项目决定、列同步清单、结项" },
    "派发任务卡": { url: "https://app.notion.com/3fcc7394815f813b855ec1c458769a89", call: "仅手动", use: "把要外部成品的任务写成任务卡交给 Grokbot；先判断能不能在对话里直接做" },
    "商业点子探矿": { url: "https://app.notion.com/cd0260a816584400959e754793c75395", call: "自动", cmd: "@探矿", use: "用 YC 方法挖候选、筛掉伪机会、10 问打分，产出商业方案要点" },
    "形态分析法 · 创意发散": { url: "https://app.notion.com/fa9f1d8c07724a7d91cf0692d587bf5a", call: "仅手动", cmd: "@形态", use: "用形态矩阵系统发散、组合创意，产出创意卡" },
    "游戏方案编译器": { url: "https://app.notion.com/df88652d49e14ee4a78ab66e7bf39df3", call: "自动", cmd: "@游戏策划", use: "把游戏想法编译成 Codex 能开工的方案，写入游戏专案库" },
    "全网需求探测 · 搜索翻译官": { url: "https://app.notion.com/197f8af04e9846edaa4ee213bf5598da", call: "自动", cmd: "@全网探测", use: "把中文调研需求转成 Reddit、X、YouTube 等平台的英文关键词和搜索计划；不抓取、不分析" },
    "纵横": { url: "https://app.notion.com/ede953cd27324937bf6cab9dad978c6a", call: "仅手动", cmd: "@纵横", use: "拆解职场人际困局，给 2–3 条附话术和风险的策略；不用于业务方案" },
    "PPT · 大纲格式调整": { url: "https://app.notion.com/31299f7373434fb9876ec691835cddac", call: "自动", use: "把文档转成逐页 PPT 大纲：标题、正文、布局、解说词" },
    "PPT · 文档生成": { url: "https://app.notion.com/cf36cd02e7e6435e8431153968d252f5", call: "仅手动", use: "把逐页大纲转成交给 Codex 生成 .pptx 的指令" },
    "规范方案与汇报文档": { url: "https://app.notion.com/bb27d96b82fa4ba18d14146f8726fa8d", call: "自动", use: "整理已有文档的分类、属性、命名，导出 PDF、腾讯文档" },
    "改进写作": { url: "https://app.notion.com/317c7394815f8123959eea73d1bd1432", call: "自动", use: "润色改写，提升表达、结构和流畅度" },
    "校对": { url: "https://app.notion.com/317c7394815f81deb91ad5a49dc7eb8c", call: "自动", use: "只改错别字、语法、标点" },
    "重排格式": { url: "https://app.notion.com/317c7394815f81728d4be4a3c38b9d00", call: "自动", use: "只调标题、列表、分段，不动文字" },
    "解释": { url: "https://app.notion.com/317c7394815f81b6a73ccac2df70faea", call: "仅手动", use: "在聊天里用大白话解释选中的词或概念" },
    "创建 Notion 技能": { url: "https://app.notion.com/764274dda42a4630aab16b865ba1f070", call: "自动", cmd: "@建技能", use: "新建技能，或改写、体检现有技能的名称和描述" },
    "同步技能": { url: "https://app.notion.com/40ec7394815f819486ece610963f061f", call: "仅手动", cmd: "/sync-skills", use: "给 Claude Code、Codex 生成本地技能指针" },
    "更新系统地图": { url: "https://app.notion.com/410c7394815f81559af6dabee5034225", call: "Agent 专用", use: "从 Notion 回读，更新这张地图" }
  },

  scenarios: [
    {
      id: "all",
      name: "通用：一次任务怎么走",
      sub: "任何场景都按这 8 步；修改工具随时可用",
      when: "你不用记技能名：用大白话说要做什么，Agent 选技能并在第一行告诉你；选错了当场说。",
      skills: ["改进写作", "校对", "重排格式", "解释"],
      steps: [
        { stage: "开口", you: "用大白话说要做什么", agent: "第一行说明这次用哪个技能、之后可能接哪个", tag: "草案" },
        { stage: "想清楚", you: "想法还模糊时才需要", agent: "先发散或评估，再进入起草", skills: ["商业点子探矿", "形态分析法 · 创意发散", "游戏方案编译器"] },
        { stage: "先查后问", you: "只回答要你拍板的题", agent: "先读项目简报、会议、上期文档，每个问题附推荐答案", tag: "草案" },
        { stage: "起草", you: "等 v0.1", agent: "按格式库起草，末尾附证据卡", skills: ["起草方案", "起草汇报"], tag: "草案" },
        { stage: "修改", you: "直接说改什么", agent: "判断修改种类再处理（见下方「中途要改」）", skills: ["改进写作", "校对", "重排格式"] },
        { stage: "验收", you: "看证据卡判断，不必读全文", agent: "外发、删除、对外承诺停下来等你按" },
        { stage: "落地", you: "决定下一步", agent: "立项、导出、做 PPT 或外派", skills: ["推进项目", "规范方案与汇报文档", "PPT · 大纲格式调整", "派发任务卡"] },
        { stage: "每周收尾", you: "周五说「周复盘」", agent: "列纠错和升级建议，最后更新系统地图", skills: ["起草汇报", "更新系统地图"], tag: "草案" }
      ],
      edits: [
        { k: "只改这一份", e: "「这段换个说法」「A 挪到前面」", d: "直接改，版本 +0.1；不记" },
        { k: "改主意、补信息", e: "「这个项目不做了」「数字改成 32」", d: "改稿；项目决定用「推进项目」记进简报；不算纠错" },
        { k: "违反规则", e: "「又没标来源」「以后都这样」", d: "先改好，记一条纠错；同类第 2 次附升级建议" },
        { k: "方向大变", e: "「目标用户换了」", d: "不打补丁，重新起草出新版本，旧版保留" }
      ],
      gaps: [
        { t: "「开口说明用哪个技能」还没试跑", tag: "草案" },
        { t: "证据卡末尾加「下一步可选」，让 Agent 主动报下一个技能", tag: "草案" },
        { t: "周复盘还不是技能，只是草案里的流程", tag: "草案" }
      ]
    },
    {
      id: "p",
      name: "提案",
      sub: "从无到有写初版方案",
      when: "要从一个想法写出第一版方案时。想法已经拍板、只差做成品，属于「成品制作」。",
      skills: ["起草方案", "商业点子探矿", "形态分析法 · 创意发散", "游戏方案编译器"],
      steps: [
        { stage: "发散", you: "想法模糊时说「帮我找点子」或「发散一下」", agent: "找商业机会用探矿，系统组合创意用形态分析，游戏用编译器", skills: ["商业点子探矿", "形态分析法 · 创意发散", "游戏方案编译器"] },
        { stage: "先查后问", you: "回答决策题", agent: "读相关项目、会议和旧方案，只问要拍板的事", tag: "草案" },
        { stage: "起草", you: "说「写成方案」", agent: "按 6 类方案格式起草 v0.1，写进文档库，附证据卡", skills: ["起草方案"] },
        { stage: "修改", you: "直接说改什么", agent: "按修改种类处理", skills: ["改进写作"] },
        { stage: "落地", you: "要立项还是做成品", agent: "立项转「推进项目」；做 PPT 转「成品制作」", skills: ["推进项目"] }
      ],
      deliver: "方案稿：目标、路径、取舍、风险齐全，至少 2 个备选。",
      gaps: [
        { t: "对外方案「换人审」（另开会话或换模型）属第二期", tag: "草案" },
        { t: "「起草方案」的先查后问、证据卡改造在 C 线，进度待确认", tag: "待核实" }
      ]
    },
    {
      id: "i",
      name: "信息收集",
      sub: "为判断补事实，不给建议",
      when: "要查清事实、做对比、补数据时。要给建议，属于「决策辅助」。",
      skills: ["全网需求探测 · 搜索翻译官"],
      steps: [
        { stage: "定问题", you: "说清要回答什么问题、给谁用", agent: "复述问题和范围，确认查到什么程度算够" },
        { stage: "定渠道", you: "海外用户调研时说「全网探测」", agent: "出平台、关键词和搜索计划", skills: ["全网需求探测 · 搜索翻译官"] },
        { stage: "收集", you: "等结果", agent: "查公开网页和工作区文档；要登录的平台外派" },
        { stage: "整理", you: "看摘要", agent: "每条有出处；事实、推测、未知分开，查不到写「未知」" },
        { stage: "交接", you: "决定用在哪", agent: "交给提案或决策辅助" }
      ],
      deliver: "研究摘要、对比表或数据表：每条有出处，事实、推测、未知分开。",
      gaps: [
        { t: "只有 1 个技能，而且只管「规划搜索」；抓取、整理、出摘要都没有技能", tag: "待建" },
        { t: "研究摘要没有固定格式", tag: "待核实" }
      ]
    },
    {
      id: "j",
      name: "决策辅助",
      sub: "从不同视角给判断和建议",
      when: "要在几个选项里做取舍、给某个想法挑毛病，或者处理一个职场困局时。",
      skills: ["纵横", "起草方案"],
      steps: [
        { stage: "先查后问", you: "说清要决定什么、有哪些选项", agent: "读背景，只问缺的关键信息", tag: "草案" },
        { stage: "单视角", you: "说「挑挑毛病」「压力测试一下」", agent: "列风险、反例、最坏情况；目前没有专门技能" },
        { stage: "多视角", you: "重要决策时要求", agent: "按不同角色各给结论，列分歧", tag: "待建" },
        { stage: "职场困局", you: "说「纵横」或描述人际难题", agent: "给 2–3 条策略，附话术和风险", skills: ["纵横"] },
        { stage: "成文", you: "需要留档时", agent: "写成「评审与决策」类方案", skills: ["起草方案"] },
        { stage: "拍板", you: "最多回答 3 个待拍板项", agent: "决定写回所属的项目简报或正式文档", skills: ["推进项目"] }
      ],
      deliver: "各视角的结论和理由、分歧清单、建议；待拍板最多 3 项。",
      gaps: [
        { t: "业务决策没有专门技能，「纵横」只管职场人际", tag: "待建" },
        { t: "多视角对撞原本外派给 Grokbot，任务卡机制已降为可选", tag: "待核实" },
        { t: "多模型比稿只在少数关键决策用，属第二期", tag: "草案" }
      ]
    },
    {
      id: "m",
      name: "成品制作",
      sub: "照已拍板的方案做成品",
      when: "方案已经定稿，要做成 PPT、PDF、H5、原型等可以拿出去的东西时。",
      skills: ["PPT · 大纲格式调整", "PPT · 文档生成", "规范方案与汇报文档"],
      steps: [
        { stage: "确认定稿", you: "指明用哪一版", agent: "核对是不是已拍板的版本" },
        { stage: "定呈现", you: "确认形式和页数", agent: "先给呈现方案，不直接开做" },
        { stage: "PPT", you: "说「做成 PPT」", agent: "先出逐页大纲，你确认后转成给 Codex 的生成指令", skills: ["PPT · 大纲格式调整", "PPT · 文档生成"] },
        { stage: "文档导出", you: "说「导出 PDF / 腾讯文档」", agent: "整理属性和正文后导出", skills: ["规范方案与汇报文档"] },
        { stage: "H5、原型", you: "说要什么", agent: "交 Codex 或外派 Grokbot", skills: ["派发任务卡"] },
        { stage: "验收", you: "打开链接检查", agent: "对照定稿逐项自检" }
      ],
      deliver: "成品链接：与定稿一致，先确认呈现方案再制作，链接能打开。",
      gaps: [
        { t: "PPT 两步之间要手动接：「PPT · 文档生成」是仅手动", tag: "仅手动" },
        { t: "H5、原型没有专门技能", tag: "待建" },
        { t: "没有视频制作能力，目前只到脚本", tag: "待建" }
      ]
    },
    {
      id: "s",
      name: "信息同步",
      sub: "让相关的人知道",
      when: "要写周报、月报、专项汇报，或者把项目进展同步给同事时。",
      skills: ["起草汇报", "推进项目", "派发任务卡"],
      steps: [
        { stage: "汇报", you: "说「写周报」「写月报」", agent: "先读上期汇报、会议、项目简报，再请你补充", skills: ["起草汇报"] },
        { stage: "项目同步", you: "说「把这个同步给 XX」", agent: "列同步清单", skills: ["推进项目"] },
        { stage: "成品", you: "要邮件、群消息等成品时", agent: "经任务卡交 Grokbot 生成，只生成不发送", skills: ["派发任务卡"] },
        { stage: "确认", you: "看草稿", agent: "数据逐条核对" },
        { stage: "发送", you: "对外的由你来按", agent: "不替你发送" }
      ],
      deliver: "周报、邮件、纪要、发布包：数据准确，草稿先给你确认，对外的要你当次同意。",
      gaps: [
        { t: "邮件由谁写还没定", tag: "待核实" },
        { t: "方案回填（自定义 Agent）待配置", tag: "待配置" },
        { t: "「起草汇报」的证据卡改造在 C 线，进度待确认", tag: "待核实" }
      ]
    },
    {
      id: "x",
      name: "系统维护",
      sub: "不属于五类：维护这套系统本身",
      when: "要新建或修改技能、处理纠错、做周复盘、更新系统地图时。",
      skills: ["创建 Notion 技能", "同步技能", "更新系统地图"],
      steps: [
        { stage: "新技能", you: "说「把这个沉淀成技能」", agent: "分幕起草，写进技能库", skills: ["创建 Notion 技能"] },
        { stage: "同步", you: "说「同步技能」", agent: "给 Claude Code、Codex 生成本地指针", skills: ["同步技能"] },
        { stage: "纠错", you: "纠正时照常说", agent: "记系统改进记录；同类第 2 次附升级建议", tag: "草案" },
        { stage: "周复盘", you: "周五说「周复盘」", agent: "列数字、待升级清单、试跑进度", tag: "草案" },
        { stage: "更新地图", you: "同意推送", agent: "回读 Notion，更新系统地图", skills: ["更新系统地图"] }
      ],
      deliver: "改动都写回 Notion 正本，地图只是视图。",
      gaps: [
        { t: "技能库还没有「工作类型」属性，场景归类是手工整理", tag: "草案" },
        { t: "五类工作的「做法卡」放在哪还没定", tag: "草案" }
      ]
    }
  ]
};
