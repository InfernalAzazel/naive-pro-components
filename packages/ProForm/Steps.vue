<script setup lang="ts">
import { ref, resolveComponent, useAttrs, computed, nextTick } from 'vue'
import type { ProFormColumn, ProFormProps, ProFormStepsToolBar } from './props'
import type { FormInst } from 'naive-ui'
import { Icon } from '@iconify/vue';
import { defaultProps, ProFormStepsToolBarProps } from './props'

defineOptions({ name: 'ProStepsForm', inheritAttrs: false })

// @ts-ignore
const props = withDefaults(defineProps<ProFormProps>(), defaultProps)
const modelValue = defineModel<{ [key: string]: any }>()
const attrs = useAttrs()
const formInstRef = ref<FormInst | null>(null)
const currentStep = ref(1)
const isMinStep = computed(()=> currentStep.value === 1)
const isMaxStep = computed(()=> currentStep.value === props.columns.length)
const toolbar = computed<ProFormStepsToolBar>(() => {
  return props.toolbar ? props.toolbar : ProFormStepsToolBarProps
})


function reset() {
  for (const column of props.columns[currentStep.value - 1].children) {
    modelValue.value[column.prop] = ''
  }
}


const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const nextStep = () => {
  if (currentStep.value < props.columns.length) {
    currentStep.value++
    for (const column of props.columns[currentStep.value - 1].children) {
      if (!(column.prop in modelValue.value)) {
        modelValue.value[column.prop] = ''
      }
    }
  }
}

function renderComponent(column: ProFormColumn) {
  return typeof column.component === 'string' ? resolveComponent(column.component) : column.component
}

defineExpose({
  validate: () => formInstRef.value?.validate(),
  resetFields: () => reset(),
})
</script>

<template>
  <n-space vertical>
    <n-steps :current="currentStep">
      <NStep v-for="(step, index) in props.columns" :key="index" :title="step.label" :description="step.description"/>
    </n-steps>
    <n-form ref="formInstRef" :model="modelValue" v-bind="attrs">
      <template v-for="(column, index) in props.columns[currentStep - 1].children" :key="index">
        <!-- 栅格 -->
        <n-grid v-if="props.grid" :cols="props.cols" :x-gap="props.xGap" :y-gap="props.yGap">
          <n-form-item-gi :span="column.span || props.cols" :label="column.label" :path="column.prop">
            <component :is="renderComponent(column)"
                       v-bind="column.props"
                       v-model:value="modelValue[column.prop]"
                       @update:value="(value: any) => modelValue[column.prop] = value" />
          </n-form-item-gi>
        </n-grid>
        <!-- 普通项 -->
        <n-form-item v-else :label="column.label" :path="column.prop" :key="column.prop">
          <component :is="renderComponent(column)"
                     v-bind="column.props"
                     v-model:value="modelValue[column.prop]"
                     @update:value="(value: any) => modelValue[column.prop] = value" />
        </n-form-item>
      </template>
      <!-- 工具栏 -->
      <n-space :justify="toolbar.justify">
        <slot name="toolbar">
          <n-button v-if="toolbar.prev" v-bind="toolbar.prevProps" :disabled="isMinStep" @click="prevStep">
            <template #icon><icon icon="ion:arrow-back-outline"/></template>
          </n-button>
          <n-button v-if="toolbar.next" v-bind="toolbar.nextProps" :disabled="isMaxStep" @click="nextStep">
            <template #icon><icon icon="ion:arrow-forward-outline"/></template>
          </n-button>
          <n-button v-if="toolbar.submit" v-bind="toolbar.submitProps" :disabled="!isMaxStep">{{ toolbar.submitText }}</n-button>
          <n-button v-if="toolbar.reset" v-bind="toolbar.resetProps" @click="reset">{{ toolbar.resetText }}</n-button>
        </slot>
      </n-space>
    </n-form>
  </n-space>
</template>