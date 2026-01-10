<template>
  <div class="hero">
    <div class="hero__logo-container">
      <a class="logo-link" href="/">
        <img class="hero__logo" src="/logo-white.svg" />
      </a>
    </div>

    <Splide :data-splide="options">
      <SplideSlide v-for="image in images" :key="image.src">
        <figure>
          <NuxtImg class="hero__image" :src="image.src" sizes="xl:2500px md:1500px 100vw"
            :alt="image.alt" />
          <figcaption>{{ image.photographer }}</figcaption>
        </figure>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type IImageInfo from '@/interfaces/IImageInfo';

const options = JSON.stringify({
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 6000,
  speed: 3000,
});

const images: Ref<IImageInfo[]> = ref([
  {
    src: "/images/hero/hero-splide-0.webp",
    photographer: "Foto: Kim Vestbrant",
    alt:
      "Tre showartister uppträder i synkron koreografi med utsträckta armar under en energifylld scenföreställning.",
  },
  {
    src: "/images/hero/hero-splide-1.webp",
    photographer: "Foto: Kim Vestbrant",
    alt:
      "Showartist sitter på stol i ett uttrycksfullt scenmoment med stark närvaro och dramatisk ljussättning.",
  },
  {
    src: "/images/hero/hero-splide-6.webp",
    photographer: "Foto: Fotograferna Hoog",
    alt:
      "Tre dansare på scen i dramatisk blå och lila ljussättning, mitt i en kraftfull koreografisk rörelse med hår i rörelse och starkt scenuttryck.",
  },
  {
    src: "/images/hero/hero-splide-3.webp",
    photographer: "Foto: Kim Vestbrant",
    alt:
      "Två showartister uppträder med fjäderfantasier i en elegant och lekfull scenkoreografi.",
  },
  {
    src: "/images/hero/hero-splide-2.webp",
    photographer: "Foto: Kim Vestbrant",
    alt:
      "Showartist sjunger live på scen med mikrofon under en professionell scenföreställning.",
  },
  {
    src: "/images/hero/hero-splide-5.webp",
    photographer: "Foto: Mattias Åström",
    alt:
      "Tre showartister i ljusa scenkostymer poserar leende på scen i blått ljus under en professionell show.",
  },
]);
</script>