import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import naivePro from 'naive-pro-components';
import 'naive-pro-components/dist/style.css';

const app = createApp(App);
app.use(naive)
app.use(naivePro)
app.mount('#app');
