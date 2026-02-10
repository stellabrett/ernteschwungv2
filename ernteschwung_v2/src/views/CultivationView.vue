<script setup lang="ts">

import Icon from "@/components/Icon.vue";
</script>

<template>
  <div class="relative w-full max-h-screen md:h-[500px] lg:h-[550px] h-[250px] ">
    <img src="@/assets/img/anbauFeld.jpg" alt="jungzwiebel" class="w-full h-full object-cover rounded-sm shadow-xl">
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div class="absolute inset-0 flex flex-col justify-end items-center text-center gap-2 pb-2 md:pb-8">
      <div class=" w-full text-white">
        <p class="text-lg md:text-4xl lg:text-5xl  leading-0 md:leading-4">SoLaWi</p>
        <p class="text-3xl md:text-6xl lg:text-7xl md:leading-relaxed tracking-wide ">Ernteschwung</p>
      </div>
      <div class="flex justify-center mx-auto  p-2">
        <div class="text-sm md:text-xl text-gray-100 ">Willst du wissen, wie wir die Landwirtschaft revolutionieren?</div>
      </div>
    </div>
  </div>
  <div class="flex flex-row flex-wrap justify-center place-items-center md:mt-8  ">
    <div class="text p-6">
      <h1 class="mb-1">Anbau</h1>
      Wir setzen im Gemüse Anbau auf ein Marktgarten-System. Das bedeutet bodenschonendes Arbeiten durch
      Verzicht auf schwere Maschinen.
      <p class="pt-5">Abgesehen vom oberflächlichen Einsatz einer Bodenfräse und eines Mulchgerätes wird unser
        Gemüse von Hand angebaut. Wir arbeiten auf Dauerbeeten, die einmal angelegt und immer wieder neu bepflanzt werden.
        So können unsere Gemüsepflanzen ihre Wurzeln in einem feinkrümeligen Boden ausbreiten, was ihnen sichtlich Freude bereitet.
        Wir verwenden Kompost auf unseren Beeten, achten auf eine ausgewogene Fruchtfolge & setzen Gründüngungen ein. Dadurch erhöhen
        wir die Bodenfruchtbarkeit, die Grundlage für gesundes Pflanzenwachstum.
      </p>
      <p class="pt-5">
        Durch entsprechende Sortenwahl, ausreichende Pflanzabstände und unseren Fokus auf einen fruchtbaren
        Boden minimieren wir den Einsatz von bio-tauglichen Pflanzenschutzmitteln.


      </p>
    </div>
    <div class="rounded-sm pb-4">
      <img src="@/assets/img/anbau3.jpg" alt="feld" class=" anbau3 rounded-sm shadow-xl">
    </div>
  </div>
  <div class="flex flex-col md:flex-row items-center bg-secondary w-full p-8">
    <img src="@/assets/img/AT-BIO-402_AT_quer.jpg" class="p-4 max-h-44 md:max-h-56 w-auto rounded-sm shadow-xl" alt="Bio Siegel">
    <div class="p-2 mt-4 md:mt-0 md:ms-10 text-2xl text-white flex-grow">
      Wir sind ein zertifizierter Biobetrieb und werden jährlich von der Kontrollstelle Lacon
      auf die Einhaltung der EU-Bio-Richtlinien sowie der Standards nach Bio-Austria kontrolliert.
    </div>
  </div>
  <div class="flex flex-wrap flex-row p-2 justify-center ">
    <div class=" me-6 my-8">
      <img src="@/assets/img/anbau2.jpg" alt="Gemüse im Anbautunnel" class="w-full rounded-sm anbau2 shadow-xl">
    </div>
    <div class="m-2 md:w-1/2 self-center text">
      <h2 class="my-2">Unser Ziel ist es...</h2>
      <span> einen gesunden Boden als Grundlage für ein gesundes Pflanzenwachstum zu schaffen,
        um eine hohe Qualität des Gemüses zu gewährleisten und gleichzeitig den Einsatz von Pflanzenschutzmitteln
        auf ein Minimum zu reduzieren. Darüber hinaus liegt uns die Erhaltung und Förderung der Artenvielfalt auf
        und um unsere Gemüseanbauflächen sehr am Herzen.Denn in einem reichhaltigen Ökosystem kann die Natur
        vieles von selbst regeln.</span>
      <p class="mt-5">Konkrete Maßnahmen hierfür sind:</p>
      <div class="md:mx-8 mt-2 flex flex-col text-sm ">
        <div class="flex p-1 gap-2">
          <icon name="eco" class="w-6 h-6 text-primary flex-shrink-0  "></icon>
          Mulchen mit Heu (ca. ¼ der Anbaufläche)
        </div>
        <div class="flex p-1 gap-2 text-sm ">
        <icon name="eco" class="w-6 h-6 text-primary flex-shrink-0 "></icon>
          Kein Beet geht unbedeckt über den Winter
        </div>
        <div class="flex p-1 gap-2">
          <icon name="eco" class="w-6 h-6 text-primary flex-shrink-0  "></icon>
          Seit 2024 versuchsweiser Einsatz von Gründüngungen
        </div>
        <div class="flex p-1 gap-2">
          <icon name="eco" class="w-6 h-6 text-primary flex-shrink-0  "></icon>
          Anlage von Blüh-Beeten
        </div>
        <div class="flex p-1 gap-2">
          <icon name="eco" class="w-6 h-6 text-primary flex-shrink-0  "></icon>
          <div>
            Pflege & Erhalt eines Feldrains als Rückzugsort für verschiedene Tierarten
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap p-4  md:mt-8 bg-primary gap-4">
    <div class=" p-6  flex flex-col w-full self-center">
      <h2 class="mb-1 text-neutral-50  break-words">Jungpflanzenproduktion</h2>
      <p class="pt-5 text-neutral-50">Unsere Jungpflanzen ziehen wir zu einem Teil selbst
        und zum Teil kaufen wir vom Jaklhof
        <a href="https://jaklhof.at" class="underline hover:text-secondary cursor-pointer">www.jaklhof.at</a> zu. Im Mai verkaufen wir
        eine Vielzahl verschiedener Sorten von Gemüse- & Blumenjungpflanzen auf mehreren Märkten
        in der Region sowie bei unseren hofeigenen Pflanzenmärkten
      </p>
    </div>

  </div>

</template>

<style scoped>
.text {
  max-width: 600px;
}

.anbau3 {
  max-height: 500px;
  max-width: 300px;
}
</style>
