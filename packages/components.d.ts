import ProForm from './ProForm'


declare module 'vue' {
  export interface GlobalComponents {
    ProForm: typeof ProForm
  }
}