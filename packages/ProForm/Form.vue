<script setup lang="ts">
import { h, watch, useAttrs, withDefaults } from 'vue'
import Steps from './Steps.vue'
import Normal from './Normal.vue'
import type { ProFormProps} from './props'
import { defaultProps } from './props'

defineOptions({ name: 'ProForm', inheritAttrs: false })

const modelValue = defineModel()
// @ts-ignore
const props = withDefaults(defineProps<ProFormProps>(), defaultProps)
const attrs = useAttrs()

// 渲染表单项的函数
const renderForm = () => {
  const hasStepForm = props.columns.some(column => column?.type === 'steps')
  console.log('hasStepForm', hasStepForm)
  return hasStepForm
    ? h(Steps, { modelValue: modelValue.value, ...props, ...attrs })
    : h(Normal, { modelValue: modelValue.value, ...props, ...attrs })
}

watch(modelValue, (newValue, oldValue) => {
  console.log('组件: ', newValue)
}, {deep: true})


</script>

<template>
  <component :is="renderForm" />
</template>