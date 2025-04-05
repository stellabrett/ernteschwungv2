<script setup lang="ts">
import CtaSection from "@/components/CtaSection.vue";
import kernteam from "@/assets/img/Kernteam.jpg";
import violetteBohnen from "@/assets/img/violetteBohnen_web.jpg";
import ButtonPrimary from "@/components/_ui_components/ButtonPrimary.vue";
import ButtonSecondary from "@/components/_ui_components/ButtonSecondary.vue";
</script>

<template>
  <div class="relative w-full max-h-screen md:h-[500px] sm:h-[400px]">
    <img :src="violetteBohnen" alt="Header Image" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="absolute inset-0 flex flex-col justify-end items-center text-center">
      <div class=" w-full p-6 text-white">
        <p class="text-4xl lg:text-6xl  leading-4">SoLaWi</p>
        <p class="text-5xl lg:text-7xl leading-relaxed ">Ernteschwung</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center mx-auto mt-16 p-2">
    <div class="text-4xl">Willst du wissen, wie wir die Landwirtschaft revolutionieren?</div>
  </div>
  <div class="flex justify-center mt-20">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center place-content-center">
      <div class="p-2">
        <img src="@/assets/img/Gemüsekorb.png" alt="Gemüsekorb" class="rounded-sm shadow-xl">
      </div>
      <div class="p-0.5 mx-5 ">
        <h2>Unser Gemüse</h2>
        <p class="text-wrap mb-8">Wir bauen über 35 verschiedene Gemüsearten an. Diese Vielfalt bringt Abwechslung in
          deine Küche und Sicherheit in den Anbau. Vom ersten Bund Radieschen im Frühjahr über die Zucchini- und
          Tomatenschwemme im Sommer bis hin zum saftigen Vogerlsalat aus dem ringsum verschneiten Gewächshaus. Das ist
          saisonaler Gemüsegenuss, den du mit uns erleben kannst. Hast du Lust auf mehr?</p>
        <ButtonPrimary class="" title="erfahre mehr">
          <router-link to="/anbau" class="appearance-none text-white">ERFAHRE MEHR</router-link>
        </ButtonPrimary>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-center content-center place-content-center  bg-primary-light flex-row my-20">
    <div class=" p-4  my-8 max-w-prose text-base self-center ">
      <h2 class="text-white">Team</h2>
      <p class="mt-5 text-white">Im Marktgarten sorgen Anke, Arjuna und Anna für die sorgsame Pflege der Gemüsekulturen.
        Darüber hinaus kümmert sich das SoLaWi-Kernteam ehrenamtlich um die Organisation des Erntedankfestes, die
        Betreuung von Abholstellen oder andere Organisationsaufgaben. Diese Möglichkeit der Teilhabe macht unsere Solawi
        lebendig und vielfältig.</p>
      <div class="my-5 ">
        <RouterLink to="/about">
          <ButtonSecondary class="text-white mt-5 " title="erfahre mehr"></ButtonSecondary>
        </RouterLink>
      </div>
    </div>
    <div class="my-10 place-items-center max-w-full">
      <img class=" w-full max-w-2xl rounded-sm shadow-xl" :src="kernteam" alt="Kernteam">
    </div>
  </div>
  <div class="flex mt-2 mx-auto">
    <div class="card flex flex-col text-center h-full justify-center items-center mx-auto">
      <img src="@/assets/img/logoRund.jpg" alt="SoLaWi" class="rounded-sm self-center w-full ">
      <h2 class="mt-5">SoLaWi</h2>
      <p class="flex-grow">Solawi? Solawas? Du willst genaueres über Solidarische Landwirtschaft erfahren und warum es
        das Zukunftskonzept für regionale Landwirtschaft ist?</p>
      <div class=" my-8 mt-6">
        <RouterLink to="/anbau" class="text-primary flex flex-row">ERFAHRE MEHR
          <svg class="fill-primary ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
               width="24px" fill="#5f6368">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
  <cta-section/>
</template>

<style scoped>

</style>
