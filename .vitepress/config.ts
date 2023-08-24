import { defineConfig } from 'vitepress'

import { nav } from './nav'
import { sidebar } from './sidebar'

const ogDescription =
  'No more config and template code, free your hands, making your life better!'
const ogImage = 'https://code.brucesong.xyz/og-image.png'
const ogTitle = 'Code Snippets'
const ogUrl = 'https://code.brucesong.xyz'

export default defineConfig({
  lang: 'en-US',
  title: 'Code Snippets',
  description:
    'No more config and template code, free your hands, making your life better!',
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  lastUpdated: true,

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',

    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/recallwei/code-snippets' }
    ],

    editLink: {
      pattern:
        'https://github.com/recallwei/code-snippets/edit/main/docs/:path',
      text: 'Edit this page in GitHub'
    },

    footer: {
      message: `MIT License. Deploy by Vercel.`,
      copyright: `Copyright © 2023-${new Date().getFullYear()} Bruce Song`
    },

    outline: 'deep',

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        day: 'numeric'
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
})
