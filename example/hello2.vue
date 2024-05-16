<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'
import { NInput } from 'naive-ui'

const t = defineComponent({
  name: 'HelloWorld',
  setup() {
    const inputValue = ref('');

    const handleInput = (value) => {
      inputValue.value = value;
      console.log(value);
    };

    return () => h(NInput, {
      modelValue: inputValue.value,
      'onUpdate:value': handleInput,
    })
  }
})
</script>

<template>
  <t/>
</template>