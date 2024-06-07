import { ComponentResolver } from 'unplugin-vue-components'

export function NaiveProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      return { name: name, from: 'naive-pro-components', sideEffects: undefined };
    },
  }
}
export default NaiveProResolver

