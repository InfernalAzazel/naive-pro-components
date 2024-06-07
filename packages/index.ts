import './global.css'
import { App} from 'vue';
import { ProForm, ProStepsForm, ProQueryForm } from './form';
import { ProLayout } from './layout';
import NaiveProResolver from './resolver'

// 存储组件列表并按需导出
const components = {
  ProLayout,
  ProForm,
  ProStepsForm,
  ProQueryForm,
};

const install = (app: App) => {
  Object.entries(components).forEach(([key, component]) => {
    app.component(key, component);
  });
};

// 按需导出组件
export * from './form';
export * from './layout';
// 自动引用
export * from './resolver'
// 导出默认对象，包含 install 方法
export default {
  install,
};