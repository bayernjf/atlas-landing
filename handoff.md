# Handoff — atlas-landing

更新时间：2026-09-13

## 项目概况
Atlas 落地页：AI 运营体（Agent）编排平台——以 **Harness（能力接入）/ Graph（可执行因果图）/ Loop（OODA 主循环）** 三位一体为内核，让非技术人员通过自然语言 / 拖拽定义流程，由运营体自动执行、自愈与进化。首个目标场景：企业内部 OA 审批。

Astro 7 静态站点（`output: 'static'`），中英双语（`/` 英文默认，`/zh/` 中文），React 19 island 预留可交互区，`@bay/landing-ui` 提供品牌返链与 GitHub Star 组件，design token 集中在 `src/styles/global.css` 的 `@layer tokens`。

- 线上：`https://atlas.bayjf.com`（English）· `https://atlas.bayjf.com/zh/`（简体中文）**（域名待确认，见"下一步"）**
- Pages 项目：`atlas-landing`（域名 `atlas-landing.pages.dev`）**（待创建）**
- 产品仓库：`https://github.com/bayernjf/atlas`（设计文档完成，代码未启动）

## 当前状态（2026-09-13 骨架搭建）
按 `agent-world-landing` 惯例搭建骨架（目录结构、元文档、i18n 双语文案、Astro 配置、构建截图脚本），内容基于产品仓库 `docs/01-PRD` 提取的真实产品信息；尚未实现完整视觉组件（Hero 之外的区块为骨架占位）。

- 技术栈：Astro 7（SSG）+ React 19 island + `@bay/landing-ui` + `@astrojs/sitemap`；Node >= 22.12 / npm
- 分支：`main`（骨架阶段直接提交 main，落地后转 dev/main 双分支流程）

## 数字型文案对账清单（产品迭代后优先核对，易过期）
| 落地页表述 | 产品事实来源（atlas 仓库） |
| --- | --- |
| Harness / Graph / Loop 三位一体定义 | `docs/01-PRD` 一 |
| 三大 Demo 核心场景（操作指引 / SOP 运营 / AI 客服） | `docs/01-PRD` 1.3 |
| 全场景图谱 7 类（即时代替手册 / 电商 / 企业内运营 / IoT / 金融 / 内容 / 教育） | `docs/01-PRD` 三 |
| DIY 分层配置（教学 / 自然语言 / 乐高搭建） | `docs/01-PRD` 五 |
| 技术选型（Python 3.11+ / LangChain+LangGraph / LiteLLM / Playwright / PostgreSQL+pgvector / Redis / FastAPI / TS+React 18 / React Flow+Zustand） | `docs/02` + `docs/10` §2 |
| 首个目标场景：企业 OA 审批 | 产品 handoff「项目概况」 |

## 注意点
- Cloudflare Pages **Production branch 是 `main`**，日常开发在 `dev`：`dev` 只会产出 preview 部署，
  必须把 `dev` 合进 `main` 才发生产。构建命令 `npx playwright install chromium && npm run build`，
  输出目录 `dist`，环境变量 `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`。
- `npm run build` 内含 `node scripts/shot.mjs`，构建时用 Playwright 截图产出预览 / OG 图；
  `public/preview.png` 与 `public/og/` 不在版本库里，属于构建产物。
- 所有文案必须走 `src/i18n/ui.ts` 且中英双语同时改；组件里不允许硬编码文案。
- 换域名时要同步改 `src/consts.ts` 的 `SITE_URL` 和 `public/robots.txt` 里的 Sitemap 地址。
- 需要 Node >= 22.12（Astro 7 会拒绝 20.x），开发服务器端口见 `.claude/launch.json`（3017）。
- 产品侧选型未全部收口（T1-T5 待决策），落地页文案中的技术细节以 10 文档 §2 已定清单为准，勿提前承诺未定项。

## 下一步
1. **owner 确认域名**：`atlas.bayjf.com` 是否启用；确认后在 Cloudflare Pages 创建 `atlas-landing` 项目并连 GitHub。
2. 骨架视觉迭代：按产品定位完成 Hero / 三支柱（Harness/Graph/Loop）/ 场景 / CTA 各区块的正式视觉（当前为基础占位），
   可交互区（沙盒 / 流程图预览）后续用 React island 实现。
3. 文案随产品迭代同步，改产品时按上面的对账清单回来核对数字（尤其 Demo 范围、选型收口后）。
4. 与 hub 站 bayjf 的产品卡片封面保持一致（引用的是构建产出的 preview.png）。
