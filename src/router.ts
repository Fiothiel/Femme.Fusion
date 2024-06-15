import { createRouter, createWebHashHistory } from "vue-router";

import About from './pages/about/About.vue';
import Contact from './pages/contact/Contact.vue';
import GroupBooking from './pages/groupbooking/GroupBooking.vue';
import Home from './pages/home/Home.vue';
import Events from './pages/events/Events.vue';
import ShowBooking from './pages/showbooking/ShowBooking.vue';
import Current from "./pages/current/Current.vue";

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
      name: "Medlemmar"
    },
    {
      path: "/events",
      component: Events,
      name: "Aktuellt"
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
    {
      path: "/burlesque-weekend",
      component: Current,
      name: "Burlesque Weekend",
      meta: {
        displayInMenu: false
      }
    },
  ],
});

export default router;