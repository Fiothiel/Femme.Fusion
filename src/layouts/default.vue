<template>
  <div class="femme-fusion">
    <Menu />
    <Hero />
    <main class="femme-fusion__content">
      <NuxtPage/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/Footer.vue';
import Hero from '@/components/hero/Hero.vue';
import Menu from '@/components/menu/Menu.vue'

import '../assets/styles/main.scss'
</script>