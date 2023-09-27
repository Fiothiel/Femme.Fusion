<template>
  <div class="about">
    <h1>Vi i Femme Fusion</h1>
    <div class="about__members">
      <ImageText imageName="kris-01.jpg" alt="Kristina" name="Kristina" :text="null" :heading="null" :right="false" />
      <ImageText imageName="sandra-01.jpg" alt="Sandra" name="Sandra" :text="null" :heading="null" :right="false" />
      <ImageText imageName="hanna-01.jpg" alt="Hanna" name="Hanna" :text="null" :heading="null" :right="true" />
      <ImageText imageName="ella-01.jpg" alt="Ella" name="Ella" :text="null" :heading="null" :right="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageText from '../../components/imagetext/ImageText.vue';

// Todo: List<IMember> to loop out

</script>
