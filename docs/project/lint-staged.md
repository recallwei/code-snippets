# .lintstagedrc.json

::: code-group

```json [React + TS]
{
  "*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write", "git add"],
  "*.{md,html,css,scss}": ["prettier --write", "git add"]
}
```

```json [Vue + TS]
{
  "*.{js,ts,jsx,tsx,vue}": ["eslint --fix", "prettier --write", "git add"],
  "*.{md,html,css,scss}": ["prettier --write", "git add"]
}
```

```json [Only TS]
{
  "*.{js,ts}": ["eslint --fix", "prettier --write", "git add"],
  "*.{md}": ["prettier --write", "git add"]
}
```

:::
