<script setup lang="ts">


import ButtonSecondary from "@/components/_ui_components/ButtonSecondary.vue";
</script>

<template>
  <div class="  bg-secondary py-8">

    <div class="md:text-4xl p-2 text-center text-neutral-50">
      <slot name="cta-txt">Werde Teil unser SoLaWi und hole dir dein Gemüse
        direkt <br> vom Hof erntefrisch auf den Teller!
      </slot>
    </div>
    <div class="flex justify-center mt-6">
      <router-link to="/contact">
        <ButtonSecondary class="" :title="KONTAKTIERE">
        </ButtonSecondary>
      </router-link>

    </div>


  </div>
</template>

<style scoped>

</style>
