<script setup lang="ts">
import { useAttrs, withDefaults } from 'vue'
import Steps from './Steps.vue'
import Normal from './Normal.vue'
import type { ProFormProps} from './props'
import { defaultProps } from './props'

defineOptions({ name: 'ProForm', inheritAttrs: false })

const modelValue = defineModel()
// @ts-ignore
const props = withDefaults(defineProps<ProFormProps>(), defaultProps)
const attrs = useAttrs()
</script>

<template>
  <normal v-if="props.type === 'normal'" v-model:value="modelValue" v-bind="{...props, ...attrs}" />
  <steps v-if="props.type === 'steps'" v-model:value="modelValue" v-bind="{...props, ...attrs}" />
</template>