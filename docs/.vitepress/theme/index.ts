// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import { DemoBox } from '@sgwm-sutras/ui'
import '@sgwm-sutras/ui/style'
import naive from 'naive-ui'
import naivePro from 'naive-pro-components'
import 'naive-pro-components/dist/style.css';

export default {
  extends: Theme,
  enhanceApp({app}) {
    app.component('demo', DemoBox)
    app.use(naive)
    app.use(naivePro)
  }
}

