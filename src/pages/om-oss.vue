<template>
  <div class="about content">
    <section class="section section--airy">
      <div class="section__content">
        <h1 class="about__title">Femme Fusion - showgrupp i Linköping</h1>
        <p class="about__intro">
          Vi är <strong>Femme Fusion</strong>, en professionell showgrupp som levererar dynamiska shower med dans, sång
          och stark scennärvaro.
          Vi utgår från Linköping i Östergötland, men reser dit bokningarna tar oss. Med en mix av energi, uttryck och
          glamour skapar vi minnesvärd underhållning för företagsevent, bröllop, möhippor och privata fester.
        </p>
      </div>
    </section>

    <section class="section section--airy section--darkred">
      <div class="section__content">
        <h2>Vad vi levererar</h2>
        <p>
          Gruppen består av erfarna artister med bakgrund inom flera dansstilar och showformat.
          Vi skapar <strong>skräddarsydda shower</strong> som passar rummet, publiken och ert tema. Med genomtänkt
          kostym,
          musikval och scenisk närvaro bygger vi en helhetsupplevelse som känns både exklusiv och lekfull.
        </p>
        <ul class="about__bullets">
          <li><strong>Flexibla upplägg.</strong> Fristående nummer eller sammanhållen show.</li>
          <li><strong>Passar många sammanhang.</strong> Företagsfest, gala, after work, bröllop, privata events.</li>
          <li><strong>Fusion av stilar.</strong> Alltid stilfullt och underhållande.</li>
        </ul>
      </div>
    </section>

    <section class="section section--airy">
      <div class="section__content">
        <h2>Varför boka Femme Fusion?</h2>
        <p>
          Ni får <strong>pålitliga artister</strong> som kan scen, publik och logistik. Vi hjälper gärna med
          <strong>programförslag</strong>, tempo och placering i körschemat, och samarbetar smidigt med konferencier
          och teknik.
        </p>
        <p>
          Behöver ni även <NuxtLink to="/dansklass" class="link">en dansklass</NuxtLink> för
          gruppen?
          Vi håller korta <strong>prova på-pass</strong> som värmer upp publiken och skapar energi i rummet.
        </p>
      </div>
    </section>

    <section id="grundare" class="section section--airy section--darkred">
      <div class="section__content">
        <h2>Grundare</h2>
        <p>
          Femme Fusion grundades 2023 av fyra artister med en gemensam vision om att skapa professionell underhållning
          med dans, sång och stark scennärvaro. Som grundare sätter vi tonen, kvaliteten och uttrycket i det vi gör.
        </p>
        <div class="about__members">
          <figure v-for="m in founders" :key="m.name" class="about__member about__member--founder">
            <NuxtImg
              :src="m.src"
              :alt="`Porträtt av ${m.name}, grundare i Femme Fusion`"
              class="image"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              format="webp"
              loading="lazy"
            />
            <figcaption>
              <strong>{{ m.name }}</strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="showartister" class="section section--airy">
      <div class="section__content">
        <h2>Showartister i Femme Fusion</h2>
        <p>
          Femme Fusion består av flera showartister som har mångsidiga och varierade bakgrunder inom dans, sång och
          underhållning. Det gör att vi kan skapa dynamiska och minnesvärda nummer där showens uttryck och omfattning
          anpassas efter event, publik och scen.
        </p>
        <div class="about__members">
          <figure v-for="m in showArtists" :key="m.name" class="about__member about__member--compact">
            <NuxtImg
              :src="m.src"
              :alt="`Porträtt av ${m.name}, showartist i Femme Fusion`"
              class="image"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              format="webp"
              loading="lazy"
            />
            <figcaption>
              <strong>{{ m.name }}</strong>
              <span class="about__role">{{ m.role }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <div class="about__cta">
      <NuxtLink to="/kontakt" class="button button--cta">Skicka förfrågan</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from '@/utils';
import { applyPageSeo } from '~/services/seo-service';

onMounted(() => {
  useUtils().scrollToMain();
});

const founders = [
  { name: "Ella", src: "/images/profile/grundare-ella.jpg" },
  { name: "Hanna", src: "/images/profile/grundare-hanna.jpg" },
  { name: "Kristina", src: "/images/profile/grundare-kristina.jpg" },
  { name: "Sandra", src: "/images/profile/grundare-sandra.jpg" },
];

const showArtists = [
  { name: "Ella", role: "Dans", src: "/images/profile/artist-ella.jpg" },
  { name: "Hanna", role: "Dans & sång", src: "/images/profile/artist-hanna.jpg" },
  { name: "Kajsa", role: "Dans", src: "/images/profile/artist-kajsa.jpg" },
  { name: "Kristina", role: "Dans & sång", src: "/images/profile/artist-kristina.jpg" },
  { name: "Natalie", role: "Dans", src: "/images/profile/artist-natalie.jpg" },
  { name: "Sandra", role: "Dans", src: "/images/profile/artist-sandra.jpg" },
];

applyPageSeo({
  title: "Femme Fusion - Om oss | Showgrupp från Linköping för event",
  description:
    "Femme Fusion är en professionell showgrupp från Linköping. Vi skapar skräddarsydda shower med dans, sång och stark scennärvaro för företagsevent, bröllop, möhippor och privata fester i hela Sverige.",
  path: "/om-oss",

  breadcrumbs: [
    { name: "Om oss", path: "/om-oss" },
  ],

  ogTitle: "Femme Fusion - Om oss",
  ogDescription:
    "Lär känna Femme Fusion, grundarna och showartisterna bakom våra skräddarsydda shower för event i hela Sverige.",

  twitterTitle: "Femme Fusion - Om oss",
  twitterDescription:
    "Lär känna showgruppen från Linköping, våra grundare och showartister samt hur vi skapar skräddarsydd underhållning för event.",

  faqKey: "faq-om-oss",
  faq: [
    {
      question: "Vad erbjuder ni?",
      answer:
        "Vi erbjuder skräddarsydd scenunderhållning med dans, sång och showinslag för företagsevent, bröllop, möhippor och privata fester. Vi erbjuder också prova på-pass och dansklasser för grupper.",
    },
    {
      question: "Var uppträder ni?",
      answer:
        "Vi utgår från Linköping i Östergötland men reser dit bokningarna tar oss och uppträder på event i hela Sverige.",
    },
    {
      question: "Hur lång är en show?",
      answer:
        "Upplägget anpassas efter ert event och kan bestå av fristående nummer eller en sammanhållen show. Längd och omfattning planeras utifrån publik, tema och körschema.",
    },
    {
      question: "Vad behöver ni på plats?",
      answer:
        "Behoven varierar beroende på upplägg, lokal och typ av show. Vi samarbetar smidigt kring programförslag, tempo, placering i körschema och praktiska förutsättningar inför bokningen.",
    },
    {
      question: "Hur bokar vi?",
      answer:
        "Skicka en förfrågan via kontaktformuläret och beskriv datum, plats, publik och önskat upplägg så återkommer vi med förslag och offert.",
    },
    {
      question: "Vilka är Femme Fusion?",
      answer:
        "Femme Fusion grundades 2023 av fyra artister och består av flera showartister med varierade bakgrunder inom dans, sång och underhållning.",
    },
    {
      question: "Hur anpassar ni era shower?",
      answer:
        "Vi skapar skräddarsydda shower som anpassas efter rum, publik, tema och körschema. Det kan vara fristående nummer eller en sammanhållen show.",
    },
    {
      question: "Varför boka Femme Fusion?",
      answer:
        "Ni får pålitliga artister som kan scen, publik och logistik. Vi hjälper gärna till med programförslag och samarbetar smidigt med konferencier och teknik.",
    },
    {
      question: "Var utgår ni från?",
      answer:
        "Vi utgår från Linköping i Östergötland men reser dit bokningarna tar oss och uppträder i hela Sverige.",
    },
  ],
});
</script>
