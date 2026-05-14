---
title: "重新熟悉前端开发环境"
description: "记录 Node.js、npm、开发服务器和本地预览之间的关系。"
pubDate: 2026-05-12
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
