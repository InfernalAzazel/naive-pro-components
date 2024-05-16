<script setup lang="ts">
import { resolveComponent, h, watch, useAttrs } from 'vue'
import { NForm, NFormItem, NGrid, NGridItem } from 'naive-ui'
import { Column, ProSchemaFormProps } from './props'




defineOptions({ name: 'ProSchemaForm', inheritAttrs: false })

const modelValue = defineModel()
const props = withDefaults(defineProps<ProSchemaFormProps>(), {
  cols: 24,
  xGap: 12,
  yGap: 0,
  grid: true
})
const attrs = useAttrs()

// 渲染表单项的函数
const renderFormItem = (column: Column) => h(NFormItem, { label: column.label, path: column.prop }, {
  default: () => h(resolveComponent(column.component), {
    ...column.props,
    modelValue: modelValue.value[column.prop],
    'onUpdate:value': (value: any) => modelValue.value[column.prop] = value
  })
})

// 渲染表单项列表的函数
const renderFormItems = () => props.columns.map(column =>
  props.grid
    ? h(NGridItem, { span: column.span || props.cols }, () => renderFormItem(column))
    : renderFormItem(column)
)

// 渲染整个表单的函数
const renderForm = () => h(NForm, { ...attrs, model: modelValue.value }, () =>
  props.grid
    ? h(NGrid, { cols: props.cols, 'x-gap': props.xGap, 'y-gap': props.yGap }, renderFormItems)
    : renderFormItems()
)


watch(modelValue, (newValue, oldValue) => {
  console.log('组件: ', newValue)
}, {deep: true})


</script>

<template>
  <component :is="renderForm" />
</template>