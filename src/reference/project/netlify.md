# netlify.toml

```toml
[build.environment]
  NODE_VERSION = "18"
  NODE_OPTIONS = "--max_old_space_size=4096"

[build]
  publish = ".vitepress/dist"
  command = "pnpm run build"

[functions]
  node_bundler = "esbuild"
```
