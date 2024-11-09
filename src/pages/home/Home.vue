<template>
  <div class="home content content--home">
    <nav>
      <a @click="scrollTo('testimonials')">Sagt om oss</a>
    </nav>
    <section class="home__section home__section--narrow">
      <h1>Femme Fusion</h1>
      <p>
        En showgrupp som erbjuder dans och sång med en tydlig inspiration av
        burlesque, en konstform som kombinerar sensualitet, humor och
        extravagans. Låt Femme Fusion skapa magi på ditt evenemang -
        <router-link to="/contact">boka nu</router-link> för en unik och
        minnesvärd upplevelse!
      </p>
    </section>
    <section class="home__section home__section--video">     
      <video controls autoplay muted poster="/trailer-thumb.png">
        <source src="/trailer.mp4" type="video/mp4">
      </video>
    </section>
    <section class="home__testamonials home__section home__section--red">
      <h2 id="testimonials">Sagt om oss</h2>
      <Testamonials />
    </section>
    <Image
      alt="Louboutinsko i svart lack mot en parkeringshusvägg"
      :fullWidth="true"
      :fallback="getImagePath('loboutin-1000.jpg')"
      :sizes="null"
      :srcset="`
        ${getImagePath('loboutin-2500.jpg')}, 2500w,
        ${getImagePath('loboutin-1000.jpg')}, 1000w,
        ${getImagePath('loboutin-500.jpg')}, 500w`"
    />
  </div>
</template>

<script setup lang="ts">
import Image from "../../components/image/Image.vue";
import Testamonials from "../../components/testamonials/Testamonials.vue";
import { useUtils } from "../../utils";
const { getImagePath } = useUtils();

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

</script>
