<script setup lang="ts">
import {h, ref, resolveComponent, useAttrs, useSlots, computed } from 'vue'
import { NFormItem, NGrid, NGridItem, NStep, NSteps, NForm, NButton, NSpace} from 'naive-ui'
import type { ProFormColumn, ProFormProps, ProFormStepsToolBar } from './props'
import { defaultProps, ProFormStepsToolBarProps} from './props'

// 定义组件选项
defineOptions({ name: 'ProStepsForm', inheritAttrs: false })

// @ts-ignore
const props = withDefaults(defineProps<ProFormProps>(), defaultProps)
const modelValue = defineModel()
const attrs = useAttrs()
const slots = useSlots()
const currentStep = ref(0)
const toolbar = computed<ProFormStepsToolBar>(() => {
  return props.toolbar? props.toolbar
    : ProFormStepsToolBarProps
})

// 渲染单个表单项的函数
const renderFormItem = (column: ProFormColumn) => {
  const component = typeof column.component === 'string' ? resolveComponent(column.component) : column.component

  return h(NFormItem, { label: column.label, path: column.prop }, () =>
    h(component, {
      ...column.props,
      modelValue: modelValue.value[column.prop],
      'onUpdate:value': (value: any) => modelValue.value[column.prop] = value
    })
  )
}

const renderStepItems = () =>  {
  const step = props.columns[currentStep.value]
  return step.children.map((column: ProFormColumn) => {
    return props.grid
      ? h(NGrid, { cols: props.cols, 'x-gap': props.xGap, 'y-gap': props.yGap }, () =>
        h(NGridItem, { span: column.span || props.cols }, () => renderFormItem(column))
      )
      : renderFormItem(column)
  })
}

// 渲染工具栏的函数
const renderToolBar = () => {
  if (slots.toolbar) {
    return h(NSpace, { justify: toolbar.value.justify }, () => slots.toolbar())
  }
  // 默认工具栏内容
  return h(NSpace, { justify: toolbar.value.justify }, () => [
    toolbar.value.prev && h(NButton,
      { ...toolbar.value.prevProps, onClick: prevStep }, () => toolbar.value.prevText),
    toolbar.value.next && h(NButton,
      { ...toolbar.value.nextProps, onClick: nextStep },() => toolbar.value.nextText),
    toolbar.value.submit && h(NButton,
      { ...toolbar.value.submitProps}, () => toolbar.value.submitText),
    toolbar.value.reset && h(NButton, { ...toolbar.value.resetProps },() => toolbar.value.resetText),
  ])
}

// 渲染整个步骤表单的函数
const renderStepsForm = () => {
  return h('div', [
    h(NSteps, { current: currentStep.value }, () =>
        props.columns.map((step, index) =>
          h(NStep, { key: index, title: step.label })
        )
    ),
    h(NForm, {model: modelValue.value, ...attrs}, () => [
        ...renderStepItems(),
        renderToolBar()
      ]
    ),
    h('div', { style: { marginTop: '20px' } }, ()=> 666)
  ])
}

const nextStep = () => {
  if (currentStep.value < props.columns.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

</script>

<template>
  <component :is="renderStepsForm" />
</template>