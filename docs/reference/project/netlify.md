# netlify.toml

```toml
[build.environment]
  NODE_VERSION = "18"
  NODE_OPTIONS = "--max_old_space_size=4096"

[build]
  publish = "docs/.vitepress/dist"
  command = "pnpm run docs:build"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/dir/*"
  to = "/dir/index.html"
  status = 200
```
