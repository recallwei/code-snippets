# package.json

## Project Configuration

::: code-group

```json [Project]
{
  "name": "app-name",
  "description": "",
  "author": "Bruce Song <recall4056@gmail.com> (https://github.com/recallwei/)",
  "scripts": {
    "cspell:check": "cspell \"**\"",
    "eslint:check": "eslint \"**/*.{ts,tsx,js,jsx,vue}\" --color",
    "eslint:fix": "pnpm eslint:check --fix",
    "prettier:check": "prettier --check .",
    "prettier:fix": "prettier --check --write --ignore-unknown .",
    "preinstall": "npx only-allow pnpm"
  },
  "dependencies": {},
  "devDependencies": {},
  "packageManager": "pnpm@8.5.0",
  "engines": {
    "node": ">=18.17.0",
    "npm": ">=9.2.0"
  },
  "private": true,
  "license": "MIT"
}
```

:::

## Library Configuration

::: code-group

```json [Single repo]
{
  "name": "app-name",
  "version": "0.0.1",
  "description": "",
  "author": "Bruce Song <recall4056@gmail.com> (https://github.com/recallwei/)",
  "homepage": "https://github.com/recallwei/repo-name#readme",
  "bugs": "https://github.com/recallwei/repo-name/issues",
  "repository": "github:recallwei/repo-name",
  "keywords": [],
  "bin": "src/index.js",
  "files": ["src/*"],
  "main": "src/index.js",
  "scripts": {},
  "peerDependencies": {},
  "dependencies": {},
  "devDependencies": {},
  "license": "MIT"
}
```

```json [Monorepo package]
{
  "name": "app-name",
  "version": "0.0.1",
  "description": "",
  "author": "Bruce Song <recall4056@gmail.com> (https://github.com/recallwei/)",
  "homepage": "https://github.com/recallwei/repo-name#readme",
  "bugs": "https://github.com/recallwei/repo-name/issues",
  "repository": {
    "type": "git",
    "url": "https://github.com/recallwei/repo-name.git",
    "directory": "packages/package-name"
  },
  "keywords": [],
  "bin": "src/index.js",
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
