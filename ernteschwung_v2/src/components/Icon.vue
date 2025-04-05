<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const icon = defineAsyncComponent(async () => {
  if (props.name == '') {
    return await new Promise(() => {})
  }
  try {
    return await import(`@/assets/icons/${props.name}.svg`)
  }
  catch (error) {
    console.error('Icon not found:', error)
    return await import(`@/assets/icons/default.svg`)
  }
})
</script>

<template>
  <component :is="icon" class="fill-current" />
</template>

<style scoped></style>
