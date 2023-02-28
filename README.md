# 技术栈

- vue3
- vue+router
- ts
- pinia
- element-plus
- vue-use
- unplugin 系列，用于自动引入组件、composition api、icon 等
- husky 规范代码提交

# 踩坑记录

1. vite 配置别名

```ts
// vite.config.ts
resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
```

另外还需额外配置 tsconfig.json 文件才可以生效

```json
// tsconfig.json
 "compilerOptions": {
     "paths": {
      "@/*": ["./src/*"]
    }
 }
```

2. eslint 识别不了.ts 文件相关代码

```js
// eslint.cjs
 parserOptions: {
    parser: '@typescript-eslint/parser',
  },
```
