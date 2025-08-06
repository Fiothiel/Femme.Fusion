<template>
  <div class="book__show">
    <h2>Show</h2>
    <p>
      Att stå på scenen är vår specialitet! Tack vare vår mångsidiga repertoar
      kan vi leverera underhållning som passar både företagsevenemang och
      privata tillställningar med varierade typer av publik. Dessutom har vi
      möjlighet att erbjuda skräddarsydda lösningar för de kunder som önskar en
      helt unik upplevelse.
      <router-link to="/contact">Kontakta oss</router-link> för mer information
      och bokning.
    </p>
    <div class="book__images">
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
    imageName: "show/show-skylten-kimv-1.webp",
    photographer: "Kim Vestbrant",
    description: "Tre dansare i gula bodysuits poserar med sopkvastar – en lekfull hyllning till showgirls med städkraft och stage presence."
  },
  {
    imageName: "show/show-skylten-kimv-2.webp",
    photographer: "Kim Vestbrant",
    description: "Tre dansare i svarta byxor och glittriga toppar sitter på stolar med vita fjäderviftor – klassisk burlesque med modern edge."
  },
  {
    imageName: "show/show-skylten-kimv-3.webp",
    photographer: "Kim Vestbrant",
    description: "Tre dansare i skoluniform-inspirerade outfits sträcker armarna upp i dramatisk pose – kaxigt, synkat och fullt ös."
  },
  {
    imageName: "show/show-skylten-kimv-4.webp",
    photographer: "Kim Vestbrant",
    description: "Två dansare i vita fransklänningar lutar sig mot stolar – sensuellt, retro och med Hollywood-glamour i varje rörelse."
  },
  {
    imageName: "show/show-skylten-kimv-5.webp",
    photographer: "Kim Vestbrant",
    description: "En dansare i vit fransklänning interagerar med stolen i ett solo – självsäker, lekfull och strålande i scenens spotlight."
  },
  {
    imageName: "show/show-skylten-må-1.webp",
    photographer: "Mattias Åström",
    description: "Två dansare i röda korsetter och fjädrar uppträder med mikrofoner – burlesk glamour och scenisk självsäkerhet med glimten i ögat."
  },
  {
    imageName: "show/show-skylten-må-2.webp",
    photographer: "Mattias Åström",
    description: "Två dansare i glittriga blå toppar och svarta byxor sitter på stolar med mikrofoner i handen – ett lekfullt och självsäkert nummer där sång och flirtig charm går hand i hand."
  },
  {
    imageName: "show/show-dv-24.webp",
    photographer: "StormPhoto",
    description: "Fyra dansare i vita skjortor och svarta shorts framför ett koreograferat nummer utomhus – självsäkra steg med girlboss-energi mitt på stan."
  },
  {
    imageName: "show/show-kulturnatten-kimv-1.webp",
    photographer: "Kim Vestbrant",
    description: "Tre dansare i vita sjuksköterske-outfits spelar upp en teatralisk scen där en person i hoodie ”behandlas” – en komisk och provocerande twist på sjukvård."
  },
  {
    imageName: "show/show-kulturnatten-kimv-2.webp",
    photographer: "Kim Vestbrant",
    description: "Dansare i polis- och streetkläder interagerar i en fängslande duo – dominans möter rebell i en scen med humor och edge."
  },
  {
    imageName: "show/show-kulturnatten-kimv-3.webp",
    photographer: "Kim Vestbrant",
    description: "En dansare fångad i ett uttrycksfullt ögonblick, bakåtlutad med håret i rörelse – rå känsla och frihet i svartvitt."
  },
  {
    imageName: "show/show-kulturnatten-kimv-4.webp",
    photographer: "Kim Vestbrant",
    description: "Tre dansare i glittrande scenkläder i en laddad formation – kroppar i synk, ansiktsuttryck i extas och rörelser med känsla."
  },
]);
</script>
