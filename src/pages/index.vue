<template>
  <div class="content home">
    <section class="section section--airy">
      <div class="section__content">
        <h1>Femme Fusion</h1>
        <p>
          Femme Fusion är en showgrupp som erbjuder underhållning, sång och dans
          för fester, middagar och event. Artisterna levererar shower där en
          variation av olika dansstilar möter inspiration av burlesque. Låt Femme
          Fusion skapa magi på ditt evenemang - för en unik och
          minnesvärd upplevelse!
          <NuxtLink to="/kontakt" class="button button--cta">
            Boka nu
          </NuxtLink>
        </p>
      </div>
    </section>
    <section class="section" id="sizzle-reel">
      <video class="home__video" controls autoplay muted poster="/images/trailer-thumbnail.png">
        <source src="/trailer.mp4" type="video/mp4" />
      </video>
    </section>
    <section class="section section--wide section--red section--airy" id="testimonials">
      <div class="section__content">
        <Testimonials heading="Sagt om oss" :testimonials="testimonials" />
      </div>
    </section>
    <NuxtImg src="/images/loboutin.jpg" sizes="xl:2500px md:1500px 100vw"
      alt="Louboutinsko i svart lack mot en parkeringshusvägg" class="image image--full-width" />
  </div>
</template>

<script setup lang="ts">
import { useTestimonials } from '~/services/testimonials-service';

const testimonials = useTestimonials().getRandom(2);
</script>
