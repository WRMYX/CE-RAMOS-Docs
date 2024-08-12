import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CE-RAMOS Docs",
  lastUpdated: true,
  lang: "zh-CN",
  base: "/",
  head: [
    // 51La统计
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js?id=Jfyz2AtpDiNlSRpE&ck=Jfyz2AtpDiNlSRpE' }],
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/Logo.png',
      },
    ],
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/CJA-OS/CE-RAMOS'}],
    logo: "/Logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "首页",
        link: "https://ce-ramos.cn/",
      },
      {
        text: "下载站",
        link: "https://files.ce-ramos.cn/",
      },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "写在前面", link: "/start/start" },
        ],
      },
      {
        text: "总览",
        items: [
          { text: "日志", link: "/overview/log" },
          { text: "感谢", link: "/overview/thanks" },
          { text: "瞎扯", link: "/overview/something" },
          { text: "用户协议", link: "/overview/contract" },
        ],
      },
      {
        text: "常见问题",
        items: [
          { text: "CE-RAMOS是什么？", link: "/faq/what_ce" },
          { text: "是否有后门，流氓行为？", link: "/faq/safety" },
          { text: "CE-RAMOS支持WIFI吗？", link: "/faq/wifi" },
          { text: "开始菜单和设置打不开怎么办？", link: "/faq/uwp_apps" },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "如何下载CE-RAMOS及插件？", link: "/course/down" },
          { text: "如何使用CE-插件？", link: "/course/loadce" },
          { text: "如何使用HotPE模块？", link: "/course/loadhpm" },
        ],
      },
      {
        text: "开发者文档",
        items: [
          { text: "制作CE-插件", link: "/devdoc/makece" },
          { text: "插件投稿", link: "/devdoc/ce_con" },
          { text: "PE集成CE-插件", link: "/cooperation/addce" },
        ],
      },
      {
        text: "项目授权",
        items: [
            { text: "获取授权", link: "/cooperation/permit" },
            { text: "项目规范", link: "/cooperation/standard" },
            { text: "授权项目",
              items: [
                { text: "无", link: "/" },
              ]},
            ]},
        ],
    footer: {
      copyright: "© CE-RAMOS开发团队",
      message: '<a href="http://beian.miit.gov.cn/" target="_blank">鲁ICP备2023028944号-1</a>',
    },
    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/CJA-OS/CE-RAMOS-Docs/edit/main/docs/:path'
    },

    lastUpdatedText: "最近更新于",
  }
})
