import type { TabsProps } from 'naive-ui'

export interface ProTabsData {
  label: string
  value: string
}
export interface ProTabsProps extends /* @vue-ignore */ TabsProps{
  data: ProTabsData[]
}