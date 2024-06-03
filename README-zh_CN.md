# naive-pro-components

查看我们的网站 [naive-pro-components](https://infernalazazel.github.io/naive-pro-components/) 了解更多信息.

简体中文 | [English](./README.md)

> 目前在测试阶段请勿用于生产环境

## Install

使用 npm:

```bash
npm install naive-pro-components
```
或者

使用 pnpm:

```bash
pnpm add naive-pro-components
```

## 使用

### 全局

```ts

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import naivePro from 'naive-pro-components'

const app =createApp(App)
app.use(naive)
app.use(naivePro)
app.mount('#app')
```
## 办事列表

- [X] 添加 ProLayout
- [ ] 添加 ProBreadcrumb
- [ ] 添加 ProRadio
- [ ] 添加 ProCheckbox
- [X] 添加 ProForm base
- [X] 添加 ProForm steps
- [X] 添加 ProForm query
- [ ] 添加 ProDataTable
- [ ] 添加 ProCrud

## License
MIT

Copyright (c) 2024-present, kylin