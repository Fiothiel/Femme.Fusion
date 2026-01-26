<template>
  <div class="content">
    <section class="section">
      <div class="section__content">
        <ContentPost :post="mockPost" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContentPost from "@/components/contentpost/ContentPost.vue";
import { useUtils } from "~/utils";

onMounted(() => {
  useUtils().scrollToMain();
});

const mockPost = {
  id: "sta-pa-scenen",
  heading: "Stå på scenen med Femme Fusion",
  preamble:
    "Har du någon gång stått i ett publikhav, sett ett riktigt glammigt shownummer och känt en djup, skärande avund? Har du mitt i nöjet av att bli underhållen av andra artister blivit distraherad av tanken: “jag vill också stå där...”? Då ska du höra av dig till oss!",
  image: {
    src: "/images/sta-pa-scenen.webp",
    alt: "Kattlik scenenergi med självsäker pose i rampljus.",
    photographer: "Fotograferna Hoog",
  },
  body: `
        <p>
            Vi söker ibland extradansare eller showartister till specifika nummer i våra shower. Det bästa sättet att visa att du är intresserad är att säga det. Prata med oss på någon av våra workshops, så vi får chans att se hur du rör dig till musik och får en känsla för vad du skulle kunna passa i om ett tillfälle dyker upp.

        </p>

        <p>
            Du behöver inte vara en fullfjädrad dansare! Kanske har du annan scenvana, utstrålning, en egen stil eller något annat vi bara inte visste att vi behövde. 
        </p>

        <p>
            Vi letar efter <i>glöd</i>💥
        </p>

        <p>
            <NuxtLink to="/kontakt" class="button button--cta">Kontakta oss</NuxtLink>
        </p>
    `,
};
</script>
