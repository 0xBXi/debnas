import { defineConfig } from 'vitepress'

// 参考文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/debnas/',
  lang: 'zh-CN',
  // 站点标题，显示在浏览器标签、导航栏和 SEO 元数据中
  // 修改效果：更改网站标题，影响页面头部和搜索引擎显示
  title: "DebNAS",

  // 站点描述，用于 SEO 元数据和站点简介
  // 修改效果：影响搜索引擎结果中的描述文字，建议简洁且包含关键词
  description: "Debian秒变准NAS系统",
  head: [
    ['meta', { name: 'keywords', content: 'DebNAS, Debian, NAS, 开源, 家庭存储, 媒体服务器' }],
    ['meta', { name: 'description', content: 'DebNAS：一键将 Debian 转为家庭 NAS，开源免费，快速构建个人云存储与媒体服务器' }]
  ],
  // 主题配置，基于 VitePress 默认主题
  // 参考文档：https://vitepress.dev/reference/default-theme-config
     themeConfig: {
       nav: [
         { text: '首页', link: '/' },
         { text: '脚本指南', link: '/guide/install' },
         { text: '帮助文档', link: '/services/samba' },
         { text: '常见问题', link: '/faq/troubleshooting' },
         { text: '关于', link: '/about/' }
       ],
       sidebar: {
         // 指南侧边栏（/guide/）
         '/guide/': [
           {
             text: '指南',
             items: [
               { text: '安装 DebNAS', link: '/guide/install' },
               { text: '配置 NAS', link: '/guide/config' },
               { text: '自定义设置', link: '/guide/customization' },
               { text: '升级与维护', link: '/guide/upgrade' }
             ]
           }
         ],
         // 服务侧边栏（/services/）
         '/services/': [
           {
             text: '支持的服务',
             items: [
               { text: 'Samba 共享', link: '/services/samba' },
               { text: 'Plex 媒体服务器', link: '/services/plex' },
               { text: 'Jellyfin 媒体服务器', link: '/services/jellyfin' },
               { text: 'WebDAV 配置', link: '/services/webdav' },
               { text: '下载工具', link: '/services/downloaders' }
             ]
           }
         ],
         // 常见问题侧边栏（/faq/）
         '/faq/': [
           {
             text: '常见问题',
             items: [
               { text: '故障排除', link: '/faq/troubleshooting' },
               { text: '常见问题解答', link: '/faq/common-issues' }
             ]
           }
         ],
         // 关于侧边栏（/about/）
         '/about/': [
           {
             text: '关于 DebNAS',
             items: [
               { text: '项目介绍', link: '/about/' }
             ]
           }
         ]
       },

    // 社交链接，显示在导航栏或侧边栏（视主题而定）
    // icon 支持预定义值（如 'github'）或自定义 SVG
    // 修改效果：添加更多社交平台链接（如 Twitter、Discord），影响导航栏图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kekylin/Debian-HomeNAS' }, // GitHub 仓库链接
      { icon: 'bilibili', link: 'https://space.bilibili.com/381396284' } // GitHub 仓库链接
    ],
    // 底部许可和版权信息
    footer: {
      message: '基于 GPL-3.0 许可发布', // 许可声明，支持 HTML（如链接到许可证）
      copyright: '版权所有 © 2024-2025 kekylin' // 版权信息
    }
  }
})