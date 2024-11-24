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
      <a href="/">
        <img class="hero__logo" src="../../assets/logo/logo-white.svg" />
      </a>
      <span class="hero__tag">Experience the extraordinary</span>
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
    description:
      "Hanna dancing on stage while sitting on a chair during a performance.",
  },
  {
    imageName: "hero-splide-2",
    photographer: "Foto: Kim Vestbrant",
    description: "Kristina singing on stage during a live performance.",
  },
  {
    imageName: "hero-splide-3",
    photographer: "Foto: Kim Vestbrant",
    description: "Kristina and Ella dancing on stage with cowboy hats.",
  },
  {
    imageName: "hero-splide-4",
    photographer: "Foto: Kim Vestbrant",
    description:
      "Sandra dancing on stage, flipping her hair during the performance.",
  },
  {
    imageName: "hero-splide-5",
    photographer: "Foto: Kim Vestbrant",
    description: "The full group on stage after completing a performance.",
  },
]);
</script>