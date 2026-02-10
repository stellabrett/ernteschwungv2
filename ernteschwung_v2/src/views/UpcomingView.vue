<script setup lang="ts">

import {useEventStore} from "@/stores/event.ts";
import EventCard from "@/components/EventCard.vue";
import SocialBanner from "@/components/SocialBanner.vue";

const eventStore = useEventStore()
eventStore.fetchEvents()

const blumenPdf = new URL(
  "../assets/pdfs/Blumenjungpflanzen Sortiment 2025.pdf",
  import.meta.url
).href

const gemuesePdf = new URL(
  "../assets/pdfs/GemüsejungpflanzenSortiment 2025.pdf",
  import.meta.url
).href
</script>

<template>

  <div class="relative w-full max-h-screen md:h-[500px] lg:h-[550px] h-[250px] ">
    <img src="@/assets/img/salat_web.jpg" alt="fisolen" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div
      class="absolute inset-0 flex flex-col justify-end items-center text-center gap-2 pb-2 md:pb-8">
      <div class=" w-full text-white">
        <p class="text-lg md:text-4xl lg:text-5xl  leading-0 md:leading-4">SoLaWi</p>
        <p class="text-3xl md:text-6xl lg:text-7xl md:leading-relaxed tracking-wide ">
          Ernteschwung</p>
      </div>
      <div class="flex justify-center mx-auto  p-2">
        <div class="text-sm md:text-xl text-gray-100 ">Willst du wissen, wie wir die Landwirtschaft
          revolutionieren?
        </div>
      </div>
    </div>
  </div>


  <div class="p-5 md:mt-8 ">
    <h1 class="m-2 text-3xl text-center mt-3 mb-6">Unsere nächsten Events</h1>
    <SocialBanner/>
    <div class=" flex flex-row flex-wrap gap-4  my-8 w-full justify-center p-4">
      <div v-for="event in eventStore.events" :key="event.id">
        <EventCard :image="event.image || ''"/>
      </div>
    </div>
  </div>

  <div class="p-5 mt-4 md:mt-8 mb-4">
    <h2 class="text-2xl text-center mb-4">Unsere Jungpflanzenlisten</h2>
    <div class="flex flex-col md:flex-row justify-center gap-4">
        <a
          :href="blumenPdf"
          target="_blank"
          rel="noopener"
          class="bg-secondary text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-900 transition"
        >

          <p class="text-lg">Blumenjungpflanzen</p>
          <p class="text-xs">Sortiment 2025</p>

        </a>


      <a
        :href="gemuesePdf"
        target="_blank"
        rel="noopener"
        class="bg-secondary  text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-900 transition"
      >
        <p class="text-lg">Gemüsejungpflanzen</p>
        <p class="text-xs">Sortiment 2025</p>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
