<template>
  <WorkshopPage
    title="Musikaldans – Dancing Through Life"
    date-label="Söndag 11 januari 2026"
    time-label="10:30–12:00"
    address-label="Skylten, Södra Oskarsgatan 3, Linköping"
    level-label="Nybörjare"
    price-label="100 kr"
    image-src="/images/hero/hero-splide-1.webp"
    image-alt="Dansworkshop i musikaldans inspirerad av Wicked på Skylten i Linköping"
  >
    <template #intro>
      <p>
        I den här workshopen lär vi oss koreografin
        <strong>Dancing Through Life</strong> från musikalen – och nu filmen –
        <strong>Wicked</strong>. Vi går igenom allt i lugnt tempo så att även
        nybörjare hänger med.
      </p>
    </template>

    <template #body>
      <p>
        Perfekt för dig som älskar musikal, vill testa scenkänslan eller bara
        dansa till magisk musik i en trygg miljö.
      </p>
    </template>
  </WorkshopPage>
</template>

<script setup lang="ts">
import WorkshopPage from "@/components/workshops/WorkshopPage.vue";

const canonicalUrl =
  "https://femmefusion.se/workshops/musikaldans-11-januari-2026";

useSeoMeta({
  title: "Musikaldans – Dancing Through Life | Femme Fusion",
  description:
    "Workshop i musikaldans där vi lär oss Dancing Through Life från Wicked. Nybörjarvänlig klass på Skylten i Linköping.",
  ogTitle: "Musikaldans – Dancing Through Life | Femme Fusion",
  ogDescription:
    "Nybörjarvänlig musikaldans-workshop med koreografi från Wicked på Skylten i Linköping.",
  ogUrl: canonicalUrl,
  ogImage: "https://femmefusion.se/images/meta.jpg",
  twitterCard: "summary_large_image"
});

useHead({ link: [{ rel: "canonical", href: canonicalUrl }] });
</script>
