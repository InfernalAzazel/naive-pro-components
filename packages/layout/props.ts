import type { MenuDividerOption, MenuGroupOption, MenuOption } from 'naive-ui'

export interface ProLayoutProps {
  options: Array<MenuOption | MenuDividerOption | MenuGroupOption>
  collapsed?: boolean
  isFooter?: boolean
  headerHeight?: number
  isMobile?: boolean
}