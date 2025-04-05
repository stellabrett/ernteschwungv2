<script setup lang="ts">
import {ref} from "vue";
import Icon from "@/components/Icon.vue";

const images = [
  new URL('@/assets/img/Ernteanteil1.jpg', import.meta.url).href,
  new URL('@/assets/img/Ernteanteil2.jpg', import.meta.url).href,
  new URL('@/assets/img/Ernteanteil3.jpg', import.meta.url).href,
  new URL('@/assets/img/Ernteanteil4.jpg', import.meta.url).href,
  new URL('@/assets/img/Ernteanteil5.jpg', import.meta.url).href,
  new URL('@/assets/img/Ernteanteil6.jpg', import.meta.url).href,
  new URL('@/assets/img/Ernteanteil7.jpg', import.meta.url).href,
]

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const goTo = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="w-full max-w-4xl mx-auto px-4 pb-10 mt-10">
    <div class="relative overflow-hidden rounded-2xl shadow-lg">
      <!-- Image Container -->
      <div class="flex transition-transform duration-500 " :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="min-w-full h-64 sm:h-80 md:h-105 bg-center bg-cover "
          :style="{ backgroundImage: `url(${image})` }"
        />
      </div>

      <!-- Navigation Arrows -->
      <button @click="prev" class=" cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2">
        <icon name="angle-left" class="h-6 w-6 text-secondary" />
      </button>
      <button @click="next" class=" cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2">
        <icon name="angle-right" class="h-6 w-6 text-secondary" />
      </button>
    </div>

    <!-- Dots -->
    <div class="flex justify-center mt-4 space-x-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goTo(index)"
        class="w-3 h-3 rounded-full"
        :class="currentIndex === index ? 'bg-primary' : 'bg-gray-400'"
      ></button>
    </div>
  </div>
</template>

<style scoped>

</style>
