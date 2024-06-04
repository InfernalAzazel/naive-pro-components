import { ProForm, ProQueryForm, ProStepsForm } from './form'
import { ProLayout } from './layout';

declare module 'vue' {
  export interface GlobalComponents {
    ProLayout: typeof ProLayout
    ProForm: typeof ProForm
    ProStepsForm: typeof ProStepsForm
    ProQueryForm: typeof ProQueryForm
  }
}