<template>
  <div class="about content">
    <section class="section section--airy">
      <div class="section__content">
        <h1 class="about__title">Femme Fusion - showgrupp i Linköping</h1>

        <p class="about__intro">
          Vi är <strong>Femme Fusion</strong>, en professionell showgrupp som levererar dynamiska shower med dans,
          sång och stark scennärvaro. Vi utgår från Linköping i Östergötland, men reser dit bokningarna tar oss.
          Med en mix av energi, uttryck och glamour skapar vi minnesvärd underhållning för företagsevent, bröllop,
          möhippor och privata fester.
        </p>
      </div>
    </section>

    <section class="section section--airy section--darkred">
      <div class="section__content">
        <h2>Vad vi levererar</h2>

        <p>
          Våra shower kombinerar <strong>dans, sång och scenunderhållning</strong> med variation i både dansstil,
          musik och scenkostym. Vi blandar glamour, energi, sensualitet och humor och hämtar ofta inspiration från
          burlesque. Resultatet är en dynamisk show där uttrycket kan anpassas efter eventet, publiken och rummet.
        </p>

        <ul class="about__bullets">
          <li><strong>Flexibla upplägg.</strong> Fristående nummer eller en sammanhållen show.</li>
          <li><strong>Variation på scen.</strong> Olika dansstilar, musikstilar, scenkostymer och uttryck.</li>
          <li><strong>Anpassat efter ert event.</strong> Från företagsfest och gala till bröllop och privat fest.</li>
        </ul>
      </div>
    </section>

    <section class="section section--airy">
      <div class="section__content">
        <h2>Varför boka Femme Fusion?</h2>

        <p>
          Ni får <strong>professionella och pålitliga artister</strong> som är vana vid scen, publik och de praktiska
          delarna runt ett framträdande. Vi hjälper gärna till med programförslag, tempo och placering i körschemat
          och samarbetar smidigt med konferencier och teknik.
        </p>

        <p>
          Behöver ni även
          <NuxtLink to="/dansklass" class="link">en dansklass</NuxtLink>
          för gruppen? Vi håller <strong>prova på-pass</strong> där deltagarna får testa en av våra dansstilar
          tillsammans med oss.
        </p>
      </div>
    </section>

    <section id="medlemmar" class="section section--airy section--darkred">
      <div class="section__content">
        <h2>Medlemmar</h2>

        <p>
          Femme Fusion består av artister med erfarenhet inom dans, sång och underhållning. Våra olika bakgrunder
          och styrkor gör att vi kan skapa dynamiska shower med variation i både dansstil, musik och scenuttryck.
        </p>

        <div class="about__members">
          <figure v-for="m in members" :key="m.name" class="about__member about__member--compact">
            <NuxtImg :src="m.src" :alt="`Porträtt av ${m.name}, medlem i Femme Fusion`" class="image"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" format="webp" loading="lazy" />

            <figcaption>
              <strong>{{ m.name }}</strong>
              <span class="about__role">{{ m.role }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="historia" class="section section--airy">
      <div class="section__content">
        <h2>Så startade Femme Fusion</h2>

        <p>
          Femme Fusion grundades 2023 av Ella, Hanna, Kristina och Sandra, med en gemensam vision om att skapa
          professionell scenunderhållning där dans, sång och olika sceniska uttryck möts. Sedan dess har gruppen
          utvecklats med fler artister, nya shower och en stor variation av uppdrag.
        </p>
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

const members = [
  { name: 'Ella', role: 'Dans', src: '/images/profile/artist-ella.jpg' },
  { name: 'Hanna', role: 'Dans & sång', src: '/images/profile/artist-hanna.jpg' },
  { name: 'Kajsa', role: 'Dans', src: '/images/profile/artist-kajsa.jpg' },
  { name: 'Kristina', role: 'Dans & sång', src: '/images/profile/artist-kristina.jpg' },
  { name: 'Natalie', role: 'Dans', src: '/images/profile/artist-natalie.jpg' },
];

applyPageSeo({
  title: 'Femme Fusion - Om oss | Showgrupp från Linköping för event',
  description:
    'Femme Fusion är en professionell showgrupp från Linköping. Vi skapar skräddarsydda shower med dans, sång och stark scennärvaro för företagsevent, bröllop, möhippor och privata fester i hela Sverige.',
  path: '/om-oss',
  breadcrumbs: [
    { name: 'Om oss', path: '/om-oss' },
  ],
  ogTitle: 'Femme Fusion - Om oss',
  ogDescription:
    'Lär känna Femme Fusion och artisterna bakom våra shower med dans, sång och scenunderhållning för event i hela Sverige.',
  twitterTitle: 'Femme Fusion - Om oss',
  twitterDescription:
    'Lär känna Femme Fusion, vår historia och artisterna bakom våra shower med dans, sång och scenunderhållning.',

  faqKey: 'faq-om-oss',
  faq: [
    {
      question: 'Vad erbjuder ni?',
      answer:
        'Vi erbjuder skräddarsydd scenunderhållning med dans, sång och showinslag för företagsevent, bröllop, möhippor och privata fester. Vi erbjuder också prova på-pass och dansklasser för grupper.',
    },
    {
      question: 'Var uppträder ni?',
      answer:
        'Vi utgår från Linköping i Östergötland men reser dit bokningarna tar oss och uppträder på event i hela Sverige.',
    },
    {
      question: 'Hur lång är en show?',
      answer:
        'Upplägget anpassas efter ert event och kan bestå av fristående nummer eller en sammanhållen show. Längd och omfattning planeras utifrån publik, tema och körschema.',
    },
    {
      question: 'Vad behöver ni på plats?',
      answer:
        'Behoven varierar beroende på upplägg, lokal och typ av show. Vi samarbetar kring teknik, körschema och andra praktiska förutsättningar inför bokningen.',
    },
    {
      question: 'Hur bokar vi?',
      answer:
        'Skicka en förfrågan via kontaktformuläret och beskriv datum, plats, publik och önskat upplägg så återkommer vi med förslag och offert.',
    },
    {
      question: 'Vilka är Femme Fusion?',
      answer:
        'Femme Fusion är en professionell showgrupp från Linköping med artister som har erfarenhet inom dans, sång och underhållning. Gruppen grundades 2023 och uppträder på event runt om i Sverige.',
    },
    {
      question: 'Hur anpassar ni era shower?',
      answer:
        'Vi anpassar showens upplägg och uttryck efter event, publik och scen. Det kan vara fristående nummer eller en sammanhållen show med variation i dans, musik, scenkostym och uttryck.',
    },
    {
      question: 'Varför boka Femme Fusion?',
      answer:
        'Ni får professionella och pålitliga artister som är vana vid scen, publik och logistik. Vi hjälper gärna till med programförslag och samarbetar smidigt med konferencier och teknik.',
    },
  ],
});
</script>