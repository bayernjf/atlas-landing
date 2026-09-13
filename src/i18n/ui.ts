// Bilingual copy dictionary. Flat dot-keyed so a missing key is obvious at the
// call site; read through useTranslations(lang), never indexed directly.
export const languages = {
  en: "English",
  zh: "简体中文",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Atlas — turn business operations into living AI agents",
    "meta.description":
      "Atlas is an AI operator orchestration platform. Wire any system in through Harness, define how work flows in an executable Graph, and let Loop run it, self-heal and evolve — no code required. First target scenario: enterprise OA approvals.",

    "nav.langSwitch": "中文",
    "hud.home": "Atlas home",

    "hero.badge": "design stage · private beta intake",
    "hero.title.line1": "Turn business operations",
    "hero.title.pre": "into ",
    "hero.title.accent": "living agents",
    "hero.title.post": "",
    "hero.sub":
      "Harness connects any product, platform, API or database as one operable object. Graph freezes how work flows — steps, branches, exception rules — into an executable causal map. Loop senses, plans, acts and adapts, 24×7. Build an AI operator that owns the whole loop, not a Copilot that just suggests.",
    "hero.cta.primary": "Request early access",
    "hero.cta.secondary": "See how it works",
    "hero.meta.scenarios": "scenario classes covered",
    "hero.meta.demoScenes": "demo scenes",
    "hero.meta.noCode": "no-code DIY",
    "hero.map.bar": "OPERATIONS GRID",
    "hero.legend.harness": "Harness · capability bus",
    "hero.legend.graph": "Graph · executable flow",
    "hero.legend.loop": "Loop · self-evolving cycle",

    "pillars.kicker": "ONE RUNTIME, THREE PRIMITIVES",
    "pillars.title": "Harness · Graph · Loop",
    "pillars.sub":
      "Three deterministic primitives — not metaphors. Together they make one self-running, self-healing operator for any system you connect.",
    "pillars.harness.title": "Harness",
    "pillars.harness.role": "capability access",
    "pillars.harness.body":
      "The platform abstraction and integration bus. It turns any product, platform, API, UI or database into a standardized operable object — one unified create_campaign, one check_refund, regardless of what sits behind it.",
    "pillars.harness.example": "One Harness drives an e-commerce backend, a merchant console and email in a single action surface.",
    "pillars.graph.title": "Graph",
    "pillars.graph.role": "executable knowledge",
    "pillars.graph.body":
      "The executable causal map of domain knowledge, business logic and task flow. Nodes are states and actions, edges are conditions and events — not a static knowledge base, but a runnable decision structure.",
    "pillars.graph.example": "An approval Graph encodes step order, decision branches and exception rules; an ops Graph closes the loop from selection to delivery.",
    "pillars.loop.title": "Loop",
    "pillars.loop.role": "self-adaptive cycle",
    "pillars.loop.body":
      "The perpetual sense → plan → act → feedback cycle. The LLM plans the next move under Graph's constraints using Harness's live data, executes, observes the result, adjusts — a continuous optimization flywheel.",
    "pillars.loop.example": "Ads ROI drops → enter a diagnosis subgraph → adjust targeting via Harness → watch the new ROI → keep or roll back.",

    "scenarios.kicker": "WHERE IT RUNS",
    "scenarios.title": "From replacing manuals to business autonomy",
    "scenarios.sub":
      "Seven scenario classes today, one runtime. The first enterprise target is OA approval flows.",
    "scenarios.a.title": "Instant guidance",
    "scenarios.a.body": "Replace the manual: an operator takes over a SaaS UI, walks the user through, adapts when they get stuck.",
    "scenarios.b.title": "Fully automated SOP",
    "scenarios.b.body": "Refunds, approvals, tickets, closed-loop SOPs across e-commerce, finance and HR systems.",
    "scenarios.c.title": "AI platform support",
    "scenarios.c.body": "Intent detection, cross-system lookup and handoff to humans — a support agent that owns the whole ticket.",
    "scenarios.more": "Plus industrial IoT, quantitative finance, content growth and adaptive education — 7 classes in the full landscape.",

    "cta.title": "Own the whole loop, not a suggestion box",
    "cta.sub":
      "Atlas is in design with a working demo roadmap. Join the early-access list to shape what an autonomous operator looks like for your approval flows and SOPs.",
    "cta.button": "Request early access",
    "cta.note": "The demo roadmap and technical choices are tracked in the product repo.",

    "foot.tag": "An AI operator orchestration platform — Harness, Graph, Loop.",
    "foot.nav.pillars": "The three primitives",
    "foot.nav.scenarios": "Scenarios",
    "foot.nav.cta": "Early access",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",

    "legal.privacy.title": "Privacy Policy",
    "legal.terms.title": "Terms of Service",
    "legal.body":
      "This is a placeholder page for the Atlas landing site. The product is in design stage; policies will be published before the public launch. For now, reach out via the GitHub repository.",
  },
  zh: {
    "meta.title": "Atlas — 让业务流程变成活着的 AI 运营体",
    "meta.description":
      "Atlas 是 AI 运营体编排平台：Harness 接入任何系统，Graph 固化流程，Loop 自动执行、自愈与进化——无需写代码。首个目标场景：企业内部 OA 审批。",

    "nav.langSwitch": "English",
    "hud.home": "Atlas 首页",

    "hero.badge": "设计阶段 · 内测招募中",
    "hero.title.line1": "让业务流程",
    "hero.title.pre": "变成",
    "hero.title.accent": "活着的运营体",
    "hero.title.post": "",
    "hero.sub":
      "Harness 把任意产品、平台、API、数据库封装成一个可操作对象；Graph 把步骤、分支、异常规则固化成可执行的因果图；Loop 以感知→规划→执行→反馈永续运转。不是只会提建议的 Copilot，而是独立承担闭环责任的 AutoPilot。",
    "hero.cta.primary": "申请内测",
    "hero.cta.secondary": "了解运作方式",
    "hero.meta.scenarios": "覆盖场景类别",
    "hero.meta.demoScenes": "Demo 场景",
    "hero.meta.noCode": "零代码 DIY",
    "hero.map.bar": "运营网格",
    "hero.legend.harness": "Harness · 能力接入",
    "hero.legend.graph": "Graph · 可执行流程",
    "hero.legend.loop": "Loop · 自我进化循环",

    "pillars.kicker": "一套运行时，三个技术基元",
    "pillars.title": "Harness · Graph · Loop",
    "pillars.sub":
      "不是比喻，而是三个确定性的技术基元。三者合一，让任何接入的系统都拥有一个自动运转、自我修复的运营体。",
    "pillars.harness.title": "Harness",
    "pillars.harness.role": "驾驭层 · 能力接入",
    "pillars.harness.body":
      "平台抽象与能力集成总线。把任何产品、平台、API、界面、数据库连接成标准化的「可操作对象」——无论背后是什么，对上层都暴露统一的动作。",
    "pillars.harness.example": "一个 Harness 能同时操控电商后台、商家版、邮件系统，对上层暴露统一的 create_campaign 动作。",
    "pillars.graph.title": "Graph",
    "pillars.graph.role": "认知图谱 · 流程骨架",
    "pillars.graph.body":
      "领域知识、业务逻辑和任务流的可执行结构。节点是状态/动作，边是条件/事件——不是静态知识库，而是可执行的因果有向图。",
    "pillars.graph.example": "审批 Graph 固化步骤顺序、决策分支与异常规则；运营 Graph 是「选品→测款→投放→复盘」的闭环路径。",
    "pillars.loop.title": "Loop",
    "pillars.loop.role": "智能体循环 · 永续自适应",
    "pillars.loop.body":
      "感知→规划→执行→反馈的永续闭环。LLM 在 Graph 约束下，依据 Harness 的实时数据动态规划下一步，执行后观察结果再调整——持续优化的运营飞轮。",
    "pillars.loop.example": "广告 ROI 下降 → 进入诊断子图 → Harness 调整受众参数 → 观察新 ROI → 固化或回滚。",

    "scenarios.kicker": "跑在哪",
    "scenarios.title": "从「替代手册」到「业务自治」",
    "scenarios.sub":
      "今天已覆盖 7 类场景，一套运行时。企业内运营是首个落地目标——OA 审批流。",
    "scenarios.a.title": "即时代替手册",
    "scenarios.a.body": "复杂 SaaS 新手引导、设备操作指引：运营体接管界面，边说边做，用户卡壳时自适应引导下一步。",
    "scenarios.b.title": "全自动 SOP 运营",
    "scenarios.b.body": "退款审批、工单闭环、跨系统数据补全：电商、财务、HR 的标准化流程全自动跑完。",
    "scenarios.c.title": "AI 平台客服",
    "scenarios.c.body": "自动回复、意图识别、跨系统查询、转人工协作——一个运营体全程跟进工单。",
    "scenarios.more": "另有智能硬件运维、金融量化风控、内容增长、自适应教育——全场景图谱共 7 类。",

    "cta.title": "拥有整个闭环，而不是一个建议框",
    "cta.sub":
      "Atlas 处于设计阶段，Demo 路线图已排定。加入内测名单，一起定义属于你的审批流与 SOP 的自主运营体。",
    "cta.button": "申请内测",
    "cta.note": "Demo 路线图与技术选型进度见产品仓库。",

    "foot.tag": "AI 运营体编排平台——Harness · Graph · Loop。",
    "foot.nav.pillars": "三大基元",
    "foot.nav.scenarios": "应用场景",
    "foot.nav.cta": "内测申请",
    "foot.nav.privacy": "隐私政策",
    "foot.nav.terms": "服务条款",

    "legal.privacy.title": "隐私政策",
    "legal.terms.title": "服务条款",
    "legal.body":
      "本页面为 Atlas 落地页占位页。产品处于设计阶段，政策将在公开发布前正式发布。目前可通过 GitHub 仓库联系。",
  },
};

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
