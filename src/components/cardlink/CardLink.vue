<template>
  <NuxtLink v-if="!external" :to="to" class="card">
    <img v-if="icon" :src="icon" alt="TODO" loading="lazy" decoding="async" class="card__icon">
    <slot />
  </NuxtLink>

  <a v-else :href="to" class="card" target="_blank">
    <img v-if="icon" :src="icon" alt="TODO" loading="lazy" decoding="async" class="card__icon">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
  icon: string | null;
  external: boolean;
}>();
</script>