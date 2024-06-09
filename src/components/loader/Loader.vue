<template>
  <div class="loader" :class="{ 'loader--large': large}"></div>
  <span v-if="label" class="loader-label">Loading</span>
</template>

<script setup lang="ts">

defineProps<{
  large: boolean;
  label: boolean;
}>();

</script>
