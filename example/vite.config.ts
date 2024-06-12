import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { NaiveProResolver } from '@naiveui-pro/resolver';

const debugResolver = (name) => {
  console.log(`Resolving component: ${name}`);
  return null; // 返回 null 继续下一个解析器
};

const testProResolver = (name: string) => {
  console.log('啊哈哈', name)
  return {
    name: name,
    from: `@naiveui-pro/components`,
    sideEffects: `@naiveui-pro/components/es/style.css`,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      directoryAsNamespace: true,
      resolvers: [
        NaiveUiResolver(),
        testProResolver
      ]
    })
  ],
})
