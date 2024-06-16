<template>
<details class="accordion">
  <summary>
    {{ summary }}
  </summary>
  <div>
    {{ details }}
  </div>
  
</details>
</template>

<script setup lang="ts">
defineProps<{  
  summary: string;
  details: string;
}>();

</script>