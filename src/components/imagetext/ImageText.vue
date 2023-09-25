<template>
  <div class="image-text">
    <div class="image-text__image" :class="{ 'image-text--right': right }">
      <img :src="imagePath" :alt="alt" />
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
import { computed } from "vue";
const imagePath = computed(() => {
  const path = new URL(`../../assets/images`, import.meta.url);
  return `${path}/${props.path}`;
});

// Todo: class/interface
const props = defineProps<{
  path: string;
  alt: string;
  name: string | null;
  right: boolean;
  heading: string | null;
  text: string | null;
}>();
</script>