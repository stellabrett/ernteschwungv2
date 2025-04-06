<script setup lang="ts">
import aboutUs from '@/assets/img/ankeArjuna.jpg'
import violetteBohnen from "@/assets/img/violetteBohnen_web.jpg";
</script>

<template>

  <div class="relative w-full max-h-screen md:h-[500px] lg:h-[550px] h-[250px] ">
    <img src="@/assets/img/Jungzwiebel_web.jpg" alt="jungzwiebel" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black opacity-30"></div>
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
  <div class="about flex justify-center items-center flex-col ">
    <h1 class="text-3xl mt-10 text-neutral-50">Der Hof </h1>
    <div class="mt-5 mb-10 px-24 text-neutral-50 text-center max-w-screen-lg">Ernteschwung ist ein kleinstrukturierter
      landwirtschaftlicher Betrieb in St. Margarethen / Raab in der Oststeiermark. Seit 2021 wird der Betrieb als
      Vollerwerbsbetrieb mit dem Schwerpunkt Biogemüseproduktion geführt.
    </div>

      <img src="../assets/img/ErnteschwungHof_web.jpg" alt="Bauernhof von oben" class="aboutUs shadow-xl rounded-sm px-1 object-cover">

  </div>

  <div class="flex justify-center flex-wrap bg-white mt-5">
    <div class="m-10 self-center ">
      <div class=" max-w-screen-lg my-6 break-words ">Seit 2023 gibt es mit der Produktion von Bio-Kleinballenheu und
        der Bio-Jungpflanzenproduktion
        zwei weitere untergeordnete Standbeine. Die Gemüsevermarktung wird über eine solidarische Landwirtschaft
        durch saisonale Absprachen mit den ErnteteilerInnen organisiert. Neben dem Gemüseanbau auf 0,35 ha gibt
        es noch ca. 1,6 ha Wiesen und Brachflächen sowie einen kleinen Streuobstbestand.
      </div>
    </div>
  </div>
  <div class="mb-6 py-10 bg-secondary">
    <div class="flex flex-col lg:flex-row justify-center mx-5 my-5">
      <img src="@/assets/img/Die%20GärtnerInnen.jpg" alt="GärtnerInnen" class="max-w-full lg:max-w-md lg:w-1/2 mb-5 lg:mb-0 shadow-xl rounded-md object-cover">
      <div class="lg:mx-10 lg:w-1/2 max-w-lg text-neutral-50">
        <div class="text-2xl text-start py-8">Die GärtnerInnen</div>
        <div class="mb-5 ">
          Arjuna lebt mit seiner Familie auf dem Hof. Nach seinem Studium der Agrarwissenschaften an der BOKU arbeitete
          er einige Zeit als Bio-Kontrolleur und träumte oft davon, den kleinen Betrieb seiner Eltern als
          Vollerwerbslandwirt zu führen. Im Jahr 2021 begann er diesen Traum zu verwirklichen, fasste sich ein Herz und
          begann mit dem Aufbau eines Biogemüsebaubetriebes. Seither erfüllt ihn der Umgang mit dem Boden, den Pflanzen
          und der umgebenden Natur und er kümmert sich mit Leidenschaft um die zarten Gemüsepflänzchen von der Aussaat
          bis zur Ernte.
        </div>
        <div>
          Anke ist seit 2022 als Gärtnerin bei Ernteschwung dabei. Sie ist maßgeblich am Aufbau und der Entwicklung der
          Solidarischen Landwirtschaft beteiligt. Anke kennt alle betrieblichen Abläufe von der Aussaat über die
          Pflanzung bis zur Ernte und ist überall im Garten dabei. Die Arbeit in der Produktion von hochwertigen und
          gesunden Lebensmittel macht für sie Sinn und der achtsame und wertschätzende Umgang mit Natur und Boden ist
          ihr
          ein Anliegen.
        </div>
      </div>
    </div>
  </div>
  <div class="p-5">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
      <img src="@/assets/img/Laufenten.jpg" alt="Laufenten" class="shadow-xl rounded-sm w-full object-cover h-80">
      <div
        class="sm:text-sm text-lg p-2  bg-primary shadow-xl rounded-sm w-full  flex items-center justify-center min-h-80">
        <div class="text-neutral-50 flex flex-col p-4 ">
          <div class="md:mx-4>">
            <div class="leading-5 my-5 md:text-xl ">Unsere Tiere</div>
            <div class="">
              Drei Laufenten sind bei Ernteschwung täglich mit der Schneckenjagd beschäftigt
              und sie erledigen diese Aufgabe sehr konsequent. Es gibt zwar keine Probleme mit Schnecken – die drei
              Enten lieben jedoch auch Salate jeglicher Art. Hier können wir uns jedoch mit Vliesen oder
              Kulturschutznetzen helfen.
            </div>
            <div class="pt-4">
              Vier Schafe sind für die Beweidung einer schwierig zu mähenden Streuobstwiese zuständig. Außerdem sind
              die vier wolligen Mitbewohner für alle Kinder, die Ernteschwung besuchen kommen, stets eine Attraktion.
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/img/Schafe.jpg" alt="Schafe" class="shadow-xl rounded-sm w-full h-80 object-cover">
    </div>
  </div>
</template>

<style scoped>
.about {
  background: linear-gradient(
    to top,
    white 0%,
    white 50%,
    rgb(119, 161, 128) 30%,
    rgba(124, 150, 108, 0.8) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

}

.aboutUs {
  max-height: 450px;
  max-width: 600px;
}
</style>
