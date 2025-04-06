<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import CookieConsent from "@/components/CookieConsent.vue";

</script>

<template>
  <NavBar/>
  <RouterView />
 <Footer/>
  <CookieConsent />
</template>

<style scoped>
</style>
