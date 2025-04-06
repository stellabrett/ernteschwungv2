import { defineStore } from "pinia";
import flyerAllgemein from "@/assets/img/Flyer_allgemein_Solawi_Ernteschwung.jpg";
import flyerJungplanzenMarkt from "@/assets/img/Flyer_Jungpflanzenmarkt_Ernteschwung.jpg";
import flyerInfoveranstaltung from "@/assets/img/Flyer_Infoveranstaltung.jpg";

interface Event {
  title?: string;
  date?: string;
  text?: string;
  id: number;
  image?: string;
}

export const useEventStore = defineStore('event', {
  state: () => ({
    events: [] as Event[],
  }),
  actions: {
    fetchEvents() {
      this.events = [
        {
          title: "Jungpflanzenmarkt",
          date: "",
          text: "",
          id: 1,
          image: flyerJungplanzenMarkt,
        },
        {
          title: "Infoveranstaltung",
          date: "",
          text: "",
          id: 2,
          image: flyerInfoveranstaltung,
        },
        {
          title: "Flyer Allgemein",
          date: "",
          text: "",
          id: 3,
          image: flyerAllgemein,
        },
      ];
    },
  },
});
