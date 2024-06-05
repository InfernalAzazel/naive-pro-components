import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import naivePro from '../packages/index'

const app =createApp(App)

app.use(naive)
// app.use(naivePro)
app.mount('#app')