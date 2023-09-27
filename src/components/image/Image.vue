<template>
  <img :src="getImagePath(name)" :alt="alt" class="image" :class="{'image--full-width': fullWidth}" />
</template>
  
<script setup lang="ts">
import { useUtils } from '../../utils';

const { getImagePath } = useUtils();

defineProps<{
  name: string;
  alt: string;
  fullWidth: boolean;
}>();

</script>