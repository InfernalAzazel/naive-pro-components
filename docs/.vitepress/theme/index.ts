// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import naive from 'naive-ui'
import naivePro from '../../../packages/index'
export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    app.use(naive)
    app.use(naivePro)
  }
} satisfies Theme

