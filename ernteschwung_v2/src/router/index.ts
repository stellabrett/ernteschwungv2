import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CultivationView from "@/views/CultivationView.vue";
import UpcomingView from "@/views/UpcomingView.vue";
import AboutView from "@/views/AboutView.vue";
import SoLaWiView from "@/views/SoLaWiView.vue";
import ContactView from "@/views/ContactView.vue";
import ErnteteilerView from "@/views/ErnteteilerView.vue";
import ImpressumView from "@/views/ImpressumView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/solawi',
      name: 'solawi',
      component: SoLaWiView
    },
    {
      path:'/contact' ,
      name: 'contact',
      component: ContactView
    },
    {
      path:'/cultivation' ,
      name: 'cultivation',
      component: CultivationView
    },
    {
      path:'/ernteteiler' ,
      name: 'ernteiler',
      component: ErnteteilerView
    },
    {
      path:'/upcoming' ,
      name: 'upcoming',
      component: UpcomingView
    },
    {
      path:'/impressum' ,
      name: 'impressum',
      component: ImpressumView
    },
  ],
})

export default router
