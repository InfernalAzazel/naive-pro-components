import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'
import dts from 'vite-plugin-dts';
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // 外部化处理那些你不想打包进库的依赖
      external: ['vue', 'naive-ui'],
      // 为外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue'
      },
      // 输出配置
      output: [
        {
          // 打包成 es module
          format: 'es',
          // 重命名
          entryFileNames: '[name].js',
          // 打包目录和开发目录对应
          preserveModules: true,
          // 输出目录
          dir: 'es',
          // 指定保留模块结构的根目录
          preserveModulesRoot: 'src',
        },
        {
          // 打包成 commonjs
          format: 'cjs',
          // 重命名
          entryFileNames: '[name].js',
          // 打包目录和开发目录对应
          preserveModules: true,
          // 输出目录
          dir: 'lib',
          // 指定保留模块结构的根目录
          preserveModulesRoot: 'src',
        },
      ],
    },
    // 库模式配置
    lib: {
      // 入口文件
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PRO_COMPONENTS',
    },
  },
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      // 输出目录
      outDir: ['types'],
      // 将动态引入转换为静态（
      // 例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
      staticImport: true,
      // 将所有的类型合并到一个文件中
      rollupTypes: true,
    }),
  ],
})

