<template>
  <div class="about">
    <h1>Vi i Femme Fusion</h1>
    <div class="about__members">
      <ImageText imageName="profile-kris-500.jpg" alt="Kristina" name="Kristina" :text="null" :heading="null" :right="false" />
      <ImageText imageName="profile-sandra-500.jpg" alt="Sandra" name="Sandra" :text="null" :heading="null" :right="false" />
      <ImageText imageName="profile-hanna-500.jpg" alt="Hanna" name="Hanna" :text="null" :heading="null" :right="true" />
      <ImageText imageName="profile-ella-500.jpg" alt="Ella" name="Ella" :text="null" :heading="null" :right="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageText from '../../components/imagetext/ImageText.vue';

// Todo: List<IMember> to loop out

</script>
