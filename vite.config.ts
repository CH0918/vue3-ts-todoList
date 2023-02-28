import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [/\.vue$/, /\.vue\?vue/],
      imports: ['vue'],
      dts: './auto-imports.d.ts',
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      extensions: ['vue', 'md', 'svg'],
      // directoryAsNamespace: true,
      include: [/\.vue$/, /\.md$/],
      dts: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
        }),
      ],
      dirs: [
        path.resolve(__dirname, './src/layout'),
        path.resolve(__dirname, './src/components'),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
