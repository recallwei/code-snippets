# Git Related

## .gitignore

```txt
# Dependencies
node_modules

# Production
dist
build

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Misc
.DS_Store
coverage
*.local

# Editor
.vscode/*
!.vscode/extensions.json
!.vscode/*.code-snippets
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
*.zip
```

## .gitattributes

```txt
# Auto detect text files and perform LF normalization
* text=auto
*.js eol=lf
*.jsx eol=lf
*.ts eol=lf
*.tsx eol=lf
*.vue eol=lf
*.css eol=lf
*.scss eol=lf
*.md eol=lf
*.mdx eol=lf
*.json eol=lf
*.yml eol=lf
```
