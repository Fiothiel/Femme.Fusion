import { createRouter, createWebHistory } from "vue-router";

import About from './pages/about/About.vue';
import Book from './pages/book/Book.vue';
import Contact from './pages/contact/Contact.vue';
import Home from './pages/home/Home.vue';
import Squares from './pages/squares/Squares.vue';

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
    {
      path: "/book",
      component: Book,
    },
    {
      path: "/rutor",
      component: Squares,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

export default router;