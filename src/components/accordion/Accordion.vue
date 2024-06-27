<template>
<details class="accordion" @toggle="toggleDetails">
  <summary>
    {{ summary }}
  </summary>
  <div class="accordion__details" ref="detailsContent">
    {{ details }}
  </div>
  
</details>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{  
  summary: string;
  details: string;
}>();

onMounted(() => {
  // Initialize the height on mount
  adjustHeight();
});

const isOpen = ref(false);
const detailsContent = ref(null);
const toggleDetails = (event) => {
  isOpen.value = event.target.open;
  adjustHeight();
};

const adjustHeight = () => {
  const content = detailsContent.value;
  if (isOpen.value) {
    content.style.maxHeight = `${content.scrollHeight}px`;
  } else {
    content.style.maxHeight = 0;
  }
};

</script>