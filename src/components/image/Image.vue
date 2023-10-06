<template>
  <img 
      class="image"
      :class="{'image--full-width': fullWidth}"
      :src="fallback"
      :srcset="srcset"
      :sizes="sizes">
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{  
  alt: string;
  sizes: string | null;
  srcset: string;
  fallback: string;
  fullWidth: boolean;
}>();

const sizes = ref(props.sizes ?? "(min-width: 992px) 1000px, (min-width: 768px) 668px, (min-width: 576px) 476px");

/* <img alt="A deer with a hat" 
     sizes="(min-width: 992px) 1000px, 
            (min-width: 768px) 668px, 
            (min-width: 576px) 476px" 
     src="/globalassets/oig.jpg" 
     srcset="/globalassets/oig.jpg/width576w 576w, 
             /globalassets/oig.jpg/width768w 768w, 
             /globalassets/oig.jpg/width992w 992w, 
             /globalassets/oig.jpg/width1200w 1200w, 
             /globalassets/oig.jpg/width1400w 1400w, 
             /globalassets/oig.jpg/width2800w 2800w"> */

</script>
