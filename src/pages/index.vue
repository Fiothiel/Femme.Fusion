<template>
  <div class="home content content--home content--center">
    <nav>
      <a @click="scrollTo('sizzle-reel')">Sizzle reel</a>
      <a @click="scrollTo('testimonials')">Sagt om oss</a>
      <RouterLink to="/workshop-gratis">Gratis dans</RouterLink>
    </nav>
    <section class="home__section home__section--narrow">
      <h1>Femme Fusion</h1>
      <p>
        Femme Fusion är en showgrupp som erbjuder underhållning, sång och dans
        för fester, middagar och event. Artisterna levererar shower där en
        variation av olika dansstilar möter inspiration av burlesque. Låt Femme
        Fusion skapa magi på ditt evenemang -
        <router-link to="/kontakt">boka nu</router-link> för en unik och
        minnesvärd upplevelse!
      </p>
    </section>
    <section id="sizzle-reel" class="home__section home__section--video">
      <video controls autoplay muted poster="/images/trailer-thumbnail.png">
        <source src="/trailer.mp4" type="video/mp4" />
      </video>
    </section>
    <section class="home__testamonials home__section home__section--red">
      <h2 id="testimonials">Sagt om oss</h2>
      <Testamonials />
    </section>
    <NuxtImg
      src="/images/loboutin.jpg"
      sizes="xl:2500px md:1500px 100vw"
      alt="Louboutinsko i svart lack mot en parkeringshusvägg"
    />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/image/Image.vue";
import Testamonials from "~/components/testamonials/Testamonials.vue";

definePageMeta({
  displayInMenu: true,
  menuLabel: 'Hem',
  order: 0
})

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>
