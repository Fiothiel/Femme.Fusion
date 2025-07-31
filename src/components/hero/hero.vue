<template>
  <div class="hero">
    <div class="hero__logo-container">
      <a class="logo-link" href="/">
        <img class="hero__logo" src="../../assets/logo/logo-white.svg" />
      </a>
      <span class="hero__tag">
        <router-link to="/booking">Shower</router-link>
        <router-link to="/events">Kurser & workshops</router-link>
        <router-link to="/booking?q=danceclass">Gruppbokningar</router-link>
      </span>
    </div>

    <Splide :data-splide="options">
      <SplideSlide v-for="image in images" :key="image.imageName">
        <figure>
          <img
            class="hero__image"
            :src="`../../assets/images/hero/${image.imageName}-1000.webp`"
            :srcset="`
              ${getImagePath(`hero/${image.imageName}-2500.webp`)} 2500w,
              ${getImagePath(`hero/${image.imageName}-1000.webp`)} 1000w,
              ${getImagePath(`hero/${image.imageName}-500.webp`)} 500w
            `"
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
import { useUtils } from "../../utils";
import "@splidejs/vue-splide/css";
import IImageInfo from "../../interfaces/IImageInfo";

const { getImagePath } = useUtils();

const options = JSON.stringify({
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 6000,
  speed: 3000,
});

const images: Ref<IImageInfo[]> = ref([
  {
    imageName: "hero-splide-0",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Sandra i spotlighten med övriga tre i bakgrunden, alla med blåglittriga toppar.",
  },
  {
    imageName: "hero-splide-1",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Hanna dansar på scenen medan hon sitter på en stol under en föreställning på Kulturnatten i Norrköping.",
  },
  {
    imageName: "hero-splide-7",
    photographer: "Foto: Mattias Åström",
    description:
      "Sandra, Kristina och Ella i korsetter på Skyltens scen, Kristina sjunger.",
  },
  {
    imageName: "hero-splide-6",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Ella och Sandra sitter på stolar i scenljus och showar med stora vita fjädervippor i klassisk burlesquestil.",
  },
  {
    imageName: "hero-splide-2",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Kristina framför ett liveframträdande på scenen under Kulturnatten i Norrköping.",
  },
  {
    imageName: "hero-splide-8",
    photographer: "Foto: Mattias Åström",
    description:
      "Hanna, Sandra och Ella i vita fransklänningar under blått scenljus, med glamourös energi.",
  },
]);
</script>