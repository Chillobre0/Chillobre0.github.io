---
title: "用 Astro 搭建个人技术博客"
description: "从本地预览开始，整理一个适合长期写作的程序员博客。"
pubDate: 2026-05-13
---

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
