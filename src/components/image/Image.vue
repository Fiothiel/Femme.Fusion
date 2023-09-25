<template>
  <img :src="imagePath" :alt="alt" class="image" :class="{'image--full-width': fullWidth}" />
</template>
  
<script setup lang="ts">
import { computed } from 'vue';

const imagePath = computed(() => {
  const path = new URL(`../../assets/images`, import.meta.url);
  return `${path}/${props.name}`;
})

const props = defineProps<{
  name: string;
  alt: string;
  fullWidth: boolean;
}>();

</script>