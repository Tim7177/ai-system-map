// 系统地图的数据。index.html 只负责展示，更新时只改这个文件。
// 全部内容从 Notion 正本读出来，不在这里写任何决定；和 Notion 冲突时以 Notion 为准。
// 来源见 meta.sources；重新生成时逐个回读，更新内容、版本号和 meta.generated。
// 条目标签 tag 只用这几种：草案、待建、待配置、仅手动、Agent 专用、停用、待核实。

window.SYSTEM_MAP = {
  "meta": {
    "generated": "2026-11-11",
    "sources": [
      {
        "name": "工作守则",
        "version": "v2.1",
        "url": "https://app.notion.com/p/413c7394815f8186a445d9ba7d5a7965"
      },
      {
        "name": "工作模块清单",
        "version": "v1.3",
        "url": "https://app.notion.com/p/414c7394815f815f8923d81424d50c85"
      },
      {
        "name": "给 Tim：操作说明",
        "version": "2026-11-11",
        "url": "https://app.notion.com/p/414c7394815f81ca8ed7da189e01118b"
      },
      {
        "name": "Agent 操作指南",
        "version": "0.0.6",
        "url": "https://app.notion.com/p/40fc7394815f816f9b28de00176a3b0a"
      },
      {
        "name": "知识中心",
        "version": "15 页生效",
        "url": "https://app.notion.com/p/400c7394815f81d181eef3c3c4764461"
      },
      {
        "name": "技能库",
        "version": "20 个技能",
        "url": "https://app.notion.com/p/3fcc7394815f80198359d76a9252e114"
      },
      {
        "name": "修订记录",
        "version": "截至 2026-11-11",
        "url": "https://app.notion.com/p/e3919d7654ff4dd0a401cd4729c18df9"
      }
    ]
  },
  "layers": [
    {
      "id": "d",
      "name": "决策层",
      "sub": "Tim",
      "role": "给目标、拍板、看证据卡验收。外发、删除、对外承诺都停在这一层，由 Tim 亲手按。",
      "up": null,
      "down": "用大白话对思考大脑说要做什么；只回答要拍板的事。",
      "modules": [
        {
          "name": "给目标",
          "items": [
            {
              "t": "用大白话说要做什么，不用记技能名"
            }
          ]
        },
        {
          "name": "拍板",
          "items": [
            {
              "t": "只回答要拍板的事，每问附推荐答案，回「是」即采纳"
            },
            {
              "t": "改生效页、建库、建定时任务都要当次同意，一次同意只管一次"
            }
          ]
        },
        {
          "name": "验收",
          "items": [
            {
              "t": "看证据卡判断，不读全文"
            }
          ]
        },
        {
          "name": "永远人工",
          "items": [
            {
              "t": "外发、删除、对外承诺"
            }
          ]
        }
      ]
    },
    {
      "id": "e",
      "name": "执行层",
      "sub": "谁来干活",
      "role": "思考大脑负责想清楚、再派出去；执行触手动手做，只生成不发送。",
      "up": "交付成果给 Tim，附证据卡；收尾问「要不要沉淀」。",
      "down": "读规则、调技能、读写资料。",
      "modules": [
        {
          "name": "思考大脑",
          "items": [
            {
              "t": "Claude Code：对话、先查后问、规划拆解、选技能、派活"
            },
            {
              "t": "回复第一行说明这次用哪个技能"
            }
          ]
        },
        {
          "name": "执行触手",
          "items": [
            {
              "t": "Codex：写代码、做原型和成品"
            },
            {
              "t": "外派平台：登录外部平台、后台定时；只生成，不发送"
            },
            {
              "t": "外派平台二选一（Grokbot 或 Hermes）",
              "tag": "待核实"
            }
          ]
        },
        {
          "name": "就地修改",
          "items": [
            {
              "t": "Notion AI：已在 Notion 页面里只改一段时用"
            }
          ]
        }
      ]
    },
    {
      "id": "r",
      "name": "规则层",
      "sub": "按什么规矩",
      "role": "知识中心是所有 Agent 的入口。做工作前只读工作守则和 Tim 偏好，其余按需读，闲聊不读；只按「生效」的页面执行。",
      "up": "约束执行层的每一步。",
      "down": "规定资料放哪、技能怎么建。",
      "modules": [
        {
          "name": "工作守则",
          "items": [
            {
              "t": "v2.1 · 生效 · 做工作前必读：架构、协作方法、纠错、收尾",
              "url": "https://app.notion.com/p/413c7394815f8186a445d9ba7d5a7965"
            }
          ]
        },
        {
          "name": "Tim 偏好",
          "items": [
            {
              "t": "v1.4 · 生效 · 做工作前必读",
              "url": "https://app.notion.com/p/ddf815cb4af545ee8cd3d56105b54a09"
            }
          ]
        },
        {
          "name": "Agent 操作指南",
          "items": [
            {
              "t": "0.0.6 · 生效 · 写 Notion 前读",
              "url": "https://app.notion.com/p/40fc7394815f816f9b28de00176a3b0a"
            }
          ]
        },
        {
          "name": "工作模块清单",
          "items": [
            {
              "t": "v1.3 · 生效 · 新增、打磨工作模块或按工作流做事时读；第 5 节是每件事怎么用",
              "url": "https://app.notion.com/p/414c7394815f815f8923d81424d50c85"
            }
          ]
        },
        {
          "name": "建库标准",
          "items": [
            {
              "t": "v1.1 · 生效 · 新建数据库或改库结构前读",
              "url": "https://app.notion.com/p/414c7394815f8190a1cfcd76e1324e35"
            }
          ]
        },
        {
          "name": "外派规则",
          "items": [
            {
              "t": "任务流转规则 · 外派时读",
              "url": "https://app.notion.com/p/482774e3d44a4c2f9743a08ed2859044"
            },
            {
              "t": "Grokbot 配置说明 · 执行端读",
              "url": "https://app.notion.com/p/9394362037894103870323cb03094180"
            }
          ]
        },
        {
          "name": "以后再说",
          "items": [
            {
              "t": "延后事项和扩展点，平时不读",
              "url": "https://app.notion.com/p/414c7394815f8136a63bee2093ef57d9"
            }
          ]
        }
      ]
    },
    {
      "id": "k",
      "name": "技能层",
      "sub": "会做哪些事",
      "role": "小、可组合的做法。技能库是唯一正本，Claude Code 本地只放指针。",
      "up": "思考大脑接到需求时匹配技能，读正文后照做。",
      "down": "技能规定读哪些资料、写到哪里。",
      "modules": [
        {
          "name": "方案推进",
          "items": [
            {
              "t": "起草方案",
              "url": "https://app.notion.com/p/84b4d749ebe940ada234417eb5256cee"
            },
            {
              "t": "推进项目",
              "url": "https://app.notion.com/p/9d6f37f700cb4dca867f3144e0370015"
            },
            {
              "t": "派发任务卡",
              "url": "https://app.notion.com/p/3fcc7394815f813b855ec1c458769a89",
              "tag": "仅手动"
            },
            {
              "t": "游戏方案编译器",
              "url": "https://app.notion.com/p/df88652d49e14ee4a78ab66e7bf39df3"
            },
            {
              "t": "同步技能",
              "url": "https://app.notion.com/p/40ec7394815f819486ece610963f061f",
              "tag": "仅手动"
            },
            {
              "t": "更新系统地图",
              "url": "https://app.notion.com/p/410c7394815f81559af6dabee5034225",
              "tag": "Agent 专用"
            },
            {
              "t": "系统体检",
              "url": "https://app.notion.com/p/414c7394815f8104a706ee40ca48413b",
              "tag": "Agent 专用"
            }
          ]
        },
        {
          "name": "文档输出",
          "items": [
            {
              "t": "起草汇报",
              "url": "https://app.notion.com/p/317c7394815f8051bf90e7f7c51ff51c"
            },
            {
              "t": "PPT · 大纲格式调整",
              "url": "https://app.notion.com/p/31299f7373434fb9876ec691835cddac"
            },
            {
              "t": "PPT · 文档生成",
              "url": "https://app.notion.com/p/cf36cd02e7e6435e8431153968d252f5",
              "tag": "仅手动"
            },
            {
              "t": "规范方案与汇报文档",
              "url": "https://app.notion.com/p/bb27d96b82fa4ba18d14146f8726fa8d"
            }
          ]
        },
        {
          "name": "写作编辑",
          "items": [
            {
              "t": "改进写作",
              "url": "https://app.notion.com/p/317c7394815f8123959eea73d1bd1432"
            },
            {
              "t": "校对",
              "url": "https://app.notion.com/p/317c7394815f81deb91ad5a49dc7eb8c"
            },
            {
              "t": "重排格式",
              "url": "https://app.notion.com/p/317c7394815f81728d4be4a3c38b9d00"
            },
            {
              "t": "解释",
              "url": "https://app.notion.com/p/317c7394815f81b6a73ccac2df70faea",
              "tag": "仅手动"
            }
          ]
        },
        {
          "name": "创意调研",
          "items": [
            {
              "t": "商业点子探矿",
              "url": "https://app.notion.com/p/cd0260a816584400959e754793c75395"
            },
            {
              "t": "形态分析法 · 创意发散",
              "url": "https://app.notion.com/p/fa9f1d8c07724a7d91cf0692d587bf5a",
              "tag": "仅手动"
            },
            {
              "t": "全网需求探测 · 搜索翻译官",
              "url": "https://app.notion.com/p/197f8af04e9846edaa4ee213bf5598da"
            }
          ]
        },
        {
          "name": "职场与其他",
          "items": [
            {
              "t": "纵横",
              "url": "https://app.notion.com/p/ede953cd27324937bf6cab9dad978c6a",
              "tag": "仅手动"
            },
            {
              "t": "创建 Notion 技能",
              "url": "https://app.notion.com/p/764274dda42a4630aab16b865ba1f070"
            }
          ]
        }
      ]
    },
    {
      "id": "c",
      "name": "资料层",
      "sub": "东西放哪",
      "role": "每类信息只有一处正本，别处只放链接。",
      "up": "被执行层和技能读写。",
      "down": null,
      "modules": [
        {
          "name": "项目和文档",
          "items": [
            {
              "t": "项目简报：一个项目唯一的背景来源"
            },
            {
              "t": "正式文档：方案、汇报、决策和依据"
            }
          ]
        },
        {
          "name": "个人档案",
          "items": [
            {
              "t": "Tim · 个人档案",
              "url": "https://app.notion.com/p/7b0441dcd91f48808c79c0abef183aff"
            }
          ]
        },
        {
          "name": "共享记忆",
          "items": [
            {
              "t": "Memories 库",
              "url": "https://app.notion.com/p/401c7394815f81c489ebe39613e34e11"
            },
            {
              "t": "About Tim 摘要页",
              "url": "https://app.notion.com/p/401c7394815f813f8f85f6c6a236a809"
            }
          ]
        },
        {
          "name": "系统记录",
          "items": [
            {
              "t": "修订记录：所有系统页面和技能的改动历史，平时不读",
              "url": "https://app.notion.com/p/e3919d7654ff4dd0a401cd4729c18df9"
            },
            {
              "t": "系统改进记录：只记纠错",
              "url": "https://app.notion.com/p/fa84d30389fd43ea8d35a333e9ee3214"
            }
          ]
        },
        {
          "name": "外派通道",
          "items": [
            {
              "t": "任务看板",
              "url": "https://app.notion.com/p/28bbaa669cce40d19d474e8d7c45b81d"
            },
            {
              "t": "外派流程库（执行端）",
              "url": "https://app.notion.com/p/061b62c136d54595a8ffc19779d4fbb2"
            }
          ]
        },
        {
          "name": "本地缓存",
          "items": [
            {
              "t": "CLAUDE.md、AGENTS.md：只放链接、读 Notion 前的步骤、硬边界"
            },
            {
              "t": "平台自带记忆：不是正本，冲突以 Notion 为准"
            }
          ]
        }
      ]
    }
  ],
  "flows": [
    {
      "name": "一次任务怎么走",
      "steps": [
        {
          "layer": "d",
          "text": "Tim 用大白话说要做什么"
        },
        {
          "layer": "r",
          "text": "思考大脑做工作前读工作守则和 Tim 偏好"
        },
        {
          "layer": "k",
          "text": "选技能，第一行说明用哪个"
        },
        {
          "layer": "c",
          "text": "先查后问：读项目简报、会议、记忆，只问要拍板的事"
        },
        {
          "layer": "e",
          "text": "动手做；要外部成品时派给执行触手"
        },
        {
          "layer": "c",
          "text": "写进 Notion，结论写回项目简报"
        },
        {
          "layer": "d",
          "text": "交付附证据卡，Tim 看卡验收；外发由 Tim 来按"
        },
        {
          "layer": "e",
          "text": "收尾问一句「要不要沉淀成工作模块或技能」"
        }
      ]
    },
    {
      "name": "遇到冲突听谁的",
      "steps": [
        {
          "layer": "d",
          "text": "1. Tim 当前说的话，最优先"
        },
        {
          "layer": "c",
          "text": "2. 任务卡（只在外派时）"
        },
        {
          "layer": "r",
          "text": "3. 正本：规则、偏好"
        },
        {
          "layer": "c",
          "text": "3. 正本：档案、正式文档"
        },
        {
          "layer": "c",
          "text": "4. Notion Memory"
        },
        {
          "layer": "e",
          "text": "5. 平台本地记忆，只是缓存"
        }
      ]
    },
    {
      "name": "错误怎么变成改进",
      "steps": [
        {
          "layer": "d",
          "text": "Tim 纠正产出"
        },
        {
          "layer": "e",
          "text": "Agent 先改好，再判断算不算纠错"
        },
        {
          "layer": "c",
          "text": "算就记一条系统改进记录，回复末尾告知「同类第 N 次」"
        },
        {
          "layer": "e",
          "text": "同类第 2 次：附一条改法"
        },
        {
          "layer": "d",
          "text": "Tim 同意才改"
        },
        {
          "layer": "k",
          "text": "先改结构，让错误做不出来；其次加检查；最后才加一句提醒"
        }
      ]
    },
    {
      "name": "做法怎么沉淀",
      "steps": [
        {
          "layer": "e",
          "text": "收尾时，做法以后还会用到，就问「要不要沉淀」"
        },
        {
          "layer": "d",
          "text": "Tim 说是"
        },
        {
          "layer": "r",
          "text": "工作模块清单加一行，没有技能的写模块页"
        },
        {
          "layer": "c",
          "text": "拿真实工作来用，做法要改就改模块页，在修订记录库记一条"
        },
        {
          "layer": "d",
          "text": "用顺了，Tim 说「Mxx 写成技能」"
        },
        {
          "layer": "k",
          "text": "用「创建 Notion 技能」写进技能库"
        }
      ]
    }
  ],
  "skills": {
    "起草方案": {
      "url": "https://app.notion.com/p/84b4d749ebe940ada234417eb5256cee",
      "call": "自动",
      "cmd": "/起草方案",
      "use": "把想法起草成 v0.1 方案，支持整体规划、产品、运营、营销、商业、评审与决策 6 类，写入文档库"
    },
    "起草汇报": {
      "url": "https://app.notion.com/p/317c7394815f8051bf90e7f7c51ff51c",
      "call": "自动",
      "cmd": "/起草汇报",
      "use": "先读上期汇报、会议、项目简报，再起草周报、月报、季报或专项汇报 v0.1"
    },
    "推进项目": {
      "url": "https://app.notion.com/p/9d6f37f700cb4dca867f3144e0370015",
      "call": "自动",
      "cmd": "/推进项目",
      "use": "立项、更新项目简报、记项目决定、列同步清单、结项"
    },
    "派发任务卡": {
      "url": "https://app.notion.com/p/3fcc7394815f813b855ec1c458769a89",
      "call": "仅手动",
      "use": "把要外部成品的任务写成任务卡交给 Grokbot；先判断能不能在对话里直接做"
    },
    "商业点子探矿": {
      "url": "https://app.notion.com/p/cd0260a816584400959e754793c75395",
      "call": "自动",
      "cmd": "@探矿",
      "use": "用 YC 方法挖候选、筛掉伪机会、10 问打分，产出商业方案要点"
    },
    "形态分析法 · 创意发散": {
      "url": "https://app.notion.com/p/fa9f1d8c07724a7d91cf0692d587bf5a",
      "call": "仅手动",
      "cmd": "@形态",
      "use": "用形态矩阵系统发散、组合创意，产出创意卡"
    },
    "游戏方案编译器": {
      "url": "https://app.notion.com/p/df88652d49e14ee4a78ab66e7bf39df3",
      "call": "自动",
      "cmd": "@游戏策划",
      "use": "把游戏想法编译成 Codex 能开工的方案，写入游戏专案库"
    },
    "全网需求探测 · 搜索翻译官": {
      "url": "https://app.notion.com/p/197f8af04e9846edaa4ee213bf5598da",
      "call": "自动",
      "cmd": "@全网探测",
      "use": "把中文调研需求转成 Reddit、X、YouTube 等平台的英文关键词和搜索计划；不抓取、不分析"
    },
    "纵横": {
      "url": "https://app.notion.com/p/ede953cd27324937bf6cab9dad978c6a",
      "call": "仅手动",
      "cmd": "@纵横",
      "use": "拆解职场人际困局，给 2–3 条附话术和风险的策略；不用于业务方案"
    },
    "PPT · 大纲格式调整": {
      "url": "https://app.notion.com/p/31299f7373434fb9876ec691835cddac",
      "call": "自动",
      "use": "把文档转成逐页 PPT 大纲：标题、正文、布局、解说词"
    },
    "PPT · 文档生成": {
      "url": "https://app.notion.com/p/cf36cd02e7e6435e8431153968d252f5",
      "call": "仅手动",
      "use": "把逐页大纲转成交给 Codex 生成 .pptx 的指令"
    },
    "规范方案与汇报文档": {
      "url": "https://app.notion.com/p/bb27d96b82fa4ba18d14146f8726fa8d",
      "call": "自动",
      "use": "整理已有文档的分类、属性、命名，导出 PDF、腾讯文档"
    },
    "改进写作": {
      "url": "https://app.notion.com/p/317c7394815f8123959eea73d1bd1432",
      "call": "自动",
      "use": "润色改写，提升表达、结构和流畅度"
    },
    "校对": {
      "url": "https://app.notion.com/p/317c7394815f81deb91ad5a49dc7eb8c",
      "call": "自动",
      "use": "只改错别字、语法、标点"
    },
    "重排格式": {
      "url": "https://app.notion.com/p/317c7394815f81728d4be4a3c38b9d00",
      "call": "自动",
      "use": "只调标题、列表、分段，不动文字"
    },
    "解释": {
      "url": "https://app.notion.com/p/317c7394815f81b6a73ccac2df70faea",
      "call": "仅手动",
      "use": "在聊天里用大白话解释选中的词或概念"
    },
    "创建 Notion 技能": {
      "url": "https://app.notion.com/p/764274dda42a4630aab16b865ba1f070",
      "call": "自动",
      "cmd": "@建技能",
      "use": "新建技能，或改写、体检现有技能的名称和描述"
    },
    "同步技能": {
      "url": "https://app.notion.com/p/40ec7394815f819486ece610963f061f",
      "call": "仅手动",
      "cmd": "/sync-skills",
      "use": "给 Claude Code、Codex 生成本地技能指针"
    },
    "更新系统地图": {
      "url": "https://app.notion.com/p/410c7394815f81559af6dabee5034225",
      "call": "Agent 专用",
      "use": "从 Notion 回读，更新这张地图"
    },
    "系统体检": {
      "url": "https://app.notion.com/p/414c7394815f8104a706ee40ca48413b",
      "call": "Agent 专用",
      "use": "只读检查知识中心生效页、本地指令文件和系统地图，输出红黄绿表和改法，不改任何内容"
    }
  },
  "modules": [
    {
      "id": "M01",
      "name": "创意发散",
      "group": "提案",
      "status": "技能版",
      "io": "模糊想法 → 候选方向和初筛",
      "skills": [
        "商业点子探矿",
        "形态分析法 · 创意发散",
        "游戏方案编译器"
      ]
    },
    {
      "id": "M02",
      "name": "起草方案",
      "group": "提案",
      "status": "技能版",
      "io": "想法和资料 → v0.1 方案，附证据卡",
      "skills": [
        "起草方案"
      ]
    },
    {
      "id": "M03",
      "name": "调研收集",
      "group": "信息收集",
      "status": "技能版",
      "io": "问题和信息来源 → 有出处的摘要或对比表，事实、推测、未知分开",
      "skills": [
        "全网需求探测 · 搜索翻译官"
      ],
      "note": "技能只管规划搜索"
    },
    {
      "id": "M04",
      "name": "材料吸收",
      "group": "信息收集",
      "status": "技能版",
      "io": "会议、邮件、截图、口述 → 改动清单，确认后写进项目简报",
      "skills": [
        "推进项目"
      ]
    },
    {
      "id": "M05",
      "name": "业务评审",
      "group": "决策辅助",
      "status": "待建",
      "io": "方案或选项 → 风险、反例、多视角分歧、建议，待拍板最多 3 项",
      "skills": []
    },
    {
      "id": "M06",
      "name": "职场策略",
      "group": "决策辅助",
      "status": "技能版",
      "io": "人际难题 → 2–3 条策略，附话术和风险",
      "skills": [
        "纵横"
      ]
    },
    {
      "id": "M07",
      "name": "立项与结项",
      "group": "项目管理",
      "status": "技能版",
      "io": "定稿方案 → 项目简报；结项补结果",
      "skills": [
        "推进项目"
      ]
    },
    {
      "id": "M08",
      "name": "规划拆解",
      "group": "项目管理",
      "status": "手工版",
      "io": "目标、资源、截止日 → 里程碑、排期、负责人、依赖，写进项目简报",
      "skills": [],
      "url": "https://app.notion.com/p/414c7394815f8192a727e88672cf329a"
    },
    {
      "id": "M09",
      "name": "项目周检",
      "group": "项目管理",
      "status": "待建",
      "io": "全部进行中项目 → 过期待决、临近里程碑、健康度建议，待拍板最多 3 项",
      "skills": []
    },
    {
      "id": "M10",
      "name": "PPT 制作",
      "group": "成品制作",
      "status": "技能版",
      "io": "定稿 → 逐页大纲 → .pptx",
      "skills": [
        "PPT · 大纲格式调整",
        "PPT · 文档生成"
      ]
    },
    {
      "id": "M11",
      "name": "文档规范与导出",
      "group": "成品制作",
      "status": "技能版",
      "io": "已有文档 → 补属性、清格式、导出 PDF 或腾讯文档",
      "skills": [
        "规范方案与汇报文档"
      ]
    },
    {
      "id": "M12",
      "name": "H5 与原型",
      "group": "成品制作",
      "status": "待建",
      "io": "定稿 → 能打开的 H5、落地页或原型",
      "skills": []
    },
    {
      "id": "M13",
      "name": "文字修改",
      "group": "成品制作",
      "status": "技能版",
      "io": "选中文字 → 润色、校对、重排、解释",
      "skills": [
        "改进写作",
        "校对",
        "重排格式",
        "解释"
      ]
    },
    {
      "id": "M14",
      "name": "起草汇报",
      "group": "信息同步",
      "status": "技能版",
      "io": "周期和项目 → 周报、月报、季报，附证据卡",
      "skills": [
        "起草汇报"
      ]
    },
    {
      "id": "M15",
      "name": "沟通草稿",
      "group": "信息同步",
      "status": "技能版",
      "io": "结论和收件人 → 邮件、群消息、在线文档（只生成不发送）",
      "skills": [
        "推进项目",
        "派发任务卡"
      ]
    },
    {
      "id": "M16",
      "name": "复盘",
      "group": "系统维护",
      "status": "技能版",
      "io": "一段时间的记录 → 结论和改进项",
      "skills": [
        "起草汇报"
      ]
    },
    {
      "id": "M17",
      "name": "技能管理",
      "group": "系统维护",
      "status": "技能版",
      "io": "反复用的做法 → 技能库条目和本地指针",
      "skills": [
        "创建 Notion 技能",
        "同步技能"
      ]
    },
    {
      "id": "M18",
      "name": "系统地图",
      "group": "系统维护",
      "status": "技能版",
      "io": "Notion 正本 → 系统地图；推送前体检一致性",
      "skills": [
        "更新系统地图",
        "系统体检"
      ]
    }
  ],
  "workflows": [
    {
      "id": "W1",
      "name": "项目周循环",
      "goal": "进行中的项目每周至少更新一次，决定和待办不丢，卡点一周内被发现",
      "cmd": "随时「把这个记进 X 项目」；每周「项目周检」",
      "chain": [
        {
          "m": "M04"
        },
        {
          "m": "M09"
        },
        {
          "m": "M15"
        }
      ]
    },
    {
      "id": "W2",
      "name": "周期汇报",
      "goal": "每周五前交出数据有出处的周报；月报、季报汇总下级汇报",
      "cmd": "「写周报」「写月报」",
      "chain": [
        {
          "m": "M04"
        },
        {
          "m": "M14"
        },
        {
          "m": "M11",
          "opt": true
        },
        {
          "m": "M15",
          "opt": true
        }
      ]
    },
    {
      "id": "W3",
      "name": "新项目落地",
      "goal": "从一个想法到有排期、有负责人、团队知道的项目",
      "cmd": "「我想做 X」",
      "chain": [
        {
          "m": "M01",
          "opt": true
        },
        {
          "m": "M02"
        },
        {
          "m": "M05"
        },
        {
          "m": "M07"
        },
        {
          "m": "M08"
        },
        {
          "m": "M15"
        }
      ]
    },
    {
      "id": "W4",
      "name": "方案到交付",
      "goal": "把定稿方案做成能拿出去的成品",
      "cmd": "「把 X 做成 PPT / H5 / PDF」",
      "chain": [
        {
          "m": "M02"
        },
        {
          "m": "M05",
          "opt": true
        },
        {
          "m": "M10",
          "alt": true
        },
        {
          "m": "M11",
          "alt": true
        },
        {
          "m": "M12",
          "alt": true
        },
        {
          "m": "M15",
          "opt": true
        }
      ]
    }
  ],
  "solo": {
    "name": "单独调用",
    "sub": "不串进工作流，随用随叫",
    "mods": [
      "M06",
      "M13"
    ],
    "note": "单独调用、不串进工作流：M06 职场策略、M13 文字修改。其他工作流见「以后再说」。"
  },
  "rollout": {
    "name": "第一批打磨",
    "sub": "一次打磨一个，先手工跑",
    "order": [
      {
        "m": "M08"
      },
      {
        "m": "M09"
      },
      {
        "m": "M05"
      }
    ],
    "steps": [
      "Tim 说「新增工作模块 X」，或者「这次按 Mxx 做」",
      "Agent 在清单加一行（含工作类型）；没有现成技能的，建模块页，写定义和 3–6 步做法",
      "拿一件真实的工作来用，交付时附证据卡",
      "收尾时问「这次做法要改吗？」，Tim 说改就改模块页，在修订记录库记一条",
      "Tim 觉得用顺了，就说「Mxx 写成技能」，交给「创建 Notion 技能」；形态改为技能版"
    ]
  },
  "use": {
    "source": {
      "name": "工作模块清单 · 第 5 节",
      "url": "https://app.notion.com/p/414c7394815f815f8923d81424d50c85"
    },
    "general": [
      {
        "k": "写方案、汇报、管项目",
        "v": "Claude Code，在项目文件夹或对应工作台"
      },
      {
        "k": "页面里只改一段",
        "v": "Notion AI，就地改"
      },
      {
        "k": "代码、原型、数据",
        "v": "Claude Code 或 Codex，在项目文件夹"
      },
      {
        "k": "外部账号、后台运行",
        "v": "外派平台，经「派发任务卡」，只生成不发送"
      },
      {
        "k": "验收",
        "v": "看证据卡判断，不用读全文；外发、删除、对外承诺由你来按"
      },
      {
        "k": "收尾",
        "v": "Agent 可能问「要不要沉淀成工作模块或技能」，回「是」或「不用」"
      }
    ],
    "wfUse": {
      "W1": {
        "where": "Claude Code，项目文件夹（没有就在工作台）",
        "say": "随时「把这个记进 X 项目」；每周「项目周检」",
        "prep": "会议纪要、截图、聊天记录或口述",
        "get": "改动清单；周检列出过期待决、临近里程碑和要你拍板的事",
        "todo": "确认改动清单后才写进项目简报"
      },
      "W2": {
        "where": "Claude Code，对应工作台",
        "say": "「写周报」「写月报」",
        "prep": "口述本周要点；上期周报、会议和项目简报由 Agent 自己读",
        "get": "文档库里的 v0.1 草稿，附证据卡",
        "todo": "看证据卡，补缺的点；要导出 PDF 或同步给人再说一句"
      },
      "W3": {
        "where": "Claude Code，对应工作台",
        "say": "「我想做 X」",
        "prep": "想法和已有资料的链接",
        "get": "方案 v0.1 → 评审 → 项目简报 → 排期",
        "todo": "每一步停下来等你拍板"
      },
      "W4": {
        "where": "PPT、PDF：Claude Code；H5：项目文件夹里 Claude Code 或 Codex；要在线托管：外派平台",
        "say": "「把 X 做成 PPT / H5 / PDF」",
        "prep": "定稿方案的链接",
        "get": "先给呈现方案，确认后交成品链接",
        "todo": "确认呈现方案；对外发送由你来按"
      }
    },
    "modUse": {
      "M01": {
        "where": "Claude Code",
        "say": "「帮我找商业点子」「用形态分析法发散 X」「帮我策划一个游戏」",
        "prep": "方向或约束",
        "get": "候选方向和打分",
        "todo": "挑一个，值得做就接 W3"
      },
      "M02": {
        "where": "Claude Code，对应工作台",
        "say": "「帮我写一份 X 方案」",
        "prep": "想法、已有资料的链接",
        "get": "文档库里的 v0.1 方案，附证据卡",
        "todo": "看证据卡，补「待补」项"
      },
      "M03": {
        "where": "Claude Code",
        "say": "「帮我规划海外调研关键词」",
        "prep": "要回答的问题",
        "get": "平台、关键词和搜索计划（只规划，不抓取）",
        "todo": "决定自己查还是外派"
      },
      "M04": {
        "where": "Claude Code，项目文件夹或工作台",
        "say": "「把这个记进 X 项目」",
        "prep": "会议纪要、截图、聊天记录或口述",
        "get": "改动清单",
        "todo": "确认后才写进项目简报"
      },
      "M05": {
        "where": "Claude Code",
        "say": "「帮我评审这个方案」",
        "prep": "方案链接",
        "get": "风险、反例、不同视角的分歧和建议，待拍板最多 3 项",
        "todo": "拍板"
      },
      "M06": {
        "where": "Claude Code 或 Claude 聊天",
        "say": "「用纵横看看这件事」",
        "prep": "事情经过、涉及的人",
        "get": "2–3 条策略，附话术和风险",
        "todo": "自己选一条"
      },
      "M07": {
        "where": "Claude Code，对应工作台",
        "say": "「帮我立项 X」「X 项目结束了」",
        "prep": "定稿方案",
        "get": "项目简报；结项时补结果",
        "todo": "确认够格、确认改动"
      },
      "M08": {
        "where": "Claude Code，项目文件夹或工作台",
        "say": "「这次按 M08 做 X 的排期」",
        "prep": "目标、截止日、有哪些人",
        "get": "里程碑和排期表，写进项目简报",
        "todo": "拍板工期、人员这些假设"
      },
      "M09": {
        "where": "Claude Code",
        "say": "「项目周检」",
        "prep": "—",
        "get": "过期待决、临近里程碑、健康度建议，待拍板最多 3 项",
        "todo": "拍板"
      },
      "M10": {
        "where": "Claude Code",
        "say": "「把 X 做成 PPT」",
        "prep": "定稿方案的链接",
        "get": "逐页大纲，确认后出 .pptx",
        "todo": "确认大纲"
      },
      "M11": {
        "where": "Claude Code",
        "say": "「把这份文档整理规范」「导出 PDF」",
        "prep": "已有文档的链接",
        "get": "补好属性、清好格式的文档，或 PDF、腾讯文档",
        "todo": "看一眼成品"
      },
      "M12": {
        "where": "Claude Code 或 Codex，项目文件夹",
        "say": "「把 X 做成 H5」",
        "prep": "定稿方案的链接",
        "get": "能打开的 H5、落地页或原型",
        "todo": "确认呈现方案"
      },
      "M13": {
        "where": "Notion AI，在页面里选中文字",
        "say": "「润色」「校对」「重排」「解释一下」",
        "prep": "选中的文字",
        "get": "改好的文字",
        "todo": "不满意就说哪里要改"
      },
      "M14": {
        "where": "Claude Code，对应工作台",
        "say": "「写周报」「写月报」「写季报」",
        "prep": "口述要点；上期汇报和项目简报由 Agent 自己读",
        "get": "文档库里的 v0.1，附证据卡",
        "todo": "看证据卡，补缺的点"
      },
      "M15": {
        "where": "Claude Code；要在线文档或外部平台的经「派发任务卡」外派",
        "say": "「把这个同步给 XX」",
        "prep": "结论和收件人",
        "get": "消息、邮件草稿或在线文档（只生成不发送）",
        "todo": "自己发出去"
      },
      "M16": {
        "where": "Claude Code",
        "say": "「写 X 的复盘」「周复盘」",
        "prep": "要复盘的时间段或项目",
        "get": "结论和改进项",
        "todo": "决定改不改"
      },
      "M17": {
        "where": "Claude Code，系统维护的文件夹",
        "say": "「Mxx 写成技能」「同步技能」",
        "prep": "—",
        "get": "技能库里的新技能和本地指针",
        "todo": "确认技能描述"
      },
      "M18": {
        "where": "Claude Code，系统维护的文件夹",
        "say": "「更新系统地图」",
        "prep": "—",
        "get": "这次的变化清单",
        "todo": "同意后才推送到公开页"
      }
    }
  },
  "start": {
    "source": {
      "name": "给 Tim：操作说明",
      "url": "https://app.notion.com/p/414c7394815f81ca8ed7da189e01118b"
    },
    "intro": "接入 Agent 每个平台做一次，建项目每个项目做一次；做事的用法在「工作模块与工作流」。",
    "cards": [
      {
        "id": "setup",
        "name": "接入一个新 Agent",
        "sub": "每个平台一次",
        "role": "把三行指令放进平台设置。之后做工作时它自己去 Notion 读规则，闲聊和一般问答不读。",
        "rows": [
          {
            "k": "Claude Code",
            "v": "~/.claude/AGENTS.md（全局，所有文件夹都生效）",
            "tag": "已接"
          },
          {
            "k": "Codex",
            "v": "~/.codex/AGENTS.md",
            "tag": "已接"
          },
          {
            "k": "Notion AI",
            "v": "「Notion 第二大脑」做工作前先读一节",
            "tag": "已接"
          },
          {
            "k": "Claude 聊天",
            "v": "设置里的 Claude 指令",
            "tag": "待配置"
          },
          {
            "k": "Grokbot",
            "v": "平台配置（11-22 定外派平台后）",
            "tag": "待配置"
          }
        ],
        "codeTitle": "每个平台都放这三行",
        "code": "做工作相关的事（项目、方案、汇报、写 Notion、按工作模块做事）前，先读 Notion「知识中心」：https://app.notion.com/p/400c7394815f81d181eef3c3c4764461 ，按页首「给 Agent」部分执行；闲聊和一般问答不用读。\n连不上 Notion 时告诉 Tim，不凭记忆或本地文件执行。\n外发、删除、对外承诺由 Tim 来按。",
        "after": [
          {
            "k": "验证",
            "v": "开一个新会话说「验证接入」，它会读一遍并列出工作守则、Tim 偏好和版本"
          },
          {
            "k": "接好以后",
            "v": "你什么都不用做：做工作时 Agent 自己读规则；闲聊不读。它该读没读时，说「按知识中心来」"
          }
        ],
        "idx": "1"
      },
      {
        "id": "project",
        "name": "建一个项目",
        "sub": "每个项目一次：先立项，再决定要不要开文件夹",
        "ordered": true,
        "role": "立项只在 Notion 里建项目简报；项目文件夹是给 Claude Code、Codex 干活用的，按需才开。",
        "rows": [
          {
            "k": "立项",
            "v": "在对应的工作台文件夹开 Claude Code，说「帮我立项 X」；Agent 判断够不够格，建项目简报"
          },
          {
            "k": "要不要开文件夹",
            "v": "有自己的文件产出（代码、报告、数据）、要分多次长期推进、要单独发布，满足一条才开；否则一直在工作台做"
          },
          {
            "k": "开文件夹",
            "v": "Agent 在 ~/ClaudecodeProjects/项目名/ 建好文件夹和 CLAUDE.md，你确认；要发布或版本管理的再加 git"
          },
          {
            "k": "Codex 也要用",
            "v": "一次性设置让 Codex 读 CLAUDE.md，不用每个项目再放 AGENTS.md；在那之前要在对话里给它项目简报链接",
            "tag": "待核实"
          },
          {
            "k": "以后进项目",
            "v": "在那个文件夹开新会话，不用贴背景；换会话前让 Agent 把结论写回项目简报"
          }
        ],
        "codeTitle": "CLAUDE.md 只写这几行",
        "copyLabel": "复制模板",
        "code": "# 项目名\n\n项目简报（正本）：<Notion 链接>\n通用规则：按 Notion「知识中心」页首「给 Agent」：https://app.notion.com/p/400c7394815f81d181eef3c3c4764461\n\n- 项目内容、决定、进度以项目简报为准；本文件夹只放工作文件，不存决定。\n- 写 Notion 前先列改动清单，等 Tim 确认；外发、删除、对外承诺由 Tim 来按。",
        "idx": "2"
      }
    ]
  },
  "changes": {
    "source": {
      "name": "修订记录",
      "url": "https://app.notion.com/p/e3919d7654ff4dd0a401cd4729c18df9"
    },
    "list": [
      {
        "date": "2026-11-11",
        "title": "系统地图改版：两行菜单、用法卡并入「工作模块与工作流」、更新记录改为时间线",
        "version": "工作模块清单 v1.3",
        "url": "https://app.notion.com/p/414c7394815f8151a4d1cf11c4230b03"
      },
      {
        "date": "2026-11-11",
        "title": "「开始使用」改为三步：接入 Agent、建项目、做事",
        "version": "工作模块清单 v1.2",
        "url": "https://app.notion.com/p/414c7394815f81dba7f9fbf5df3077e7"
      },
      {
        "date": "2026-11-11",
        "title": "知识中心改为做工作时才读",
        "version": "平台指令",
        "url": "https://app.notion.com/p/414c7394815f81dca9d2f620c730a1c4"
      },
      {
        "date": "2026-11-11",
        "title": "新建技能「系统体检」，接入地图推送前检查",
        "version": "工作模块清单 v1.1 · 以后再说 v1.0",
        "url": "https://app.notion.com/p/414c7394815f816981fbccd102b56556"
      },
      {
        "date": "2026-11-10",
        "title": "体检后修正：去重、改用引用、清理过时说法",
        "version": "工作守则 v2.1 · 工作模块清单 v1.1 · 任务流转规则 v2.1",
        "url": "https://app.notion.com/p/414c7394815f81b99593cd571580713e"
      },
      {
        "date": "2026-11-10",
        "title": "更新系统地图：自检加链接格式检查",
        "version": "更新系统地图（技能）",
        "url": "https://app.notion.com/p/414c7394815f8130b679d9beaa1e1ee7"
      },
      {
        "date": "2026-11-10",
        "title": "系统精简为确定版 v1",
        "version": "工作守则 v2.0 · 工作模块清单 v1.0",
        "url": "https://app.notion.com/p/414c7394815f812781a1fdfa0507120c"
      },
      {
        "date": "2026-11-10",
        "title": "系统地图改为 4 个视图",
        "version": "更新系统地图（技能）",
        "url": "https://app.notion.com/p/414c7394815f8196b934ecab95f08376"
      }
    ]
  }
};
