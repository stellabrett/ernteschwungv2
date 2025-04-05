<script setup lang="ts">

import {computed} from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps<{
  title: string,
  type?: string,
  ariaLabel?: string,
  iconPrefix?:  string,
  iconPostfix?: string,
}>()
console.log('im button', props.iconPrefix )
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
    class="appearance-none rounded-lg cursor-pointer text-primary
  hover:bg-primary-light  py-3 px-6  text-center hover:scale-110 flex items-center justify-center gap-1">

      <icon v-if="iconPrefix" :name="iconPrefix" class="h-5 w-5 text-primary"></icon>

  {{title}}
      <icon v-if="iconPostfix" :name="iconPostfix" class="h-5 w-5 text-primary"></icon>

  </button>
</template>



<style scoped>

</style>
