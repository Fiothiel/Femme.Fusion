<template>
  <div class="about content">    
    <section class="section section--airy">
      <div class="section__content">
        <h1 class="about__title">Femme Fusion - <span>burlesque-inspirerad showgrupp i Linköping</span></h1>
        <p class="about__intro">
          Vi är <strong>Femme Fusion</strong>, en professionell showgrupp som levererar dansshow med burlesque-känsla.
          Basen är Linköping i Östergötland, men vi reser dit bokningarna tar oss. Vår mix av sensualitet, humor och
          glamour skapar
          minnesvärd underhållning för företagsevent, bröllop, möhippor och privata fester.
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
          <li><strong>Dansfokuserad neoburlesque.</strong> Fusion av stilar. Alltid stilfullt och underhållande.</li>
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
          Behöver ni även <NuxtLink to="/bokning/dansklass" class="link">dansklass eller workshop</NuxtLink> för
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

const members = [
  { name: "Ella", role: "Dans", src: "/images/profile/ella.jpg", align: "about__member--left" },
  { name: "Hanna", role: "Dans & sång", src: "/images/profile/hanna.jpg", align: "about__member--left" },
  { name: "Kristina", role: "Dans & sång", src: "/images/profile/kristina.jpg", align: "" },
  { name: "Sandra", role: "Dans", src: "/images/profile/sandra.jpg", align: "" },
];

const canonicalUrl = "https://femmefusion.se/om-oss"

useSeoMeta({
  title: 'Femme Fusion - Om oss | Burlesque-inspirerad showgrupp i Linköping',
  description:
    'Femme Fusion är en professionell showgrupp från Linköping. Dansshow med burlesque-känsla för företagsevent, bröllop, möhippor och privata fester.',
  ogTitle: 'Femme Fusion - Om oss',
  ogDescription:
    'Professionell showgrupp med dansfokuserad neoburlesque. Vi uppträder i Linköping, Östergötland och hela Sverige.',
  ogUrl: canonicalUrl,
  ogImage: 'https://femmefusion.se/images/meta.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Femme Fusion - Om oss',
  twitterDescription:
    'Lär känna showgruppen från Linköping som levererar dans, glamour och scenglans för event i hela Sverige.',
  twitterImage: 'https://femmefusion.se/images/meta.jpg'
});

useHead({
  link: [{ rel: "canonical", href: canonicalUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://femmefusion.se/" },
          { "@type": "ListItem", position: 2, name: "Om oss", item: canonicalUrl },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Vad erbjuder ni?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Dansnummer och burlesque-inspirerade shownummer för event. Vi erbjuder även dansklasser och håller i workshops.",
            },
          },
          {
            "@type": "Question",
            name: "Var uppträder ni?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Främst i Linköping och Östergötland. Vi reser gärna i hela Sverige.",
            },
          },
          {
            "@type": "Question",
            name: "Hur lång är en show?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vi är väldigt anpassningsbara. Vi har kört korta shower à 2:30 minuter till helkvällar med 3 x 20 minuter. Vi anpassar oss efter vad ni behöver!",
            },
          },
          {
            "@type": "Question",
            name: "Vad behöver ni på plats?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fri golvyta, fungerande ljud och mikrofon. Omklädningsmöjlighet och mer än en trådlös mikrofon är bra. Specificeras i bokningsbekräftelsen.",
            },
          },
          {
            "@type": "Question",
            name: "Hur bokar vi?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Använd bokningsformuläret eller kontakta oss via mail eller våra sociala medier. Beskriv datum, plats, publik och önskat upplägg.",
            },
          },
        ],
      }),
    },
  ],
});
</script>
