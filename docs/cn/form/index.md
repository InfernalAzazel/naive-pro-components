# SchemaForm

常用的 SchemaForm

## 基础用法
:::demo

```vue

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  const formData = ref({
    name: '',
    address: ''
  });

  const columns = [
    {
      label: 'Name',
      prop: 'name',
      component: 'NInput',
      props: {
        placeholder: '请输入姓名'
      }
    },
    {
      label: 'Address',
      prop: 'address',
      component: 'NInput',
    },
  ];
  watchEffect(()=>{
    console.log(formData.value)
  })

</script>

<template>
  <SchemaForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>
```
:::