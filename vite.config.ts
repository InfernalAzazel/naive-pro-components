import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import NaiveProResolver from './packages/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    // 库模式配置
    lib: {
      // 入口文件
      entry: path.resolve(__dirname, 'packages/index.ts'),
      // ESModule模式
      formats: ['es'],
      // 输出的文件名
      fileName: (format) => `naive-pro-components.${format}.ts`
    },
    rollupOptions: {
      // 外部化处理那些你不想打包进库的依赖
      external: ['vue', 'naive-ui'],
      output: {
        // 为外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    Components({
      // dirs: ['packages'],
      // extensions: ['vue'],
      // deep: true,
      // dts: true,
      resolvers: [
        // NaiveUiResolver(),
        NaiveProResolver()
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  }
})
