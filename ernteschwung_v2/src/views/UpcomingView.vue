<script setup lang="ts">

import {useEventStore} from "@/stores/event.ts";
import EventCard from "@/components/EventCard.vue";

const eventStore = useEventStore()
eventStore.fetchEvents()
</script>

<template>
  <div class="relative w-full  max-h-screen md:h-[500px] sm:h-[400px]">
    <img src="@/assets/img/salat_web.jpg" alt="fisolen" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black opacity-30"></div>
    <div class="absolute inset-0 flex flex-col justify-end items-center text-center">
      <div class=" w-full p-6 text-white">
        <p class="text-4xl lg:text-6xl  leading-4">SoLaWi</p>
        <p class="text-5xl lg:text-7xl leading-relaxed ">Ernteschwung</p>
      </div>
    </div>
  </div>
  <div class="p-5n ">
    <h2 class="m-2 text-3xl text-center mt-3 mb-6">News</h2>
    <div class=" flex flex-row flex-wrap gap-4  my-8 w-full justify-center p-4">
      <div v-for="event in eventStore.events" :key="event.id">
        <EventCard :image="event.image"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
