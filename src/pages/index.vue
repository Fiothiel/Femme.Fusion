<template>
  <div class="content home">
    <section class="section section--airy">
      <div class="section__content">
        <h1>Femme Fusion</h1>
        <p>
          Femme Fusion är en professionell showgrupp från Linköping som erbjuder skräddarsydd underhållning med dans,
          sång och stark scennärvaro. Vi lyfter allt från företagsevent till privata fester och shower i hela Sverige.

        </p>
        <p>
          Utöver våra uppträdanden har vi öppna dansklasser, kurser och bokningsbara upplägg för företag och privata
          sammanhang. Oavsett om det gäller en dansklass för möhippa eller en energifylld kick-off guidar vi er till
          rätt nivå och känsla.
          <NuxtLink to="/kontakt" class="button button--cta">
            Boka nu
          </NuxtLink>
        </p>
      </div>
    </section>
    <section class="section" id="sizzle-reel">
      <video class="home__video" controls autoplay muted poster="/images/sizzle-reel-thumbnail.png">
        <source src="/femme-fusion-sizzle-reel-2026.mp4" type="video/mp4" />
      </video>
    </section>
    <section class="section section--wide section--red section--airy" id="testimonials">
      <div class="section__content">
        <Testimonials heading="Sagt om oss" :testimonials="testimonials" />
      </div>
    </section>
    <section class="section section--airy" id="dance-with-femme-fusion">
      <div class="section__content">
        <h2 id="dance-with-femme-fusion">Stå på scenen med oss</h2>


        <p>
          Vill du dansa på scen, ta plats i rampljuset och vara en del av våra shower?
          Vi söker dig som vill showa tillsammans med Femme Fusion.
        </p>

        <a class="link" href="/sta-pa-scenen">
          Stå på scenen med oss
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { TestimonialCategory } from '~/constants';
import { applyPageSeo } from '~/services/seo-service';
import { useTestimonials } from '~/services/testimonials-service';

const { getRandom } = useTestimonials();

const testimonials = [
  ...getRandom(1, TestimonialCategory.DanceClass),
  ...getRandom(1, TestimonialCategory.Show),
];

applyPageSeo({
  title: "Femme Fusion | Show med dans och sång för event i hela Sverige",
  description:
    "Femme Fusion är en professionell showgrupp från Linköping som skapar lyxiga, dynamiska sceninslag med dans, sång och scenuttryck för företagsevent och privata fester i hela Sverige. Vi erbjuder också öppna dansklasser, workshops och kurser.",
  path: "/",
  ogTitle: "Femme Fusion | Show för event",
  ogDescription:
    "Lyxiga sceninslag med dans och sång för event i hela Sverige. Öppna dansklasser, workshops och kurser finns också.",
  twitterTitle: "Femme Fusion",
  twitterDescription:
    "Show med dans och sång för företagsevent och privata fester i hela Sverige. Öppna dansklasser, workshops och kurser.",
});
</script>
