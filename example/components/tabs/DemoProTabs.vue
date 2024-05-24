<script setup lang="ts">
const data = [
  { value: '', label: '第一章' },
  { value: 'card', label: '第二章' },
  { value: 'border-card', label: '第三章' },
]
</script>

<template>
  <n-tabs class="n-tabs-nav--segment-type" type="card" animated closable>
    <n-tab-pane name="oasis" tab="Oasis">
      Wonderwall
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="the Beatles">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="jay chou" tab="周杰伦">
      七里香
    </n-tab-pane>
  </n-tabs>
<ProTabs style="width: 300px" :data type="segment" closable >
</ProTabs>
</template>

<style >
</style>