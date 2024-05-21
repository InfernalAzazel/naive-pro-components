# ProForm

> 高级表单用于快速构建表单视图

## 基础用法

:::demo

```vue

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  const formData = ref({});

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
  watchEffect(() => {
    console.log(formData.value)
  })

</script>

<template>
  <ProForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>
```

:::

## 步骤表单
:::demo
```vue
<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

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
  <ProForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>
```
:::

## Props

| 参数      | 类型                 | 默认值  | 说明                 |
|---------|--------------------|------|--------------------|
| v-model | `object \|  array` | -    | 绑定值                |
| columns | `array`            | -    | 表单配置参考下面 `columns` |
| rules   | `object`           | -    | 表单验证规则             |
| grid    | `boolean`          | true | 栅格布局               |
| cols    | `number`           | 24   | 显示的栅格数量            |
| xGap    | `number`           | 12   | 横向间隔槽              |
| yGap    | `number`           | 0    | 纵向间隔槽              |

> 更多参数请参考 [n-form](https://www.naiveui.com/zh-CN/os-theme/components/form) 和 [n-grid](https://www.naiveui.com/zh-CN/os-theme/components/grid) 的属性。

## Columns

| 参数        | 类型                | 默认值 | 说明                               |
|-----------|-------------------|-----|----------------------------------|
| label     | `string`          | -   | 	标签文本                            |
| prop      | `string`          | -   | v-model 绑定的字段名 *(需要是唯一值)*        |
| component | `string \| VNode` | -   | 组件配置参考下面 `Component Field Types` |
| props     | `object`          | -   | 传递的对应的组件的参数                      |
| span      | `number`          | 24  | 栅格占据的列数，为 0 的时候会隐藏               |


## Component Field Types

| 名称            | 说明    |
|---------------|-------|
| date-picker   | 日期选择器 |
| auto-complete | 自动完成  |
| cascader      | 级联选择器 |
| input         | 输入框   |
| input-number  | 数字输入框 |
| rate          | 评分    |
| time-picker   | 时间选择器 |
| mention       | 提及    |
| select        | 选择器   |
| switch        | 开关    |
| slider        | 滑块    |
| radio         | 单选框   |
| checkbox      | 多选框   |
| textarea      | 多行输入框 |