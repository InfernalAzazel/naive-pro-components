import { ProForm, ProQueryForm, ProStepsForm } from './form'
import ProTabs from './tabs'


declare module 'vue' {
  export interface GlobalComponents {
    ProForm: typeof ProForm
    ProStepsForm: typeof ProStepsForm
    ProQueryForm: typeof ProQueryForm
    ProTabs: typeof ProTabs
  }
}