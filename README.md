# Vue Portfolio 个人作品集网站

仿照 [yi.fandcode.com](https://yi.fandcode.com/about) 的版式风格，使用 **Vue 3 + Vite + Vue Router** 实现的个人作品集网站。

> 页面中的姓名、经历、项目均为**示例占位内容**，请替换为你自己的信息。

## 功能

- 三个页面：Home（首页 Hero + 精选项目）、Projects（全部项目）、About（介绍 / 工作经历 / 教育背景 / 能力清单 / 技术栈）
- 中英文一键切换（记忆在 localStorage）
- 深色 / 浅色主题切换
- 滚动渐入动画、响应式布局（移动端适配）

## 快速开始

```bash
npm install
npm run dev      # 开发调试 http://localhost:5173
npm run build    # 构建产物输出到 dist/
npm run preview  # 本地预览构建结果
```

## 如何修改成你自己的内容

| 内容 | 修改位置 |
| --- | --- |
| 姓名、邮箱、社交链接 | `src/data/profile.js` |
| 项目卡片（增删改） | `src/data/projects.js` |
| 工作经历、教育背景 | `src/data/experience.js` |
| 能力清单、技术栈 | `src/data/skills.js` |
| 界面文案（中/英文） | `src/i18n/index.js` |
| 配色、字体 | `src/styles/main.css` 中的 CSS 变量 |

联系区按钮中的 `mailto:` 地址在 `src/components/ConnectSection.vue` 中，记得一并替换。

## 技术栈

- [Vue 3](https://vuejs.org/)（Composition API + `<script setup>`）
- [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/)
- 无 UI 框架依赖，纯手写 CSS（CSS 变量主题系统）
- 技术栈图标来自 [Simple Icons CDN](https://simpleicons.org/)

## 部署（GitHub Pages）

已配置 GitHub Actions 自动部署（`.github/workflows/deploy.yml`）：推送到 `main` 即自动构建并发布到 **https://lxhhj.github.io/profile/**。

> 注意：`vite.config.js` 中的 `base: '/profile/'` 与仓库名保持一致。若仓库改名，需同步修改，站点地址也会随之变化。
