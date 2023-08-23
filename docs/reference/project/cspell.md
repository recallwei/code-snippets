# .cspell.json

## Installation

```bash
pnpm add -D cspell
```

## Configuration

```json
{
  "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
  "version": "0.2",
  "language": "en",
  "words": [],
  "flagWords": [],
  "dictionaries": ["custom-words"],
  "dictionaryDefinitions": [
    {
      "name": "custom-words",
      "path": ".cspell.txt",
      "addWords": true
    }
  ],
  "ignorePaths": [
    ".cspell",
    ".github/workflows/**",
    ".vscode/*.json",
    "**/.vercel",
    "**/dist/**",
    "**/build/**",
    "**/node_modules/**",
    "**/**/CHANGELOG.md",
    "**/**/CONTRIBUTORS.md",
    "pnpm-lock.yaml",
    "README.md"
  ]
}
```