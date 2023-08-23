import { defineConfig } from 'vitepress'

const ogDescription =
  'No more config and template code, free your hands, making your life better!'
const ogImage = 'https://code.brucesong.xyz/og-image.png'
const ogTitle = 'Code Snippets'
const ogUrl = 'https://code.brucesong.xyz'

export default defineConfig({
  title: 'Code Snippets',
  description:
    'No more config and template code, free your hands, making your life better!',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/get-started' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [{ text: 'Get Started', link: '/get-started' }]
      },
      {
        text: 'Project',
        items: [{ text: 'Prettier', link: '/project/prettier' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/recallwei/code-snippets' }
    ],

    editLink: {
      pattern:
        'https://github.com/recallwei/code-snippets/edit/main/docs/:path',
      text: 'Edit this page in GitHub'
    },

    footer: {
      message: `Released under the MIT License. Deploy by Vercel.`,
      copyright: 'Copyright © 2023-present Bruce Song'
    },

    outline: 'deep'
  }
})
