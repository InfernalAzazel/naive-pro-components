import type { FormProps, ButtonProps } from 'naive-ui'
import type { VNode } from 'vue';
import { defineProFormNormalToolBar, defineProFormProps, defineProFormStepsToolBar } from './type'

export interface ProFormColumn {
  label: string
  prop: string
  type?: 'normal' | 'steps'
  component: string | VNode
  props?: Record<string, any>
  span?: number;
  children: ProFormColumn[]
}

export interface ProFormNormalToolBar {
  direction?: 'top' | 'bottom'
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
  prevText?: string
  prevProps?: ButtonProps
  next?: boolean
  nextText?: string
  nextProps?: ButtonProps
}

export interface ProFormProps extends  /* @vue-ignore */ FormProps {
  columns: ProFormColumn[]
  toolbar?: ProFormNormalToolBar | ProFormStepsToolBar
  grid?: boolean
  cols?: number
  xGap?: number
  yGap?: number
}

export const ProFormNormalToolBarProps = defineProFormNormalToolBar(
  {
    direction: 'bottom',
    justify: 'start',
    submit: true,
    submitText: '提交',
    submitProps: {
      type: 'primary',
    },
    reset: true,
    resetText: '重置',
    resetProps: {
      type: 'primary',
    },
  }
)
export const ProFormStepsToolBarProps = defineProFormStepsToolBar(
  {
    ...ProFormNormalToolBarProps,
    prev: true,
    prevText: '上一步',
    prevProps: {
      type: 'primary',
    },
    next: true,
    nextText: '下一步',
    nextProps: {
      type: 'primary',
    }
  }
)


export const defaultProps = defineProFormProps(
  {
    grid: true,
    cols: 24,
    xGap: 12,
    yGap: 0
  }
)