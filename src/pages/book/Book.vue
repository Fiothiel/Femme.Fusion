<template>
  <div class="book content">
    <h1>Våra erbjudanden</h1>
    <p>
      Vi erbjuder färdiga showpaket med olika teman att välja mellan. Hittar du inte den ultimata matchningen? Inga
      problem! Vi kan alltid anpassa efter just dina önskemål.
    </p>
    <div class="book__offers">
      <ImageText path="../../src/assets/images/ff-07.jpg" alt="Cattt catt cattty" heading="Burlesque Fusion"
        text=" " />
      <ImageText path="../../src/assets/images/ff-06.jpg" alt="Purrr" heading="Great Gatsby"
        text=" " />
      <ImageText path="../../src/assets/images/kris-02.jpg" alt="3 am zoomies" heading="Julshow"
        text=" " />
    </div>
    <router-link to="/contact" class="button button--large">Kontakta oss för information och bokning!</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import ImageText from '../../components/imagetext/ImageText.vue';


</script>
