<template>
  <div class="femme-fusion">
    <Menu />
    <Hero />
    <main class="femme-fusion__content">
      <router-view />
    </main>
  </div>
</template>


<script setup lang="ts">
import Hero from './components/hero/hero.vue';
import Menu from './components/menu/menu.vue';

</script>

<style lang="scss">
// the main file that imports everything related with styles
@import "./styles/main.scss";
</style>
 