<template>
  <div class="member" :class="{'member--right': right}">
    <img :src="path" :alt="alt" />
    <span>{{ name }}</span>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

import Image from '../image/Image.vue';

// Todo: class/interface
const props = defineProps<{
  path: string;
  alt: string;
  name: string;
  right: boolean;
}>();

</script>