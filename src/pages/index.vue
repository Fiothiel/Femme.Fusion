<template>
  <div class="content home">
    <section class="section section--airy">
      <div class="section__content">
        <h1>Femme Fusion</h1>
        <p>
          Femme Fusion är en showgrupp som erbjuder underhållning, sång och dans
          för fester, middagar och event. Deras shower är dynamiska och varierade, med flera dansstilar, tydliga uttryck
          och stark scennärvaro, anpassade för att passa just ert event. Låt Femme
          Fusion skapa magi på ditt evenemang - för en unik och
          minnesvärd upplevelse!
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
        <h2 id="dance-with-femme-fusion">Dansa med oss?</h2>
        <p>Text text text</p>
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
    "Femme Fusion är en professionell showgrupp med dans, sång och stark scennärvaro. Vi skapar dynamiska, varierade shower för företagsevent, bröllop, middagar, möhippor och privata fester i Linköping och i hela Sverige.",
  path: "/",
  ogTitle: "Femme Fusion | Show för event",
  ogDescription:
    "Dynamiska shower med dans och sång. Kundanpassat för event i hela Sverige.",
  twitterTitle: "Femme Fusion",
  twitterDescription:
    "Show med dans och sång för företagsevent, bröllop och fester i hela Sverige.",
});
</script>
