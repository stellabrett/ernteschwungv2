<script setup lang="ts">

</script>

<template>
  <div class="relative w-full  max-h-screen md:h-[500px] sm:h-[400px]">
    <img src="@/assets/img/anbauFeld.jpg" alt="jungzwiebel" class="w-full h-full object-cover rounded-sm shadow-xl">
    <div class="absolute inset-0 bg-black opacity-30"></div>
    <div class="absolute inset-0 flex flex-col justify-end items-center text-center">
      <div class=" w-full p-6 text-white">
        <p class="text-4xl lg:text-6xl  leading-4">SoLaWi</p>
        <p class="text-5xl lg:text-7xl leading-relaxed ">Ernteschwung</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row flex-wrap justify-center place-items-center md:mt-8  ">
    <div class="text p-6">
      <h1 class="mb-1">Anbau</h1>
      Wir setzen im Gemüse Anbau auf ein Marktgarten-System. Das bedeutet bodenschonendes Arbeiten durch
      Verzicht auf schwere Maschinen.
      <p class="pt-5">Abgesehen vom oberflächlichen Einsatz einer Bodenfräse und eines
        Mulchgerätes wird unser Gemüse von Hand angebaut. Wir arbeiten auf Dauerbeeten, die einmal angelegt
        und immer wieder neu bepflanzt werden. So können unsere Gemüsepflanzen ihre Wurzeln in einem feinkrümeligen
        Boden ausbreiten, was ihnen sichtlich Freude bereitet. Wir kaufen Kompost, verteilen ihn regelmäßig
        auf unseren Beeten und erhöhen so die Bodenfruchtbarkeit, die Grundlage für gesundes Pflanzenwachstum.
        Unsere Jungpflanzen ziehen wir zum größten Teil selbst, zum Teil kaufen wir zu.
      </p>
      <p class="pt-5">
        Durch entsprechende Sortenwahl, ausreichende Pflanzabstände und vorbeugende Maßnahmen konnten wir den Einsatz
        von Pflanzenschutzmitteln bisher auf den Einsatz von Gelbtafeln gegen Trauermücken in der Kultur und einer
        Kaliseifenlösung bei massivem Blattlausbefall beschränken
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
    <div class="m-2 w-1/2 self-center text">
      <h2 class="my-2">Unser Ziel ist es...</h2>
      <span> einen gesunden Boden als Grundlage für ein gesundes Pflanzenwachstum zu schaffen,
        um eine hohe Qualität des Gemüses zu gewährleisten und gleichzeitig den Einsatz von Pflanzenschutzmitteln
        auf ein Minimum zu reduzieren. Darüber hinaus liegt uns die Erhaltung und Förderung der Artenvielfalt auf
        und um unsere Gemüseanbauflächen sehr am Herzen.Denn in einem reichhaltigen Ökosystem kann die Natur
        vieles von selbst regeln.</span>
      <p class="mt-5">Konkrete Maßnahmen hierfür sind:</p>
      <div class="mx-8 mt-2">
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#1c1a1a ">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Mulchen mit Heu (ca. ¼ der Anbaufläche)
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#1c1a1a ">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Kein Beet geht unbedeckt über den Winter
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#1c1a1a ">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Seit 2024 versuchsweiser Einsatz von Gründüngungen
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#1c1a1a ">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Anlage von Blüh-Beeten
        </div>
        <div class="inline-flex p-1">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
               fill="#1c1a1a ">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
          Pflege & Erhalt eines Feldrains als Rückzugsort für verschiedene Tierarten
        </div>
      </div>
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
