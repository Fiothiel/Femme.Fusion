<template>
  <Hamburger @click="onClick()"/>
  <div class="menu" :class="{'menu--open': open}">
    <nav class="menu__nav">
      <h1>Menu</h1>
      <a href="#">Link 1</a>
      <a href="/about">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
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