// issue: https://github.com/eslint/eslint/issues/14137
// 如果package.json中的type:"module"，eslintrc后缀是js会导致eslint配置文件不生效,解决方案：
//  https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
// 1. .eslintrc.js 改成.eslintrc.cjs
// 2. .eslintrc.js 改成.eslintrc.json
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier', // 避免跟eslint冲突
    './.eslintrc-auto-import.json', // 解决自动导入的eslint报错
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  // 激活插件，如果需要更改rules的话需要写，不写的话只能用插件提供的规则，在上面extends中写的plugin:xxxxxx
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-v-html': 'error',
    'vue/multi-word-component-names': 'off',
    'no-debugger': 'error',
  },
  ignorePatterns: [
    'dist-electron/',
    '.output/',
    'dist/',
    'public/',
    '**/*.min.js',
    '**/*.d.ts',
    '**/*.config.ts',
  ],
}
