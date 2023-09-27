<template>
  <div class="book content">
    <h1>Shower</h1>
    <p>
      Vi erbjuder färdiga showpaket med olika teman att välja mellan. Hittar du inte den ultimata matchningen? Inga
      problem! Vi kan alltid anpassa efter just dina önskemål.
    </p>
    <div class="book__offers">
      <ImageText imageName="ff-07.jpg" alt="Burlesque Fusion" heading="Burlesque Fusion" :name="null"
        text=" " :right="false" />
      <ImageText imageName="ff-06.jpg" alt="Great Gatsby" heading="Great Gatsby" :name="null"
        text=" " :right="false" />
      <ImageText imageName="kris-02.jpg" alt="Julshow" heading="Julshow" :name="null"
        text=" " :right="false" />
    </div>
    <router-link to="/contact" class="button button--large">Kontakta oss för information och bokning!</router-link>
  </div>
</template>

<script setup lang="ts">
import ImageText from '../../components/imagetext/ImageText.vue';


</script>
