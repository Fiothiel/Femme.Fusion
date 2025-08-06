<template>
  <Hamburger @click="onMenuToggle" @keypress.enter="onMenuToggle" ref="burger" />
  <div class="menu" :class="{ 'menu--open': open }">
    <nav class="menu__nav">
      <h1>Meny</h1>
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link v-if="route.path !== '/workshop'" @click="onRouteClick" :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

import Hamburger from "../hamburger/hamburger.vue";

const router = useRouter();
const burger: any = ref(null);
let open = ref(false);

const routes = ref(router.options.routes.filter(route => route.meta === undefined || route.meta.displayInMenu));

const onRouteClick = () => {
  onMenuToggle();
  burger.value.onClick();
  document.querySelector('main')?.scrollIntoView({
    behavior: 'smooth'
  })
}

const onMenuToggle = () => {
  open.value = !open.value;

  if (open.value) {
    document.body.classList.add('no-scroll');
    document.body.addEventListener('keydown', onKeyPress);
  } else {
    document.body.classList.remove('no-scroll');
    document.body.removeEventListener('keydown', onKeyPress);
  }
}

const onKeyPress = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    onMenuToggle();
    if (burger && burger.value) {
      burger.value.onClick();
    }
  }
}

</script>