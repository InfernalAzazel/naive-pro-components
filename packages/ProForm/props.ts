import type { FormProps, ButtonProps } from 'naive-ui'
import type { VNode } from 'vue';
import { defineProFormNormalToolBar, defineProFormProps, defineProFormStepsToolBar } from './type'

export interface ProFormColumn {
  label: string
  prop: string
  component: string | VNode
  props?: Record<string, any>
  span?: number
  description?: string
  children: ProFormColumn[]
}

export interface ProFormNormalToolBar {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  submit?: boolean
  submitText?: string
  submitProps?: ButtonProps
  reset?: boolean
  resetText?: string
  resetProps?: ButtonProps
}


export interface ProFormStepsToolBar extends ProFormNormalToolBar{
  prev?: boolean
  prevProps?: ButtonProps
  next?: boolean
  nextProps?: ButtonProps
}

export interface ProFormProps extends  /* @vue-ignore */ FormProps {
  columns: ProFormColumn[]
  type?: 'normal' | 'steps'
  toolbar?: ProFormNormalToolBar | ProFormStepsToolBar
  grid?: boolean
  cols?: number
  xGap?: number
  yGap?: number
  submit?: (isValid: boolean) => void
  reset?: () => void
}

export const ProFormNormalToolBarProps = defineProFormNormalToolBar(
  {
    justify: 'start',
    submit: true,
    submitText: '提交',
    submitProps: {
      type: 'primary',
    },
    reset: true,
    resetText: '重置',
  }
)
export const ProFormStepsToolBarProps = defineProFormStepsToolBar(
  {
    ...ProFormNormalToolBarProps,
    prev: true,
    next: true,
  }
)


export const defaultProps = defineProFormProps(
  {
    type: 'normal',
    grid: true,
    cols: 24,
    xGap: 12,
    yGap: 0
  }
)