# ProLayout

> 高级布局用于快速构建Admin视图

## 基础用法

:::demo
```vue
<script setup lang="ts">
  import { h, ref } from 'vue'
  import { Icon } from '@iconify/vue'

  function renderIcon (icon: string) {
    return () => h(Icon, {icon: icon})
  }

  const menuOptions = [
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon('ion:chevron-up-outline')
    },
    {
      label: '1973年的弹珠玩具',
      key: 'pinball-1973',
      icon: renderIcon('ion:chevron-up-outline'),
      disabled: true,
      children: [
        {
          label: '鼠',
          key: 'rat'
        }
      ]
    },
    {
      label: '寻羊冒险记',
      key: 'a-wild-sheep-chase',
      disabled: true,
      icon: renderIcon('ion:chevron-up-outline'),
    },
    {
      label: '舞，舞，舞',
      key: 'dance-dance-dance',
      icon: renderIcon('ion:chevron-up-outline'),
      children: [
        {
          type: 'group',
          label: '人物',
          key: 'people',
          children: [
            {
              label: '叙事者',
              key: 'narrator',
              icon: renderIcon('ion:chevron-up-outline'),

            },
            {
              label: '羊男',
              key: 'sheep-man',

            }
          ]
        },
        {
          label: '饮品',
          key: 'beverage',
          icon: renderIcon('ion:chevron-up-outline'),
          children: [
            {
              label: '威士忌',
              key: 'whisky'
            }
          ]
        },
        {
          label: '食物',
          key: 'food',
          children: [
            {
              label: '三明治',
              key: 'sandwich'
            }
          ]
        },
        {
          label: '过去增多，未来减少',
          key: 'the-past-increases-the-future-recedes'
        }
      ]
    }
  ]

  const collapsed = ref(true)
</script>

<template>
  <ProLayout :menus="menuOptions" v-model:collapsed="collapsed">
    <template #actions>
      <n-button>功能1</n-button>
      <n-button>功能2</n-button>
      <n-button>功能3</n-button>
    </template>
    <template #footer>
      © 2024 Your Company. All rights reserved.
    </template>
    我是内容
  </ProLayout>
</template>
```
:::


## Props

| 参数                | 类型                                                          | 可选值 | 默认值 | 说明 |
|-------------------|-------------------------------------------------------------|-----|-----|----|
| title             | `string`                                                    | -   | -   |    |
| isMobile          | `boolean`                                                   | -   | -   |    |
| headerHeight      | `number`                                                    | -   | -   |    |
| isFooter          | `boolean`                                                   | -   |     |    |
| logo              | `string`                                                    | -   | -   |    |
| logoSize          | `number`                                                    | -   |     |    |
| menus             | `Array<MenuOption \| MenuDividerOption \| MenuGroupOption>` | -   |     |    |
| accordion         | `boolean`                                                   | -   |     |    |
| showTrigger       | `boolean \| 'bar' \| 'arrow-circle'`                        | -   |     |    |
| collapsed         | `boolean`                                                   |     |     |    |
| collapsedWidth    | `number`                                                    |     |     |    |
| collapsedIconSize | `number`                                                    |     |     |    |
| inverted          | `boolean`                                                   |     |     |    |
| indent            | `number`                                                    |     |     |    |
| openKeys          | `Array<string>`                                             |     |     |    |
| selectedKey       | `string \| null`                                            |     |     |    |
| clickMenuItem     | `(key: string, item: MenuOption) => void`                   |     |     |    |
| updateOpenKeys    | `(keys: string[]) => void`                                  |     |     |    |