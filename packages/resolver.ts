import { ComponentResolver } from 'unplugin-vue-components'
import * as path from 'node:path'

const componentMap: Record<string, string> = {
  // 例如：组件名称到路径的映射
  'ProQueryForm':  'packages/form/query.vue',
  // 添加更多的组件映射
};


export function NaiveProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      const componentPath = componentMap[name];
      console.log(name, componentPath)
      return { name: name, from: componentPath, sideEffects: undefined };
    },
  }
}




export default NaiveProResolver

