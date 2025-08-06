<template>
  <div class="loader-wrapper">
    <div class="loader" :class="{ 'loader--large': large }"></div>
    <span v-if="label" class="loader-label">Loading</span>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  large: boolean;
  label: boolean;
}>();

</script>
