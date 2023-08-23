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

  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Guide', link: '/guide/get-started' },
      { text: 'Reference', link: '/reference/project/package-json' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [{ text: 'Get Started', link: '/guide/get-started' }]
        }
      ],
      '/reference/': [
        {
          text: 'Project Configuration',
          collapsed: false,
          items: [
            { text: 'package.json', link: '/reference/project/package-json' },
            { text: '.npmrc', link: '/reference/project/npmrc' },
            { text: '.nvmrc', link: '/reference/project/nvmrc' },
            {
              text: 'pnpm-workspace.yaml',
              link: '/reference/project/pnpm-workspace'
            },
            { text: 'Git Related', link: '/reference/project/git-related' },
            { text: '.cspell.json', link: '/reference/project/cspell' },
            { text: 'README.md', link: '/reference/project/readme' },
            { text: 'LICENSE', link: '/reference/project/license' },
            { text: '.editorconfig', link: '/reference/project/editorconfig' },
            { text: 'jsconfig.json', link: '/reference/project/jsconfig' },
            { text: 'tsconfig.json', link: '/reference/project/tsconfig' },
            { text: 'Prettier', link: '/reference/project/prettier' },
            { text: 'ESLint', link: '/reference/project/eslint' },
            { text: 'husky', link: '/reference/project/husky' },
            { text: 'lint-staged', link: '/reference/project/lint-staged' },
            { text: 'Commitizen', link: '/reference/project/commitizen' },
            { text: 'CHANGELOG.md', link: '/reference/project/changelog' },
            {
              text: 'CODE_OF_CONDUCT.md',
              link: '/reference/project/code-of-conduct'
            },
            {
              text: 'CONTRIBUTING.md',
              link: '/reference/project/contributing'
            },
            {
              text: 'CONTRIBUTORS.md',
              link: '/reference/project/contributors'
            },
            { text: 'SECURITY.md', link: '/reference/project/security' },
            { text: 'vercel.json', link: '/reference/project/vercel' },
            { text: 'netlify.toml', link: '/reference/project/netlify' },
            { text: 'Prisma', link: '/reference/project/prisma' }
          ]
        }
      ]
    },

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

    outline: 'deep',

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  markdown: {
    theme: 'dracula',
    lineNumbers: true
  }
})
