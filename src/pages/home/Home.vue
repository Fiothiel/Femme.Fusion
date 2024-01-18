<template>
  <div class="home content content--home">
    <section>
      <h1>Femme Fusion</h1>
      <p>
        En showgrupp som erbjuder dans och sång med en tydlig inspiration av burlesque, en konstform som kombinerar
        sensualitet, humor och extravagans.

        Låt Femme Fusion skapa magi på ditt evenemang - <router-link to="/contact">boka nu</router-link> för en unik och minnesvärd upplevelse!
      </p>

    </section>
    <section class="home__twitch">
      <h2>Live @ Twitch</h2>
      <div>Varje tisdag 17:30-18:30 streamar vi live från våra träningar</div>
      <a href="https://www.twitch.tv/femmefusion" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M5.7 0L1.4 10.985V55.88h15.284V64h8.597l8.12-8.12h12.418l16.716-16.716V0H5.7zm51.104 36.3L47.25 45.85H31.967l-8.12 8.12v-8.12H10.952V5.73h45.85V36.3zM47.25 16.716v16.716h-5.73V16.716h5.73zm-15.284 0v16.716h-5.73V16.716h5.73z" fill="#ffffff" fill-rule="evenodd"/></svg>
        <span>twitch.tv/femmefusion</span>
      </a>
      
    </section>
    <Image 
      alt="Louboutinsko i svart lack mot en parkeringshusvägg"
      :fullWidth="true"
      :fallback="getImagePath('loboutin-1000.jpg')"
      :sizes="null"
      :srcset="`
        ${getImagePath('loboutin-2500.jpg')}, 2500w,
        ${getImagePath('loboutin-1000.jpg')}, 1000w,
        ${getImagePath('loboutin-500.jpg')}, 500w`" />
    <section class="home__testamonials">
      <h2>Sagt om oss</h2>
      <Testamonials />
    </section>
  </div>
</template>

<script setup lang="ts">
import Image from '../../components/image/Image.vue';
import Testamonials from '../../components/testamonials/Testamonials.vue';
import { useUtils } from '../../utils';
const { getImagePath } = useUtils();

</script>
