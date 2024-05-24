# ProTabs

> 高级标签页用于快速构建标签页视图

## 基础用法

:::demo
```vue
<script setup lang="ts">
const data = [
  { value: '666', label: '第一章' },
  { value: 'card', label: '第二章' },
  { value: 'border-card', label: '第三章' },
]
</script>

<template>

<ProTabs :data type="segment" >
</ProTabs>
</template>
```
:::