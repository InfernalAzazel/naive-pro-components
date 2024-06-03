import { ProForm, ProQueryForm, ProStepsForm } from './form'
import { ProLayout } from './layout';


declare module '*.svg' {
  const content: string;
  export default content;
}


declare module 'vue' {
  export interface GlobalComponents {
    ProForm: typeof ProForm
    ProStepsForm: typeof ProStepsForm
    ProQueryForm: typeof ProQueryForm
    ProLayout: typeof ProLayout
  }
}