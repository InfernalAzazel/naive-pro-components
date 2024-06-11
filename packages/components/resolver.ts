import { ComponentResolver } from 'unplugin-vue-components'


export default function NaiveProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      return { name: name, from: 'naive-pro-components'};
    },
  }
}

