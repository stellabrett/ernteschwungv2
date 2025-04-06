<script setup lang="ts">

import CtaSocial from "@/components/ctaSocial.vue";
</script>

<template>
  <div class="mx-2 flex flex-col gap-4">
    <div class="ml-auto mt-16">
      <cta-social></cta-social>
    </div>
    <h2 class="mt-10 text-base md:text-xl mx-2 md:px-8 text-center">Du hast Fragen oder oder möchtest Teil der Solidarischen Landwirtschaft
      Ernteschwung werden?</h2>
    <p class="px-8 text-balance text-center p-2">Dann melde dich per Mail oder telefonisch bei Arjuna oder Anke
      und falls wir noch freie Plätze für die aktuelle Saison zu vergeben haben, senden wir dir
      gerne eine Saisonvereinbarung zu, mit der du dir dann deinen Gemüseanteil sichern kannst.</p>

    <div
      class="mb-24 flex flex-col border mx-auto p-10  my-12 rounded-md bg-primary text-neutral-50 text-center lg:text-xl ">
      <div class="my-4 ">
        <h4>0664 1013547 (Arjuna)</h4>
        <h4>0680 5569677 (Anke)</h4>
        <a href="mailto:gemuese@ernteschwung.datsubject=Anfrage&body=Hallo%20Ernteschwung-Team," class="underline hover:text-secondary cursor-pointer">gemuese@ernteschwung.at</a>
      </div>
      <div class="my-4 flex flex-col">
        <span class="mt-4">Bio-Hof Ernteschwumng</span>
        <span>Solidarische Landwirtschaft</span>
        <span>Entschendorf 35</span>
        <span>8321 St.Margarethen</span>
        <span class="mt-4">AT-BIO-402</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
