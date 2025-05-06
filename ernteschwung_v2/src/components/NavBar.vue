<script setup lang="ts">
import {ref} from "vue";
import Icon from "@/components/Icon.vue";

const isOpen =ref(false);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function closeMenu() {
  isOpen.value = false;
}
</script>

<template>

    <header class="bg-stone-100/60 absolute top-0 left-0 z-50  shadow w-full ">
      <nav class="mx-auto flex max-w-8xl items-center justify-between p-1 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-16 w-60" src="@/assets/img/Logo_Schriftzug_freigestellt_klein.png" alt="Logo" />
          </a>
        </div>

        <div class="relative lg:hidden">
          <button @click="toggleMenu" class="text-2xl p-2 focus:outline-none">
            <span v-if="!isOpen">☰</span>
            <span v-else>
              <icon name="close" class="w-6 h-6"></icon>

            </span>
          </button>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink to="/" class="text-sm leading-6 font-semibold text-gray-900  hover:text-secondary">Home</RouterLink>
          <RouterLink to="/about" class="text-sm  leading-6 font-semibold text-gray-900 hover:text-secondary">Über uns</RouterLink>
          <RouterLink to="/cultivation" class="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary">Anbau</RouterLink>
          <RouterLink to="/solawi" class="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary">SoLaWi</RouterLink>
          <RouterLink to="/ernteteiler" class="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary">ErnteteilerIn werden</RouterLink>
          <RouterLink to="/upcoming" class="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary">Aktuelles</RouterLink>
          <RouterLink to="/contact" class="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary">Kontakt</RouterLink>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="absolute left-0 right-0 top-18 z-50 flex flex-col p-5  bg-neutral-50 bg-opacity-90 shadow-lg justify-start ">
        <button class="flex items-start">
          <RouterLink to="/" @click="closeMenu" class="text-sm p-2   ">Home</RouterLink>
        </button>
        <button class="flex items-start">
          <RouterLink to="/about" @click="closeMenu" class="text-sm p-2  ">Über uns</RouterLink>
        </button>
        <button class="flex items-start">
          <RouterLink to="/cultivation" @click="closeMenu" class="text-sm p-2  ">Anbau</RouterLink>
        </button>
        <button class="flex items-start">
          <RouterLink to="/solawi" @click="closeMenu" class="text-sm p-2  ">SoLaWi</RouterLink>
        </button>
        <button class="flex items-start">
          <RouterLink to="/ernteteiler" @click="closeMenu" class="text-sm p-2  ">ErnteteilerIn</RouterLink>
        </button>
        <button class="flex items-start">
          <RouterLink to="/upcoming" @click="closeMenu" class="text-sm p-2   ">Aktuelles</RouterLink>
        </button>
        <button class="flex items-start">
          <RouterLink to="/contact" @click="closeMenu" class="text-sm p-2 hover:bg-tertiary-dark  ">Kontakt</RouterLink>
        </button>
      </div>
    </header>
</template>
<style scoped>
</style>
