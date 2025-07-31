import { createRouter, createWebHashHistory } from "vue-router";

import About from './pages/about/About.vue';
import Contact from './pages/contact/Contact.vue';
import Home from './pages/home/Home.vue';
import Events from './pages/events/Events.vue';
import Booking from './pages/booking/Booking.vue';
import FreeDance from "./pages/signup/FreeDance.vue";
import Workshop from "./pages/signup/Workshop.vue";

 const  router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Start"
    },
    {
      path: "/about",
      component: About,
      name: "Om oss"
    },
    {
      path: "/booking",
      component: Booking,
      name: "Bokning"
    },
    {
      path: "/events",
      component: Events,
      name: "Aktuellt"
    },
    {
      path: "/contact",
      component: Contact,
      name: "Kontakt"
    },
    {
      path: "/workshop-gratis",
      component: FreeDance,
      name: "Gratis dansworkshop",
      meta: { displayInMenu: false }
    },
    {
      path: "/workshop-streetdance",
      component: Workshop,
      name: "Streetdance",
      meta: { displayInMenu: false }
    },
  ],
});

export default router;