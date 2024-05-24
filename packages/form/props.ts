import type { FormProps, ButtonProps } from 'naive-ui'
import type { ProBaseFormProps, ProBaseFormColumn } from './components'


export interface ProFormToolBar {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  submit?: boolean
  submitText?: string
  submitProps?: ButtonProps
  reset?: boolean
  resetText?: string
  resetProps?: ButtonProps
}


export interface ProFormStepsToolBar extends ProFormToolBar{
  prev?: boolean
  prevProps?: ButtonProps
  next?: boolean
  nextProps?: ButtonProps
}

export interface ProQueryFormToolBar {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  search?: boolean
  searchText?: string
  searchProps?: ButtonProps
  reset?: boolean
  resetText?: string
  resetProps?: ButtonProps
}

export interface ProFormProps extends ProBaseFormProps {
  toolbar? : ProFormToolBar
  submit?: (isValid: boolean) => void
  reset?: () => void
}

export interface ProStepsFormColumn {
  label: string
  description?: string
  children: ProBaseFormColumn[]
}
export interface ProStepsFormProps extends Omit<ProBaseFormProps, 'columns'>  {
  columns: ProStepsFormColumn[]
  toolbar? : ProFormStepsToolBar
  submit?: (isValid: boolean) => void
  reset?: () => void
}

export interface ProQueryFormColumn extends Omit<ProBaseFormColumn, 'span'>{}
export interface ProQueryFormProps extends /* @vue-ignore */ FormProps {
  columns: ProQueryFormColumn[]
  toolbar? : ProQueryFormToolBar
  showNumber?: number
  labelPlacement?: 'left' | 'top'
  defaultCollapsed?: boolean
  search?: () => void
  reset?: () => void
}

export interface ProTabsFormColumn {
  label: string
  prop: string
  children: ProBaseFormColumn[]
}
export interface ProTabsFormProps extends Omit<ProBaseFormProps, 'columns'>  {
  columns: ProTabsFormColumn[]
  toolbar? : ProFormStepsToolBar
  submit?: (isValid: boolean) => void
  reset?: () => void
}
