<template>
  <div class="femme-fusion">
    <Header />
    <Hero />
    <main class="femme-fusion__main" id="main">
      <NuxtPage/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/Footer.vue';
import Hero from '@/components/hero/Hero.vue';
import Header from '@/components/header/Header.vue'
</script>