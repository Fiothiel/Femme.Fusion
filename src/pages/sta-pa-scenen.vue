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
    "Har du mitt i nöjet av att bli underhållen av andra artister blivit distraherad av tanken: “jag vill också stå där…”? Då vill vi höra från dig! ",
  image: {
    src: "/images/sta-pa-scenen.webp",
    alt: "Kattlik scenenergi med självsäker pose i rampljus.",
    photographer: "Fotograferna Hoog",
  },
  body: `
        <p>
          Vi söker ibland extradansare eller showartister till specifika nummer i våra shower. Det bästa sättet att visa ditt intresse är att prata med oss på någon av våra dansklasser, eller skicka ett DM till oss på Instagram: <a href="https://www.instagram.com/femmefusionofficial/" target="_blank">@femmefusionofficial</a>.
        </p>

        <p>
            Du behöver inte vara en fullfjädrad dansare! Kanske har du annan scenvana, utstrålning eller något vi inte visste att vi behövde. 
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
