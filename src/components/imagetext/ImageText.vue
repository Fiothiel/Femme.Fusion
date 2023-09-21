<template>
  <div class="image-text">
    <div class="image-text__image" :class="{ 'image-text--right': right }">
      <img :src="path" :alt="alt" />
      <span v-if="name">{{ name }}</span>
    </div>
    <div v-if="text" class="image-text__text">
      <h2>{{ heading }}</h2>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
  
<script setup lang="ts">

// Todo: class/interface
const props = defineProps<{
  path: string;
  alt: string;
  name: string;
  right: boolean;
  heading: string;
  text: string;
}>();

</script>