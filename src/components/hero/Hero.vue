<template>
  <div class="hero">
    <div class="hero__logo-container">
      <a class="logo-link" href="/">
        <img class="hero__logo" src="/logo-white.svg" />
      </a>
      <nav class="hero__actions" aria-label="Snabbval">
        <NuxtLink to="/bokning" class="button button--primary">Bokning</NuxtLink>
        <NuxtLink to="/kalender" class="button button--ghost">Kalender</NuxtLink>
        <NuxtLink to="/kontakt" class="button button--ghost">Kontakta oss</NuxtLink>
      </nav>
    </div>

    <Splide :data-splide="options">
      <SplideSlide v-for="image in images" :key="image.imageName">
        <figure>
          <NuxtImg class="hero__image" :src="image.imageName" sizes="xl:2500px md:1500px 100vw"
            :alt="image.description" />
          <figcaption>{{ image.photographer }}</figcaption>
        </figure>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
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
    imageName: "/images/hero/hero-splide-0.webp",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Sandra i spotlighten med övriga tre i bakgrunden, alla med blåglittriga toppar.",
  },
  {
    imageName: "/images/hero/hero-splide-1.webp",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Hanna dansar på scenen medan hon sitter på en stol under en föreställning på Kulturnatten i Norrköping.",
  },
  {
    imageName: "/images/hero/hero-splide-4.webp",
    photographer: "Foto: Mattias Åström",
    description:
      "Sandra, Kristina och Ella i korsetter på Skyltens scen, Kristina sjunger.",
  },
  {
    imageName: "/images/hero/hero-splide-3.webp",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Ella och Sandra sitter på stolar i scenljus och showar med stora vita fjädervippor i klassisk burlesquestil.",
  },
  {
    imageName: "/images/hero/hero-splide-2.webp",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Kristina framför ett liveframträdande på scenen under Kulturnatten i Norrköping.",
  },
  {
    imageName: "/images/hero/hero-splide-5.webp",
    photographer: "Foto: Mattias Åström",
    description:
      "Hanna, Sandra och Ella i vita fransklänningar under blått scenljus, med glamourös energi.",
  },
]);
</script>