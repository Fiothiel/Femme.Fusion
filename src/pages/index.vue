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
        Femme Fusion är en showgrupp som erbjuder underhållning, sång och dans för fester, middagar och event. Artisterna levererar shower där en variation av olika dansstilar möter inspiration av burlesque. Låt Femme Fusion skapa magi på ditt evenemang -
        <router-link to="/contact">boka nu</router-link> för en unik och
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
<!--     <Image
      alt="Louboutinsko i svart lack mot en parkeringshusvägg"
      :fullWidth="true"
      :fallback="getImagePath('loboutin-1000.jpg')"
      :sizes="null"
      :srcset="`
        ${getImagePath('loboutin-2500.jpg')}, 2500w,
        ${getImagePath('loboutin-1000.jpg')}, 1000w,
        ${getImagePath('loboutin-500.jpg')}, 500w`"
    /> -->
    <NuxtImage
      src="/images/loboutin-2500.jpg"
      alt="Louboutinsko i svart lack mot en parkeringshusvägg"
      widths="[500,1000,2500]"
      :sizes="null"
      full-width
      placeholder="blur"
      blurSize="20"
    />
  </div>
</template>

<script setup lang="ts">
import Image from "~/components/image/Image.vue";
import Testamonials from "~/components/testamonials/Testamonials.vue";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

</script>
