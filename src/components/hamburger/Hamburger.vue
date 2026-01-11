<template>
  <button
    class="hamburger"
    :class="{ 'hamburger--open': open }"
    aria-controls="mobile-menu"
    :aria-expanded="open ? 'true' : 'false'"
    @click="$emit('toggle')">
    <div class="hamburger__bar hamburger__bar-1"></div>
    <div class="hamburger__bar hamburger__bar-2"></div>
    <div class="hamburger__bar hamburger__bar-3"></div>
</button>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean;
}>();

defineEmits<{
  (e: "toggle"): void;
}>();
</script>