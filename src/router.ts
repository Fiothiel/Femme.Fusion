import { createRouter, createWebHistory } from "vue-router";

import About from './pages/about/About.vue';
import Home from './pages/home/Home.vue';

 const  router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;