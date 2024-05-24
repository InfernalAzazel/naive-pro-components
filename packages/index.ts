import { App} from 'vue';
import { ProForm, ProStepsForm, ProQueryForm } from './form';
import ProTabs from './tabs'

// 存储组件列表并按需导出
const components = {
  ProForm,
  ProStepsForm,
  ProQueryForm,
  ProTabs
};

const install = (app: App) => {
  Object.entries(components).forEach(([key, component]) => {
    app.component(key, component);
  });
};

// 按需导出组件
export * from './form';
export * from './tabs';
// 导出默认对象，包含 install 方法
export default {
  install,
};