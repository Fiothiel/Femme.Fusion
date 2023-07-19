import { createRouter, createWebHistory } from "vue-router";

import About from './pages/about/About.vue';
import Home from './pages/home/Home.vue';

export default createRouter({
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
