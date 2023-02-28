# 技术栈

- vue3
- vue+router
- vite
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

3. 使用 unplugin-auto-import 时 eslint,ts 检测报错

```ts
// vite.config.ts
  AutoImport({
      dts: './auto-imports.d.ts',
    }),
```

```json
// tsconfig.json
  "include": [
    "./auto-imports.d.ts"
  ],
```

```js
// .eslintrc.cjs
  extends: [
    '.eslint-auto-import.json',
  ],
```

4. unplugin-component-vite 自动引入组件相关配置

```ts
import Components from 'unplugin-vue-components/vite'
  Components({
      extensions: ['vue', 'md', 'svg'],
      // directoryAsNamespace: true,
      include: [/\.vue$/, /\.md$/],
      dts: true,
      resolvers: [ElementPlusResolver({})],
      dirs: [
        path.resolve(__dirname, './src/layout'),
        path.resolve(__dirname, './src/components'),
      ],
    }),
```

5. unplugin-icon 自动引入 icons 图标
   需要的图标可以去[图标库](https://icones.js.org)找，海量图标

```ts
// vite.config.ts
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
Icons({
  // 图标按需引入，用到哪个自动安装哪个图标集
  autoInstall: true,
}),
  Components({
    resolvers: [
      // 添加前缀，使用需要<icon-xxxxx> xxx是图标集的id
      IconsResolver({
        prefix: 'icon',
      }),
    ],
  })
```
