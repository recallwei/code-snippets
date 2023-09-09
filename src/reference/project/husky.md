# husky

## Installation

::: code-group

```bash [Single Repo]
pnpm add -D husky lint-staged
pnpm dlx husky-init
pnpm i
npx husky add .husky/pre-commit 'pnpm cspell:check'
npx husky add .husky/pre-commit 'npx lint-staged'
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
npm pkg set scripts.prepare="husky install"
```

```bash [Monorepo]
pnpm add -Dw husky lint-staged
pnpm dlx husky-init
pnpm i
npx husky add .husky/pre-commit 'pnpm cspell:check'
npx husky add .husky/pre-commit 'npx lint-staged'
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
npm pkg set scripts.prepare="husky install"
```

:::

## Configuration

::: code-group

```txt [pre-commit]
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm cspell:check
npx lint-staged
```

```txt [commit-msg]
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}
```

:::

## Not work on MacOS

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
