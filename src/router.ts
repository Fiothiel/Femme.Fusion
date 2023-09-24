import { createRouter, createWebHistory } from "vue-router";

import About from './pages/about/About.vue';
import Book from './pages/book/Book.vue';
import Contact from './pages/contact/Contact.vue';
import Home from './pages/home/Home.vue';

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
      name: "Om oss"
    },
    {
      path: "/book",
      component: Book,
      name: "Vi erbjuder"
    },
    {
      path: "/contact",
      component: Contact,
      name: "Kontakt"
    },
  ],
});

export default router;