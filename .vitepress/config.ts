import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Code Snippets',
  description: '⌨️ Some code snippets makes your life better!',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [{ text: 'Runtime API Examples', link: '/api-examples' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
