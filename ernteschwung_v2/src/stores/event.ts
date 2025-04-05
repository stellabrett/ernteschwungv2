import { defineStore } from "pinia";
import flyerAllgemein from "@/assets/img/Flyer_allgemein_Solawi_Ernteschwung.jpg";
import flyerJungplanzenMarkt from "@/assets/img/Flyer_Jungpflanzenmarkt_Ernteschwung.jpg";
import flyerInfoveranstaltung from "@/assets/img/Flyer_Infoveranstaltung.jpg";

interface Event {
  title: string;
  date: string;
  text: string;
  id: number;
  image: string;
}

export const useEventStore = defineStore('event', {
  state: () => ({
    events: [] as Event[],
  }),
  actions: {
    fetchEvents() {
      this.events = [
        {
          title: "Jetzt Vorbestellen",
          date: "13.12.2024 - 31.12.2024",
          text: "Mit 13.12. geben wir unseren letzten Ernteanteil für die heurige Saison aus und gehen dann in eine kurze Winterpause. Ab sofort kann man sich (per Mail oder Anruf) wieder für einen Ernteanteil im Jahr 2025 voranmelden.",
          id: 1,
          image: flyerJungplanzenMarkt,
        },
        {
          title: "Erntedank Fest",
          date: "09.09.2024, Ernteschwung Biohof",
          text: "",
          id: 2,
          image: flyerInfoveranstaltung,
        },
        {
          title: "Erntedank Fest",
          date: "09.09.2024, Ernteschwung Biohof",
          text: "",
          id: 3,
          image: flyerAllgemein,
        },
      ];
    },
  },
});
