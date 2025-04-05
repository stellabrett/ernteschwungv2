<script setup lang="ts">
import kernteam from '@/assets/img/Kernteam.jpg'
import CtaSection from "@/components/CtaSection.vue";
import ButtonPrimary from "@/components/_ui_components/ButtonPrimary.vue";

</script>


  <template>
    <div class="relative w-full  max-h-screen md:h-[500px] sm:h-[200px]">
      <img src="@/assets/img/tomaten_web.jpg" alt="jungzwiebel" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="absolute inset-0 flex flex-col justify-end items-center text-center">
        <div class=" w-full p-6 text-white">
          <p class="text-4xl lg:text-6xl  leading-4">SoLaWi</p>
          <p class="text-5xl lg:text-7xl leading-relaxed ">Ernteschwung</p>
        </div>
      </div>
    </div>
    <div class=" p-2 my-10 mx-auto lg:mx-8 ">
      <h1>SoLaWi- Solidarische Landwirtschaft</h1>
      <p> ein zukunftsweisendes Modell für eine ökologische und soziale Landwirtschaft ist, das sowohl die Natur als auch
        die Menschen in den Mittelpunkt stellt.</p>
      <div>
        <h3 class="font-semibold text-lg mt-4 ">Zukunftskonzept für ökologische und wirtschaftliche Nachhaltigkeit: </h3>
        <p>SoLaWi ermöglicht eine nachhaltige Landwirtschaft durch eine Kooperation zwischen ErzeugerInnen und
          VerbraucherInnen. Die Verantwortung für die Bewirtschaftung des Bodens und die ökologische Vielfalt wird dabei
          gemeinsam getragen.</p>
        <h3 class="font-semibold text-lg mt-4 ">Unsere Gesellschaftliche Verantwortung: </h3>
        <p>Der Schutz der Böden und die Förderung der Biodiversität sind zentrale Ziele, die durch den freien Markt nicht
          ausreichend sichergestellt werden können.</p>
      </div>
    </div>
    <div>
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center bg-primary text-neutral-50  p-2 ">
        <div class="max-w-96 p-2">
          <img src="@/assets/img/KorbHaende.jpg" alt="Gemüsekorb mit händen " class="ml-2 rounded-sm ">
        </div>
        <div class="md:mt-4">
          <h2>Warum SoLaWi?</h2>
          <div class="my-8 mx-auto md:me-10">
            <h3 class="font-semibold text-lg">Solidarität</h3>
            <p class="mb-4">SoLaWi verbindet ErzeugerInnen und VerbraucherInnen, um gemeinsam Verantwortung für eine
              nachhaltige Lebensmittelproduktion zu übernehmen. Diese Solidarität ermöglicht faire Bedingungen und eine
              gerechte Verteilung von Erträgen.</p>
            <h3 class="font-semibold text-lg">Transparenz</h3>
            <p class="mb-4">Direkte Kommunikation und Offenheit zwischen den Beteiligten schaffen Vertrauen und ein
              besseres Verständnis für die landwirtschaftliche Produktion. Um Prozesse nachvollziehbar zu machen, ist
              Transparenz ein zentraler Wert.</p>
            <h3 class="font-semibold text-lg">Nachhaltige & Regenerative Landwirtschaft</h3>
            <p class="mb-4">Nachhaltigkeit bedeutet, Ressourcen zu schonen und die Natur langfristig zu bewahren. Der
              regenerative Ansatz geht darüber hinaus, und setzt sich zum Ziel, Bodenfruchtbarkeit und Biodiversität
              aufzubauen und zu stärken. </p>
          </div>
        </div>
        <div class="md:ms-10">
          <h2>Wie setzen wir SoLaWi um?</h2>
          <div class="my-6 ">
            <h3 class="font-semibold text-lg ">Bodenschutz</h3>
            <p class="mb-4">Unser Boden ist die Grundlage für die Produktion von gehaltvollen und gesunden Lebensmitteln.
              Der achtsamer Umgang mit dieser Ressource ist uns ein großes Anliegen.</p>
            <h3 class="font-semibold text-lg">Planbarkeit</h3>
            <p class="mb-4">Ein großer Vorteil, sich über eine SoLaWi zu organisieren, ist die Planungssicherheit. Wir
              GärtnerInnen wissen genau, für wie viele ErnteteilerInnen wir anbauen und als ErnteteilerInnen bekommen wir
              regelmäßig einmal in der Woche unser Gemüse.</p>
            <h3 class="font-semibold text-lg">Gemeinsames Tragen von Risiken</h3>
            <p class="mb-4">Gemeinsam tragen wir auch das Risiko von Ernteausfällen. Durch eine breite Sortenauswahl lässt
              sich das Risiko relativ gering halten. Aber auch Überschüsse werden aufgeteilt. Der Ernteanteil kann also
              auch mal größer sein. </p>
          </div>
        </div>
        <div class="mx-auto p-2">
          <img src="@/assets/img/erbsenGießkanne.jpg" alt="erbsen" class=" w-full object-cover rounded-sm">
        </div>
      </div>
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 place-items-start m-12 justify-center items-center ">
      </div>
      <!-- Mitgestaltung -->
      <div class=" p-3   lg:mx-8">
        <h2 class="text-center mb-10 leading-8">Was kannst du beitragen?</h2>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start ">
          <div class="text-center max-w-96 border-2 shadow-lg border-neutral-300 rounded-md p-4 min-h-60">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mt-4  ">Feedback</h3>
            <p class="mt-2 text-sm">Durch deine Rückmeldung können wir uns langfristig immer genauer an die Bedürfnisse
              unserer ErnteteilerInnen anpassen. Das kann im persönlichen Gespräch oder über den Feedbackbogen am Ende der
              Saison passieren.</p>
          </div>
          <div class="text-center max-w-96 min-h-60 border-2 shadow-lg border-neutral-300 rounded-md p-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mt-4">Aktionstage</h3>
            <p class="mt-2 text-sm">Bei Feld-Aktionstagen kannst du die SoLaWi hautnah erleben und beim gemütlichen Tun,
              deine GärtnerInnen oder andere ErnteteilerInnen kennen lernen.</p>
          </div>

          <div class="text-center max-w-96 min-h-60 border-2 shadow-lg border-neutral-300 rounded-md p-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mt-4 ">Teilhabe</h3>
            <p class="mt-2 text-sm">Die SoLaWi ist das, was wir alle daraus machen. Bei verschiedenen Gelegenheiten, hast
              du die Möglichkeit, mitzugestalten.</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center p-5">
        <div class="m-2.5 mb-8 order-1 w-full flex justify-center sm:order-1 lg:order-1">
          <img class="max-w-full lg:max-w-2xl rounded-md shadow-md" :src="kernteam" alt="Kernteam">
        </div>
        <div class="p-2 my-8 order-2 w-full lg:w-4/5">
          <h2 class="text-2xl font-semibold">Kernteam</h2>
          <p class="mt-5 text-balance">
            Seit dem Jahr 2023 ist Ernteschwung als Solidarische Landwirtschaft organisiert – Das bedeutet
            unter anderem Teilhabe an der Produktion deiner Lebensmittel. Im Jahr der Gründung hat
            sich um die GärtnerInnen Anke und Arjuna herum das Kernteam gebildet, das auf
            ehrenamtlicher Basis in der Organisation der SoLaWi tatkräftig mitwirkt.
          </p>
          <div class="my-5">
            <RouterLink to="/about">
              <ButtonPrimary title="ERFAHRE MEHR"/>
            </RouterLink>
          </div>
        </div>
        <div class="w-full  flex justify-center order-3 lg:order-4">
          <img src="@/assets/img/erntedankfest.jpg" class="p-10 max-w-full lg:max-w-2xl rounded-md " alt="Erntedankfest ">
        </div>
        <div class="p-10 w-full lg:w-4/5 order-4 lg:order-3">
          <h2 class="text-2xl font-semibold">Erntedankfest</h2>
          <p>
            Unser jährliches Erntedankfest im Herbst wird gemeinsam vom Kernteam und anderen motivierten ErnteteilerInnen
            veranstaltet und stellt für uns alle die Krönung des Gemüse-Jahreskreises dar – Wir freuen uns an dem Tag über
            die
            köstlichen Schätze, die uns die Natur in diesem Jahr geschenkt hat und drücken unsere Dankbarkeit in dem Fest
            aus. Welch ein schöner Anlass, um zu feiern!
            Alle ErnteteilerInnen, NachbarInnen, Freunde und Bekannte sind eingeladen.
          </p>
        </div>
      </div>
      <cta-section class="events-bg">
        <template v-slot:cta-txt>Alle unsere Veranstaltungen findest du hier!</template>
        <template v-slot:btn-txt>UNSERE EVENTS</template>
      </cta-section>
    </div>
</template>

<style scoped>
</style>
