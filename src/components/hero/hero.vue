<template>
  <div class="hero">
    <div class="hero__logo-container">
      <a href="/">
        <img class="hero__logo" src="../../assets/logo/logo-white.svg" />
      </a>
      <span class="hero__tag">Experience the extraordinary</span>
    </div>
    <img
      class="hero__image"
      src="../../assets/images/hero-1000.jpg"
      srcset="
        ../../assets/images/hero-2500.jpg 2500w,
        ../../assets/images/hero-1000.jpg 1000w,
        ../../assets/images/hero-500.jpg   500w
      "
      sizes="
            (min-width: 1920px) 2500px,
            (min-width: 960px) 1000px,
            100vw"
    />
  </div>
</template>

<script setup lang="ts">
</script>