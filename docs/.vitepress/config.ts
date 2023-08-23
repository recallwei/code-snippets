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
        text: 'Project Configuration',
        link: '/project/',
        items: [
          { text: 'package.json', link: '/project/package' },
          { text: '.npmrc', link: '/project/npmrc' },
          { text: '.nvmrc', link: '/project/nvmrc' },
          { text: 'pnpm-workspace.yaml', link: '/project/pnpm-workspace' },
          { text: 'Git Related', link: '/project/git-related' },
          { text: 'CSpell', link: '/project/cspell' },
          { text: 'README.md', link: '/project/readme' },
          { text: 'LICENSE', link: '/project/license' },
          { text: '.markdownlint.jsonc', link: '/project/markdownlint' },
          { text: '.editorconfig', link: '/project/editorconfig' },
          { text: 'jsconfig.json', link: '/project/jsconfig' },
          { text: 'tsconfig.json', link: '/project/tsconfig' },
          { text: 'Prettier', link: '/project/prettier' },
          { text: 'ESLint', link: '/project/eslint' },
          { text: 'husky', link: '/project/husky' },
          { text: 'lint-staged', link: '/project/lint-staged' },
          { text: 'Commitizen', link: '/project/commitizen' },
          { text: 'CHANGELOG.md', link: '/project/changelog' },
          { text: 'CODE_OF_CONDUCT.md', link: '/project/code-of-conduct' },
          { text: 'CONTRIBUTING.md', link: '/project/contributing' },
          { text: 'CONTRIBUTORS.md', link: '/project/contributors' },
          { text: 'SECURITY.md', link: '/project/security' },
          { text: 'vercel.json', link: '/project/vercel' },
          { text: 'netlify.toml', link: '/project/netlify' },
          { text: 'Prisma', link: '/project/prisma' }
        ]
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
  },
  markdown: {
    theme: 'dracula',
    lineNumbers: true
  }
})
