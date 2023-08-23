# .lintstagedrc.json

::: code-group

```json [React + TS]
{
  "*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"],
  "*.{md,html,css,scss}": ["prettier --write"]
}
```

```json [Vue + TS]
{
  "*.{js,ts,jsx,tsx,vue}": ["eslint --fix", "prettier --write"],
  "*.{md,html,css,scss}": ["prettier --write"]
}
```

```json [Only TS]
{
  "*.{js,ts}": ["eslint --fix", "prettier --write"],
  "*.{md}": ["prettier --write"]
}
```

:::
