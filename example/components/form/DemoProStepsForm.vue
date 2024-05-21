<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ProForm from '../../../packages/ProForm';

const formData = ref({});

const columns = [
  {
    label: 'Name',
    type: 'steps',
    children: [
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
    ]
  },
  {
    label: 'Name2',
    type: 'steps',
    children: [
      {
        label: 'Name2',
        prop: 'name2',
        component: 'NInput',
        props: {
          placeholder: '请输入姓名'
        }
      },
      {
        label: 'Address2',
        prop: 'address2',
        component: 'NInput',
      },
    ]
  },

];
watchEffect(() => {
  console.log(formData.value)
})

</script>

<template>
  <n-space vertical>
    <ProForm v-model="formData" :columns="columns" type="steps"/>
    {{ JSON.stringify(formData) }}
  </n-space>
</template>