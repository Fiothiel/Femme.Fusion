<template>
  <Hamburger @click="onClick()"/>
  <div class="menu" :class="{'menu--open': open}">
    <nav class="menu__nav">
      <h1>Meny</h1>
      <ul>
        <li v-for="(route, index) in router.options.routes" :key="index">
          <router-link :to="route.path">{{ route.name }}</router-link>
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
let open = ref(false);

const onClick = () => {
  open.value = !open.value;
}
</script>