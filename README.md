# naive-pro-components

See our website [naive-pro-components](https://infernalazazel.github.io/naive-pro-components/) for more information.

English | [简体中文](./README-zh_CN.md)

> Do not use in a production environment at this time during the testing phase

## Install

Using npm:

```bash
npm install naive-pro-components
```

or using pnpm:

```bash
pnpm add naive-pro-components
```

## Usage

### Globals

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
## List of things to do

- [X] Add a ProLayout
- [ ] Add a ProBreadcrumb
- [ ] Add a ProRadio
- [ ] Add a ProCheckbox
- [X] Add a ProForm base
- [X] Add a ProForm steps
- [X] Add a ProForm query
- [ ] Add a ProDataTable
- [ ] Add a ProCrud

## License
MIT

Copyright (c) 2024-present, kylin