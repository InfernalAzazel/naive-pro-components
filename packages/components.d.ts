import SchemaForm from './SchemaForm/SchemaForm.vue'


declare module 'vue' {
  export interface GlobalComponents {
    SchemaForm: typeof SchemaForm
  }
}