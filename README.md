# Atlas — Landing

AI 运营体（Agent）编排平台落地页。Harness 是能力接入，Graph 是可执行因果图，Loop 是永续自适应闭环——让非技术人员用自然语言 / 拖拽定义流程，由运营体自动执行、自愈与进化。

- 产品仓库：https://github.com/bayernjf/atlas
- 线上：https://atlas.bayjf.com （English）· https://atlas.bayjf.com/zh/ （简体中文）*（域名待确认）*

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`
- React 19 island（`client:idle`）承载可交互区
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`
- `@bay/landing-ui` 提供品牌链接与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+（`node -v` 确认；Astro 7 会拒绝 20.x）。

```bash
npm install
npm run dev
```

开发服务器默认跑在 3017 端口（见 `.claude/launch.json`）。

## 构建

```bash
npm run build
```

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务，用 Playwright 截取两种
语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png` 作为 og:image。预览图不入库，
每次构建现生成，所以改了首屏视觉不用手动重截。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 目录结构

```
public/            favicon、brand mark、robots.txt、llms.txt / llms-en.txt
scripts/shot.mjs   构建后截取 og:image
src/consts.ts      站点级常量（域名、社交、og 图路径）
src/i18n/          ui.ts 文案字典 + index.ts 语言工具
src/layouts/       Layout.astro（head、reveal 脚本）
src/components/    SEO、Hud、Hero、Pillars、Scenarios、Cta、Footer
src/pages/         index.astro（en）、zh/index.astro、404.astro、
                   privacy / terms（两种语言各一份）
src/styles/        global.css
```

## 部署到 Cloudflare Pages（Git 集成）

项目待创建：Pages 项目 `atlas-landing`，连接 GitHub 仓库 `bayernjf/atlas-landing`。
推送到 `main` 会自动构建发布，`dev` 等其他分支产出 preview 部署。配置（与 agent-world-landing 一致）：

- Production branch：`main`
- Build command：`npx playwright install chromium && npm run build`
- Build output directory：`dist`
- Environment variables：`NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`

日常开发在 `dev` 分支进行，合并到 `main` 才会发版。

域名：`atlas-landing.pages.dev` + 自定义域名 `atlas.bayjf.com`
（DNS 里需要一条 `CNAME atlas → atlas-landing.pages.dev`，Proxied）。
换域名时要同步改 `src/consts.ts` 的 `SITE_URL` 和 `public/robots.txt` 里的 Sitemap 地址。

## SEO

- 每种语言独立的 title / description，取自 `src/i18n/ui.ts` 的 `meta.*`
- canonical + 三条 hreflang（自身、另一语言、x-default）
- Open Graph + Twitter `summary_large_image`，og:image 用构建时截图
- JSON-LD `@graph`：Organization / WebSite / SoftwareApplication
- `@astrojs/sitemap` 生成带 hreflang 互指的 sitemap
- `prefetch` 全站预取，`inlineStylesheets: 'auto'`

## GEO（生成式引擎优化）

- `public/robots.txt` 显式放行 GPTBot、ClaudeBot、PerplexityBot、CCBot 等 AI 爬虫
- `public/llms.txt`（中文）与 `public/llms-en.txt`（英文）用 markdown 自述产品定义、
  Harness / Graph / Loop 三支柱、核心场景与差异点，供答案引擎直接引用
