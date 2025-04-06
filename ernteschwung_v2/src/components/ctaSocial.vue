<script setup lang="ts">

</script>

<template>
<!--  <div class="bg-primary text-white p-6 rounded-2xl shadow-lg mt-8 text-center max-w-96 hover:scale-105 ">
    <h3 class="text-xl font-semibold mb-2">Folge uns für Updates & Impressionen</h3>
    <div class="flex justify-center gap-6 mt-3">
      <a href="https://www.instagram.com/solawi_ernteschwung/" target="_blank" class="hover:opacity-80 cursor-pointer">
        <img src="@/assets/img/instagramLogo.webp" class="h-6 w-6" alt="Instagram">
      </a>
      <a href="https://www.instagram.com/solawi_ernteschwung/" target="_blank" class="hover:opacity-80 cursor-pointer">
        <img src="@/assets/img/Facebook_Logo.png" class="h-6 w-6" alt="Facebook">
      </a>
    </div>
  </div>-->
  <div class="bg-primary text-white p-6 rounded-2xl shadow-lg mt-8 text-center max-w-96 hover:scale-105 animate-slide-in-right">
    <h3 class="text-xl font-semibold mb-2">Folge uns für Updates & Impressionen</h3>
    <div class="flex justify-center gap-6 mt-3">
      <a href="https://www.instagram.com/solawi_ernteschwung/" target="_blank" class="hover:opacity-80 cursor-pointer">
        <img src="@/assets/img/instagramLogo.webp" class="h-6 w-6" alt="Instagram">
      </a>
      <a href="https://www.instagram.com/solawi_ernteschwung/" target="_blank" class="hover:opacity-80 cursor-pointer">
        <img src="@/assets/img/Facebook_Logo.png" class="h-6 w-6" alt="Facebook">
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-in-right {
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out both;
}
</style>
