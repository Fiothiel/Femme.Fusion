<template>
  <div class="femme-fusion">
    <Menu />
    <Hero />
    <main class="femme-fusion__content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { useEvents } from './services/events-service';
import Footer from './components/footer/Footer.vue';
import Hero from './components/hero/hero.vue';
import Menu from './components/menu/menu.vue'

onMounted(() => {
  useEvents().getDansarnaEvents();
});

</script>

<style lang="scss">
// the main file that imports everything related with styles
@import "./styles/main.scss";
</style>
 