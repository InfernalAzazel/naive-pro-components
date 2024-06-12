import { ComponentResolver } from 'unplugin-vue-components'


export function NaiveProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      // naive-ui 自动引入
      if (name.match(/^(N[A-Z]|n-[a-z])/))
        return { name, from: 'naive-ui' }
      // @naiveui-pro/components 自动引入
      else if (name.startsWith('Pro')) {
        console.log(name)
        return {
          name: name,
          from: `@naive-pro/components`,
          sideEffects: `@naive-pro/components/es/style.css`,
        };
      }
    },
  }
}
