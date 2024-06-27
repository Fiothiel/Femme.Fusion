<template>
  <div class="book content">
    <h1>Shower</h1>
    <p>
      Vi erbjuder färdiga showpaket med olika teman att välja mellan. Hittar du inte den ultimata matchningen? Inga
      problem! Vi kan alltid anpassa efter just dina önskemål. Kontakta oss för information och bokning.
    </p>
    <div class="book__offers">
      <ImageText imageName="burlesque-fusion-900.jpg" alt="Burlesque Fusion" heading="Burlesque Fusion" :name="null"
        text=" " :right="false" />
      <ImageText imageName="great-gatsby-900.jpg" alt="Great Gatsby" heading="Great Gatsby" :name="null"
        text=" " :right="false" />
      <!-- <ImageText imageName="christmas-900.jpg" alt="Jingle Bell Burlesque" heading="Jingle Bell Burlesque" :name="null"
        text=" " :right="false" /> -->
    </div>
    <router-link to="/contact" class="button button--large">Kontakta oss</router-link>
  </div>
</template>

<script setup lang="ts">
import ImageText from '../../components/imagetext/ImageText.vue';


</script>
