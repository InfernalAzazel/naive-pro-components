<script setup lang="ts">
import { ref } from 'vue'
import type { ProLayoutProps } from './props'
import logoSvg from '../assets/logo.svg'
import { Icon } from '@iconify/vue'

defineOptions({ name: 'ProForm', inheritAttrs: false })
const props = withDefaults(defineProps<ProLayoutProps>(), {
  collapsed: false,
  isFooter: true,
  headerHeight: 60,
  isMobile: true,
})
const rightDrawerActive = ref(false)


function handleRightDrawer() {
  rightDrawerActive.value = true
}
</script>

<template>
  <n-layout position="absolute">
    <!-- Header -->
    <n-layout-header class="flex flex-row items-center pl-10 pr-4 space-x-1" :style="`height: ${props.headerHeight}px;`" bordered>
      <!-- logo -->
      <slot name="header-start">
        <!-- apps -->
        <slot v-if="props.isMobile" name="apps">
          <n-button quaternary >
            <template #icon>
              <Icon icon="ion:apps-sharp"></Icon>
            </template>
          </n-button>
        </slot>
        <!-- logo -->
        <slot name="logo">
          <div class="flex flex-row justify-center items-center space-x-2">
            <n-image width="32" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"></n-image>
            <span class="text-2xl"> Naive Pro</span>
          </div>
        </slot>
      </slot>
      <div class="flex-grow"/>
      <!-- header-right -->
     <slot name="header-right" >
       <div v-if="props.isMobile">
         <n-button quaternary @click="handleRightDrawer">
           <template #icon>
             <Icon icon="ion:ellipsis-vertical-sharp"></Icon>
           </template>
         </n-button>
         <n-drawer  v-model:show="rightDrawerActive"  placement="right">
           <n-drawer-content >
             <slot name="mobile-actions" />
           </n-drawer-content>
         </n-drawer>
       </div>
       <slot v-else name="actions" />
     </slot>
    </n-layout-header>
    <n-layout position="absolute" has-sider :style="`top: ${props.headerHeight}px;`">
      <!-- Sidebar -->
      <n-layout-sider bordered>
        <n-menu :options="props.options" />
      </n-layout-sider>


      <!-- Main Content -->
      <n-layout-content>
        99999999999999999
      </n-layout-content>

      <!-- Footer -->
      <n-layout-footer v-if="props.isFooter" position="absolute" bordered>
        <n-space align="center" justify="center">
          <span>© 2024 My Company. All rights reserved.</span>
        </n-space>
      </n-layout-footer>
    </n-layout>

  </n-layout>


</template>