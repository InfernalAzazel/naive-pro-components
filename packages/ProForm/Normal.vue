<script setup lang="ts">
import { computed, ref, resolveComponent, useAttrs } from 'vue'
import type { FormInst} from 'naive-ui'
import { ProFormColumn, ProFormProps, ProFormNormalToolBar } from './props'
import { defaultProps, ProFormNormalToolBarProps} from './props'

defineOptions({ name: 'ProFormNormal', inheritAttrs: false })
// @ts-ignore
const props = withDefaults(defineProps<ProFormProps>(), defaultProps)
const modelValue = defineModel()
const attrs = useAttrs()
const formInstRef = ref<FormInst | null>(null)

const toolbar = computed<ProFormNormalToolBar>(() => {
  return props.toolbar? props.toolbar
    : ProFormNormalToolBarProps
})

function reset() {
  for (const column of props.columns) {
    modelValue.value[column.prop] = ''
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
  <n-form ref="formInstRef" :model="modelValue" v-bind="attrs">
    <template v-for="(column, index) in props.columns" :key="index">
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
        <n-button v-if="toolbar.submit" v-bind="toolbar.submitProps">{{ toolbar.submitText }}</n-button>
        <n-button v-if="toolbar.reset" v-bind="toolbar.resetProps" @click="reset">{{ toolbar.resetText }}</n-button>
      </slot>
    </n-space>
  </n-form>
</template>