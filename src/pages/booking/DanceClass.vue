<template>
  <div class="book__dance-class">
    <h2>Gruppbokning</h2>
    <p>
      En gruppbokning är det perfekta sättet att skapa minnen tillsammans med
      dina vänner eller kollegor. Oavsett om det är en möhippa, födelsedagsfest
      eller en teambuildingaktivitet, erbjuder vi en upplevelse fylld av dans
      och glädje. Välj mellan olika dansstilar som burlesque, cabaret, feminine
      vibe, en mix av båda eller sensual heels – vi skräddarsyr lektionen efter
      era behov och nivåer, så att alla kan vara med och ha roligt.
      <router-link to="/contact">Kontakta oss</router-link> för mer information
      och bokning!
    </p>

    <div class="book__images book__images--dance-class">
      <Splide :data-splide="options">
        <SplideSlide v-for="image in images" :key="image.imageName">
          <figure>
            <img
              class="book__image"
              :src="getImagePath(image.imageName)"
              sizes="
            (min-width: 1920px) 2500px,
            (min-width: 960px) 1000px,
            100vw"
              :alt="image.description"
            />
            <figcaption>Foto: {{ image.photographer }}</figcaption>
          </figure>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useUtils } from "../../utils";
const { getImagePath } = useUtils();
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import IImageInfo from "../../interfaces/IImageInfo";

const options = JSON.stringify({
  type: "loop",  
  autoplay: false,
  perPage: 3,
  focus: 'center',
  speed: 1500,
  autoWidth: true,
  gap: '0.5rem',
  breakpoints: {    
    900: {
      perPage: 1,
    },
  },
});

const images: Ref<IImageInfo[]> = ref([
  {
    imageName: "great-gatsby-900.jpg",
    photographer: "Mattias Kannerstål",
    description: "Gatsbyvibbar med flapper"
  },
  {
    imageName: "groupbooking-burlesque-900.jpg",
    photographer: "Mattias Kannerstål",
    description: "Burlesque och korsetter"
  },
  {
    imageName: "groupbooking-heels-900.jpg",
    photographer: "Daniel Häggmyr",
    description: "Höga pleaser shoes i sensual heels"
  },
]);
</script>
