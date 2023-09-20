<template>
  <img :src="path" :alt="alt" class="image" :class="{'image--full-width': fullWidth}" />
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  path: string;
  alt: string;
  fullWidth: boolean;
}>();

</script>