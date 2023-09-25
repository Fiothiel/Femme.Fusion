<template>
  <div class="home content">
    <section>
      <h1>Femme Fusion</h1>
      <p>
        En showgrupp som erbjuder dans och sång med en tydlig inspiration av burlesque, en konstform som kombinerar
        sensualitet, humor och extravagans.

        Låt Femme Fusion skapa magi på ditt evenemang - <router-link to="/contact">boka nu</router-link> för en unik och minnesvärd upplevelse!
      </p>

    </section>
    <Image name="louboutin.jpg" alt="Louboutinsko i svart lack mot en parkeringshusvägg"
      :fullWidth="true" />
    <section v-if="false">
      <h1>Sagt om oss</h1>
      <Testamonials />
    </section>
  </div>
</template>

<script setup lang="ts">
import Image from '../../components/image/Image.vue';
import Testamonials from '../../components/testamonials/Testamonials.vue';

</script>
