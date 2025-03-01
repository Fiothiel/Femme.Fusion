<template>
  <div class="hero">
    <!-- <img
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
            100vw" /> -->
    <div class="hero__logo-container">
      <a class="logo-link" href="/">
        <img class="hero__logo" src="../../assets/logo/logo-white.svg" />
      </a>
      <span class="hero__tag">
        <router-link to="/booking">Shower</router-link>
        <router-link to="/events">Kurser & workshops</router-link>
        <router-link to="/booking">Gruppbokningar</router-link>
      </span>
    </div>

    <Splide :data-splide="options">
      <SplideSlide v-for="image in images" :key="image.imageName">
        <figure>
          <img
            class="hero__image"
            :src="`../../assets/images/hero/${image.imageName}-1000.webp`"
            :srcset="`../../assets/images/hero/${image.imageName}-2500.webp 2500w,
           ../../assets/images/hero/${image.imageName}-1000.webp 1000w,
           ../../assets/images/hero/${image.imageName}-1000.webp 500w`"
            sizes="
          (min-width: 1920px) 2500px,
          (min-width: 960px) 1000px,
          100vw"
            :alt="image.description"
          />
          <figcaption>{{ image.photographer }}</figcaption>
        </figure>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import IImageInfo from "../../interfaces/IImageInfo";

const options = JSON.stringify({
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 6000,
  speed: 3000,
});

const images: Ref<IImageInfo[]> = ref([
  {
    imageName: "hero-splide-1",
    photographer: "Foto: Kim Vestbrant",
    description: "Hanna dansar på scenen medan hon sitter på en stol under en föreställning på Kulturnatten i Norrköping."
  },
  {
    imageName: "hero-splide-2",
    photographer: "Foto: Kim Vestbrant",
    description: "Kristina framför ett liveframträdande på scenen under Kulturnatten i Norrköping."
  },
  {
    imageName: "hero-splide-3",
    photographer: "Foto: Kim Vestbrant",
    description: "Kristina och Ella bjuder på en energisk dans med cowboyhattar på scenen under Kulturnatten i Norrköping."
  },
  {
    imageName: "hero-splide-4",
    photographer: "Foto: Kim Vestbrant",
    description: "Sandra dansar uttrycksfullt på scenen och slänger med håret under ett framträdande på Kulturnatten i Norrköping."
  },
  {
    imageName: "hero-splide-5",
    photographer: "Foto: Kim Vestbrant",
    description: "Hela gruppen poserar på scenen efter ett lyckat uppträdande på Kulturnatten i Norrköping."
  }
]);
</script>