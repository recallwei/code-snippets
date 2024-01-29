# husky

## Installation

::: code-group

```bash [Single Repo]
pnpm add -D husky lint-staged
pnpm i
npx husky init
echo "pnpm cspell:check" > .husky/pre-commit
echo "npx lint-staged" > .husky/pre-commit
echo "npx --no -- commitlint --edit \"$1\"" > .husky/commit-msg
```

```bash [Monorepo]
pnpm add -Dw husky lint-staged
pnpm i
npx husky init
echo "pnpm cspell:check" > .husky/pre-commit
echo "npx lint-staged" > .husky/pre-commit
echo "npx --no -- commitlint --edit \"$1\"" > .husky/commit-msg
```

:::

## Configuration

::: code-group

```txt [pre-commit]
pnpm cspell:check
npx lint-staged
```

```txt [commit-msg]
npx --no -- commitlint --edit ${1}
```

:::

## Not work on MacOS

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
