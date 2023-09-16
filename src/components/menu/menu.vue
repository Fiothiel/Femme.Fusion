<template>
  <Hamburger @click="onClick()"/>
  <div class="menu" :class="{'menu--open': open}">
    <nav class="menu__nav">
      <h1>Menu</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/book">Book</a>
      <a href="/rutor">Rutor</a>
      <a href="/contact">Kontakta oss</a>
    </nav>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

import Hamburger from "../hamburger/hamburger.vue";
let open = ref(false);

const onClick = () => {
  open.value = !open.value;
}
</script>