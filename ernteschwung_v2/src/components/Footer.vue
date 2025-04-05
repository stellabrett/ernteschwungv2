<script setup lang="ts">
import instagramLogo from '@/assets/img/instagramLogo.webp';
import facebookLogo from '@/assets/img/Facebook_Logo.png'

import logoSchriftzug from '@/assets/img/Logo_Schriftzug_freigestellt_klein.png'
</script>

<template>
  <div class="flex items-center justify-between w-full border-t border-gray-200 bg-tertiary py-2" >
    <div class="flex space-x-2 flex-col mx-10">
      <RouterLink to="/contact" class="px-2">Kontakt</RouterLink>
      <RouterLink to="/impressum" class="">Impressum</RouterLink>
    </div>

    <div class="flex-1 flex justify-center">
      <img :src="logoSchriftzug" alt="ernteschwung logo" class=" self-stretch h-20 hidden md:block">
    </div>

    <div class="flex space-x-2 mx-10">
      <button>
        <a href="https://www.facebook.com/Ernteschwung">
          <img :src="facebookLogo" alt="facebook logo" class="w-10 h-10">
        </a>
      </button>
      <button>
        <a href="https://www.instagram.com/solawi_ernteschwung/">
          <img :src="instagramLogo" alt="instagram logo" class="w-10 h-10">
        </a>
      </button>


    </div>
  </div>
</template>

<style scoped>

</style>
