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
          Gruppen startade 2023 och består av erfarna artister med bakgrund inom flera dansstilar och showformat.
          Vi skapar <strong>skräddarsydda nummer</strong> som passar rummet, publiken och ert tema. Med genomtänkt
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
          <strong>programförslag</strong>, tempo och placering i körschemat, och samarbetar smidigt med DJ, konferencier
          och teknik.
        </p>
        <p>
          Behöver ni även <NuxtLink to="/bokning/dansklass" class="link">en dansklass</NuxtLink> för
          gruppen?
          Vi håller korta <strong>prova på-pass</strong> som värmer upp publiken och skapar energi i rummet.
        </p>
      </div>
    </section>

    <section id="medlemmar">
      <h2>Medlemmar</h2>
      <div class="about__members">
        <figure v-for="m in members" :key="m.name" class="about__member" :class="m.align">
          <NuxtImg :src="m.src" :alt="`Porträtt av ${m.name}, dansare i Femme Fusion`" class="image"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 520px" format="webp" loading="lazy" />
          <figcaption>
            <strong>{{ m.name }}</strong>
            <span class="about__role">{{ m.role }}</span>
          </figcaption>
        </figure>
      </div>
    </section>
    <div class="about__cta">
      <NuxtLink to="/bokning" class="button button--cta">Skicka förfrågan</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from '@/utils';
import { applyPageSeo } from '~/services/seo-service';

onMounted(() => {
  useUtils().scrollToMain();
});

const members = [
  { name: "Ella", role: "Dans", src: "/images/profile/ella.jpg", align: "about__member--left" },
  { name: "Hanna", role: "Dans & sång", src: "/images/profile/hanna.jpg", align: "about__member--left" },
  { name: "Kristina", role: "Dans & sång", src: "/images/profile/kristina.jpg", align: "" },
  { name: "Sandra", role: "Dans", src: "/images/profile/sandra.jpg", align: "" },
];

applyPageSeo({
  title: "Femme Fusion - Om oss | Showgrupp från Linköping för event",
  description:
    "Femme Fusion är en professionell showgrupp från Linköping. Vi levererar dynamiska shower med dans, sång och stark scennärvaro för företagsevent, bröllop, möhippor och privata fester i hela Sverige.",
  path: "/om-oss",

  breadcrumbs: [
    { name: "Om oss", path: "/om-oss" },
  ],

  ogTitle: "Femme Fusion - Om oss",
  ogDescription:
    "Professionell showgrupp med dans, sång och stark scennärvaro. Vi uppträder i hela Sverige.",

  twitterTitle: "Femme Fusion - Om oss",
  twitterDescription:
    "Lär känna showgruppen från Linköping som levererar dans, glamour och scenglans för event i hela Sverige.",

  faqKey: "faq-om-oss",
  faq: [
    {
      question: "Vad erbjuder ni?",
      answer:
        "Vi erbjuder scenunderhållning med dans, sång och showinslag för event. Vi håller även dansklasser och workshops.",
    },
    {
      question: "Var uppträder ni?",
      answer:
        "Vi utgår från Linköping men uppträder på event och scener i hela Sverige.",
    },
    {
      question: "Hur lång är en show?",
      answer:
        "Upplägget anpassas efter ert event. Det kan vara ett kort inslag på några minuter eller flera nummer under kvällen.",
    },
    {
      question: "Vad behöver ni på plats?",
      answer:
        "Fri golvyta och fungerande ljud. Omklädningsmöjlighet är uppskattat. Exakta behov specificeras i bokningsbekräftelsen.",
    },
    {
      question: "Hur bokar vi?",
      answer:
        "Skicka en förfrågan via kontaktformuläret och beskriv datum, plats, publik och önskat upplägg så återkommer vi med förslag och offert.",
    },
  ],
});
</script>
