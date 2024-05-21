# ProForm

> 高级表单用于快速构建表单视图

## 基础用法

:::demo

```vue
<script setup lang="ts">
  import { ref } from 'vue'
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
</script>

<template>
  <ProForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>
```
:::

## 表单校验
:::demo
```vue
<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({})
const columns = [
  {
    label: 'Name',
    prop: 'name',
    component: 'NInput',
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'NInput',
  },
];

const rules ={
  name: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  address: {
    required: true,
    message: '请输入地址',
    trigger: 'blur'
  },
}
</script>

<template>
  <ProForm v-model="formData" :columns="columns" :rules="rules" />
  {{ JSON.stringify(formData) }}
</template>
```
:::

## 栅格表单

:::demo
```vue
<script setup lang="ts">
import { ref} from 'vue'

const formData = ref({}); // 初始化为空对象

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const columns = [
  {
    label: '姓名',
    prop: 'name',
    component: 'NInput',
    span: 12,
  },
  {
    label: '地址',
    prop: 'address',
    component: 'NInput',
    span: 12,
  },
  {
    label: '选择',
    prop: 'select',
    component: 'n-select',
    props: {
      options: options,
    },
  },
];
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
      description: '这是第一个步骤',
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
      description: '这是第二个步骤',
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
  <ProForm v-model="formData" :columns="columns" type="steps" />
  {{ JSON.stringify(formData) }}
</template>
```
:::

## Props

| 参数      | 类型                                            | 可选值               | 默认值    | 说明                                 |
|---------|-----------------------------------------------|-------------------|--------|------------------------------------|
| v-model | `object \|  array`                            | -                 | -      | 绑定值                                |
| columns | `array`                                       | -                 | -      | 表单配置参考下面 `columns`                 |
| toolbar | `ProFormNormalToolBar \| ProFormStepsToolBar` | -                 | -      | 表单工具栏配置参考下面 `toolbar`，默认值按表单类型自动设置 |
| type    | `string`                                      | `normal \| steps` | normal | 表单类型                               |
| rules   | `object`                                      | -                 | -      | 表单验证规则                             |
| grid    | `boolean`                                     | -                 | true   | 栅格布局                               |
| cols    | `number`                                      | -                 | 24     | 显示的栅格数量                            |
| xGap    | `number`                                      | -                 | 12     | 横向间隔槽                              |
| yGap    | `number`                                      | -                 | 0      | 纵向间隔槽                              |

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

## Toolbar
### defineProFormNormalToolBar

- 普通表单使用

| 参数          | 类型            | 默认值               | 说明                |
|-------------|---------------|-------------------|-------------------|
| justify     | `string`      | start             | 布局对齐方式            |
| submit      | `boolean`     | true              | 提交按钮              |
| submitText  | `string`      | -                 | 默认 i18n 文本        |
| submitProps | `ButtonProps` | {type: 'primary'} | 提交按钮 传入的**props** |
| reset       | `boolean`     | true              | 重设按钮              |
| resetText   | `string`      | -                 | 默认 i18n 文本        |
| resetProps  | `ButtonProps` | -                 | 重设按钮 传入的**props** |

### defineProFormStepsToolBar

> defineProFormStepsToolBar 继承于 defineProFormNormalToolBar 的所有参数
- 步骤表单使用

| 参数        | 类型            | 默认值  | 说明                 |
|-----------|---------------|------|--------------------|
| prev      | `boolean`     | true | 上一步按钮              |
| prevProps | `ButtonProps` | -    | 上一步按钮 传入的**props** |
| next      | `boolean`     | true | 下一步按钮              |
| nextProps | `ButtonProps` | -    | 下一步按钮 传入的**props** |
