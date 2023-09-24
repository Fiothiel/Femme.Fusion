<template>
  <div class="about">
    <h1>Vi i Femme Fusion</h1>
    <div class="about__members">
      <ImageText path="../../src/assets/images/kris-01.jpg" alt="Kristina" name="Kristina" :text="null" :heading="null" :right="false" />
      <ImageText path="../../src/assets/images/sandra-01.jpg" alt="Sandra" name="Sandra" :text="null" :heading="null" :right="false" />
      <ImageText path="../../src/assets/images/hanna-01.jpg" alt="Hanna" name="Hanna" :text="null" :heading="null" :right="true" />
      <ImageText path="../../src/assets/images/ella-01.jpg" alt="Ella" name="Ella" :text="null" :heading="null" :right="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageText from '../../components/imagetext/ImageText.vue';

// Todo: List<IMember> to loop out

</script>
