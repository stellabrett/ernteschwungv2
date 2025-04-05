<script setup lang="ts">

import ImageSlider from "@/components/ImageSlider.vue";
import CtaSection from "@/components/CtaSection.vue";
</script>

<template>
  <div class="relative w-full  max-h-screen md:h-[500px] sm:h-[400px]">
    <img src="@/assets/img/mangold_web.jpg" alt="fisolen" class="w-full h-full object-cover shadow-xl">
    <div class="absolute inset-0 bg-black opacity-10"></div>
    <div class="absolute inset-0 flex flex-col justify-end items-center text-center">
      <div class=" w-full p-6 text-white">
        <p class="text-4xl lg:text-6xl  leading-4">SoLaWi</p>
        <p class="text-5xl lg:text-7xl leading-relaxed ">Ernteschwung</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 m-2 p-2 md:mx-8 ">
    <div class=" lg:col-span-2 text justify-self-center md:mt-8 ">
      <h2>Was ist ein Ernteanteil?</h2>
      <p>In einem Ernteanteil sind je nach Saison 5-8 verschiedene Gemüsearten enthalten.Das Gemüse wird immer
        donnerstags frisch geerntet und dann freitags verteilt. Der Ernteanteil kann in seiner Größe leicht
        variieren. Das hängt direkt mit der Witterung zusammen. Die Menge lässt sich von 1-2 Personen in einer
        Woche gut verarbeiten. Hierzu gibt es auch eine SoLaWi-interne Messenger Gruppe, in der Rezepte und
        Verarbeitungstipps unter den ErnteteilerInnen ausgetauscht werden.</p>
    </div>

    <div class="self-center my-2">
      <img src="@/assets/img/ernteanteil.jpg" alt="ernteanteil" class="rounded-sm shadow-xl">
    </div>
    <div class="my-2 text">
      <h2 class="">Was kostet ein Ernteanteil?</h2>
      <p class="text">Der Mindestrichtwert für die Kosten eines Ernteanteiles ergibt sich direkt aus dem Jahresbudget.
        Die Kosten
        eines Ernteanteiles belaufen sich im Jahr 2024 auf mindestens € 25,62 / Woche. Damit können alle Kosten
        für die Produktion für ein Jahr gedeckt werden. Wer kann und will, kann auch mehr bezahlen und so aktiv
        mitwirken, dass wir gemeinsam unserem mittelfristigen Ziel, einer fairen Entlohnung für die GärnterInnen,
        näherkommen. Mehrbeträge fließen direkt in das Gehalt der GärtnerInnen
      </p>
      <p>Als ErnteteilerIn finanzierst du also für eine Saison die Arbeit auf dem Bio-Gemüsehof Ernteschwung.
        Im Gegenzug erhältst du dafür einen Teil der Ernte. Wie so ein Ernteanteil zum Beispiel aussehen kann,
        siehst du auf den Bildern unten.</p>
    </div>
    <div class="my-2 self-center">
      <h2>Abholung</h2>
      <p>Mit dem Abholen bringt sich jede/r ErnteteilerIn aktiv ein und trägt zu unserer SoLaWi bei. Wir kommen
        uns auf halbem Weg entgegen. In unserer SoLaWi holen alle ErnteteilerInnen Freitags das Gemüse am Hof oder an
        einer
        Abholstation ab.</p>
    </div>

    <div class=" bg-primary my-2 text-neutral-50 p-6 flex flex-col justify-center rounded-sm flex-wrap">
      <div class="flex flex-col mx-auto p-8 ">
        <h3 class="font-semibold text-lg">Abholstellen:</h3>

        <div class="inline-flex p-1 mt-3 ">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#ffffff">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Direkt am Hof in Entschendorf
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#ffffff">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Graz-Moserhofgasse
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#ffffff">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Gleisdorf-Biosphere
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#ffffff">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Abholgemeinschaft Sommerberg
        </div>
      </div>
    </div>
  </div>
  <div class=" md:mt-10 flex flex-col justify-end items-center">
    <h2>Wie kann so ein Ernteanteil aussehen?</h2>
    <ImageSlider />
  </div>
  <cta-section>
    <template cta-text>
      <p class="text-center text-2xl">Du möchtest Teil der Solidarischen Landwirtschaft Ernteschwung werden und von April
        bis Dezember wöchentlich in den Genuss
        von hochwertigem, erntefrischen Bio-Gemüse kommen?
      </p>
      <p class="pt-5 text-center">Dann melde dich per Mail oder telefonisch bei Arjuna oder Anke
        und falls wir noch freie Plätze für die aktuelle Saison zu vergeben haben, senden wir dir
        gerne eine Saisonvereinbarung zu, mit der du dir dann deinen Gemüseanteil sichern kannst.
      </p>
    </template>
    <template #cta-button>

    </template>

  </cta-section>

  <div>

  </div>
</template>

<style scoped>

</style>
