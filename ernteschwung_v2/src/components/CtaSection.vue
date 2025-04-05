<script setup lang="ts">


import ButtonSecondary from "@/components/_ui_components/ButtonSecondary.vue";
</script>

<template>
  <div class="  bg-primary py-8">

    <div class="md:text-3xl p-2 text-center text-neutral-50">
      <slot name="cta-txt">Werde Teil unser SoLaWi und hole dir dein Gemüse
        direkt <br> vom Hof erntefrisch auf den Teller!
      </slot>
    </div>
    <div class="flex justify-center mt-6">
      <slot name="cta-action">
        <router-link to="/contact">
          <ButtonSecondary  title="Kontaktiere uns">
          </ButtonSecondary>
        </router-link>
      </slot>


    </div>


  </div>
</template>

<style scoped>

</style>
