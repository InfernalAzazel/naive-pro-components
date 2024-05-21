<script setup lang="ts">
import { computed, h, resolveComponent, useAttrs, useSlots } from 'vue'
import { NButton, NForm, NFormItem, NGrid, NGridItem, NSpace } from 'naive-ui'
import { ProFormColumn, ProFormProps, ProFormNormalToolBar } from './props'
import { defaultProps, ProFormNormalToolBarProps} from './props'

defineOptions({ name: 'ProFormNormal', inheritAttrs: false })
// @ts-ignore
const props = withDefaults(defineProps<ProFormProps>(), defaultProps)
const modelValue = defineModel()
const attrs = useAttrs()
const slots = useSlots()
const toolbar = computed<ProFormNormalToolBar>(() => {
  return props.toolbar? props.toolbar
    : ProFormNormalToolBarProps
})


// 渲染单个表单项的函数
const renderFormItem = (column: ProFormColumn) => {
  const component = typeof column.component === 'string' ? resolveComponent(column.component) : column.component

  return h(NFormItem, { label: column.label, path: column.prop }, () => h(component, {
      ...column.props,
      modelValue: modelValue.value[column.prop],
      'onUpdate:value': (value: any) =>  modelValue.value[column.prop] = value
    })
  )
}

// 渲染表单项列表的函数
const renderFormItems = () => props.columns.map(column =>
  props.grid
    ? h(NGridItem, { span: column.span || props.cols }, () => renderFormItem(column))
    : renderFormItem(column)
)

// 渲染工具栏的函数
const renderToolBar = () => {
  if (slots.toolbar) {
    return h(NSpace, { justify: toolbar.value.justify }, () => slots.toolbar())
  }
  // 默认工具栏内容
  return h(NSpace, { justify: toolbar.value.justify }, () => [
    toolbar.value.submit && h(NButton, { ...toolbar.value.submitProps }, () => toolbar.value.submitText),
    toolbar.value.reset && h(NButton, { ...toolbar.value.resetProps }, () => toolbar.value.resetText)
  ])
}
// 渲染整个表单的函数
const renderNormalForm = () =>  h(NSpace,{ vertical: true},  () => [
  h(NForm, { model: modelValue.value, ...attrs },  () =>
      props.grid
        ? h(NGrid, { cols: props.cols, 'x-gap': props.xGap, 'y-gap': props.yGap }, renderFormItems)
        : renderFormItems()
  ),
  toolbar.value.direction === 'bottom' && renderToolBar(),
])

</script>

<template>
  <component :is="renderNormalForm" />
</template>