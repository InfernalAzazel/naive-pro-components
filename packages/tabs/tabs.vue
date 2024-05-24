<script setup lang="ts">
import type { ProTabsProps } from './props'
import { ref } from 'vue'
import type { TabsInst } from 'naive-ui'
import { Icon } from '@iconify/vue';

defineOptions({ name: 'ProTabs', inheritAttrs: false })
const props = withDefaults(defineProps<ProTabsProps>(), {
})
const modelValue = defineModel()
const tabsInstRef = ref<TabsInst | null>(null)
defineExpose({inst: ()=> tabsInstRef.value})
</script>

<template>
  <n-tabs ref="tabsInstRef" v-model:value="modelValue" v-bind="$attrs">
    <n-tab class="tt" v-for="(tab, _) in props.data" :key="_" :name="tab.label" style="">
      <n-button text>
        <n-flex align="center">
          <icon icon="ion:football-outline"/>
          {{ tab.label }}
          <icon icon="ion:arrow-back-outline"/>
        </n-flex>
      </n-button>
      <slot />
    </n-tab>
  </n-tabs>
</template>

<style >
.tt {
  background: aqua;
  padding: 3px;
}
</style>