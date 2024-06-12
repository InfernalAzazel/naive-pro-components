//  global.d.ts — 这个文件位于components包的根目录，
//  用于给vscode的volar插件提示组件的属性的类型

declare module 'vue' {
  export interface GlobalComponents {
    ProLayout: (typeof import('@naiveui-pro/components'))['ProLayout'];
    ProForm: (typeof import('@naiveui-pro/components'))['ProForm'];
    ProStepsForm: (typeof import('@naiveui-pro/components'))['ProStepsForm'];
    ProQueryForm: (typeof import('@naiveui-pro/components'))['ProQueryForm'];
  }

  interface ComponentCustomProperties {}
}

export {};