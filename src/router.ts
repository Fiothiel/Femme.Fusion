import { createRouter, createWebHistory } from "vue-router";

import About from './pages/about/About.vue';
import Contact from './pages/contact/Contact.vue';
import GroupBooking from './pages/groupbooking/GroupBooking.vue';
import Home from './pages/home/Home.vue';
import ShowBooking from './pages/showbooking/ShowBooking.vue';

 const  router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Start"
    },
    {
      path: "/about",
      component: About,
      name: "The Femme Fatales"
    },
    {
      path: "/showbooking",
      component: ShowBooking,
      name: "Shower"
    },
    {
      path: "/groupbooking",
      component: GroupBooking,
      name: "Gruppbokning"
    },
    {
      path: "/contact",
      component: Contact,
      name: "Kontakt"
    },
  ],
});

export default router;