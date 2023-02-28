import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// function pathResolve(dir: string) {
//   return path.resolve(process.cwd(), '.', dir)
// }
// const srcPath = path.resolve(__dirname, '/src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
