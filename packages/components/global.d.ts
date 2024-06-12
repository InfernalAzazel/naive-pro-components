//  global.d.ts — 这个文件位于components包的根目录，
//  用于给vscode的volar插件提示组件的属性的类型

declare module 'vue' {
  export interface GlobalComponents {
    ProLayout: (typeof import('@naive-pro/components'))['ProLayout'];
    ProForm: (typeof import('@naive-pro/components'))['ProForm'];
    ProStepsForm: (typeof import('@naive-pro/components'))['ProStepsForm'];
    ProQueryForm: (typeof import('@naive-pro/components'))['ProQueryForm'];
  }

  interface ComponentCustomProperties {}
}

export {};