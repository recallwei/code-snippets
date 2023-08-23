# package.json

::: code-group

```json [Project]
{
  "private": true,
  "name": "app-name",
  "description": "",
  "author": "Bruce Song <recall4056@gmail.com> (https://github.com/recallwei/)",
  "repository": "github:recallwei/repo-name",
  "scripts": {
    "cspell:check": "cspell \"**\"",
    "cspell:sort": "node ./scripts/cspell-sort.js",
    "eslint:check": "eslint \"**/*.{ts,tsx,js,tsx,vue}\" --color",
    "eslint:fix": "pnpm eslint:check --fix",
    "prettier:check": "prettier --check .",
    "prettier:fix": "prettier --check --write --ignore-unknown .",
    "prepare": "husky install"
  },
  "dependencies": {},
  "devDependencies": {},
  "packageManager": "pnpm@8.5.0",
  "engines": {
    "node": ">=18.17.0",
    "npm": ">=9.2.0"
  },
  "license": "MIT"
}
```

```json [Lib]
{
  "name": "app-name",
  "version": "0.0.1",
  "description": "",
  "author": "Bruce Song <recall4056@gmail.com> (https://github.com/recallwei/)",
  "repository": "github:recallwei/repo",
  "homepage": "https://github.com/recallwei/project#readme",
  "bugs": "https://github.com/recallwei/project/issues",
  "keywords": [],
  "files": ["src/*"],
  "main": "src/index.js",
  "scripts": {},
  "peerDependencies": {},
  "dependencies": {},
  "devDependencies": {},
  "license": "MIT"
}
```

:::
