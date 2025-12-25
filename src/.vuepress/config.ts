import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog-vuepress/",

  lang: "zh-CN",
  title: "夕的博客",
  description: "Misyakuji的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
