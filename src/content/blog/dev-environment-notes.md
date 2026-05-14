---
title: "重新熟悉前端开发环境"
description: "记录 Node.js、npm、开发服务器和本地预览之间的关系。"
pubDate: 2026-05-12
category: "日常感想"
---

刚开始恢复前端开发时，最容易混淆的是几个工具分别负责什么。

## Node.js

Node.js 是运行前端工具链的基础环境。创建 Astro 项目、安装依赖、启动开发服务器都需要它。

## npm

npm 是包管理器，负责安装项目依赖。常见命令包括：

```txt
npm install
npm run dev
npm run build
```

## 本地预览

`http://localhost:4321/` 是本机开发预览地址。它不是公网地址，别人访问不到。以后部署上线后，才会得到真正的网站地址。

这篇文章记录使用 Astro 搭建个人技术博客的过程。

## 为什么选 Astro

Astro 很适合内容型网站。博客文章可以直接写成 Markdown 文件，项目结构清晰，页面默认生成静态 HTML，部署到 Vercel 或 Cloudflare Pages 都比较简单。

## 当前结构

常用目录大概是这样：

```txt
src/pages/          页面
src/content/blog/   博客文章
src/components/     公共组件
src/layouts/        页面布局
src/styles/         全局样式
public/             静态资源
```

## 接下来要做的事

先把首页、关于页和文章页整理好，再逐步加入分类、标签、搜索、评论和深色模式。