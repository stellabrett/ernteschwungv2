<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
  title: string,
  type?: string,
  ariaLabel?: string,
  iconPrefix?:  string,
  iconPostfix?: string,
}>()

const ariaLabel = computed(() => props.ariaLabel || props.title)
const emit = defineEmits(['click'])
const click = () => {
  emit('click')
}
</script>

<template>
  <button
    @click="click"
    :ariaLabel="ariaLabel"
    class="appearance-none rounded-lg cursor-pointer bg-white text-primary outline-1 outline-primary
  hover:bg-primary-light shadow py-3 px-6 inline-block text-center">
    <slot name="icon-prefix"></slot>
    {{title}}
    <slot name="icon-postfix"></slot>
  </button>
</template>

<style scoped>

</style>
