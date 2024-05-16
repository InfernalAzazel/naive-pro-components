<script setup lang="ts">
import { h, markRaw, ref } from 'vue'
import { NInput } from 'naive-ui'
defineOptions({name: 'HelloA'})
const inputValue = ref('');

const handleInput = (value) => {
  inputValue.value = value;
  console.log(value);
};

const x = () => h(NInput, {
  modelValue: inputValue.value,
  'onUpdate:modelValue': handleInput,
})
</script>

<template>
  <component :is="markRaw(x)"></component>
<!--  <NInput v-model:value="inputValue" @update:value="handleInput" />-->
</template>

<style scoped>

</style>