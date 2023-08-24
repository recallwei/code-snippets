# tsconfig.json

## tsconfig.base.json

```json
{
  "compilerOptions": {
    "allowJs": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true
  }
}
```

## tsconfig.web.json

```json
{
  "extends": "../tsconfig.base.json",
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/**/*.json",
    "vite.config.ts"
  ],
  "exclude": ["dist", "node_modules"],
  "compilerOptions": {
    "baseUrl": "./",
    "module": "ES2022",
    "moduleResolution": "Node",
    "target": "ESNext",
    "jsx": "preserve",
    "composite": true,
    "declaration": true,
    "isolatedModules": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "types": ["node", "jsdom", "unplugin-icons/types/vue", "naive-ui/volar"],
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## tsconfig.node.json

```json
{
  "extends": "../tsconfig.base.json",
  "include": ["src/**/*.ts"],
  "exclude": ["dist", "node_modules"],
  "compilerOptions": {
    "baseUrl": "./",
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "CommonJS",
    "target": "ES2021",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false,
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
