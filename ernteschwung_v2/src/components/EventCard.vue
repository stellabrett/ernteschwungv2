<script setup lang="ts">
const props = defineProps<{
  image: string
  title?: string
  date?: string
  text?: string
}>()
</script>

<template>
  <div class="flex h-96 shadow-lg">
    <img :src="image" :alt="title" class="rounded-md object-cover w-full h-full">

<!--        <div class="p-5 text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold tracking-tight text-gray-900">{{title}}</h3>
            <hr class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <h5 class="mb-3 font-normal">{{date}}</h5>
            <span class="mb-3 font-normal text-gray-700">{{text}}</span>
          </div>
        </div>-->
  </div>

</template>

<style scoped>

</style>
