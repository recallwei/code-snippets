# vercel.json

```json
{
  "rewrites": [
    {
      "source": "/base-api/:path*",
      "destination": "https://api-url/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}
```
