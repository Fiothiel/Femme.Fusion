<template>
  <div class="page">
    <h1>{{ heading }}</h1>
    <img :src="image" class="page__image" />
    <p class="page__preamble">{{ preamble }}</p>    
    <div v-html="content" class="page__content">
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  heading: string;
  preamble: string;
  content: string;
  image: string;
}>();

</script>