<template>
  <div class="hamburger" :class="{'hamburger--open': open}" @click="onClick">
    <div class="hamburger__bar hamburger__bar-1"></div>
    <div class="hamburger__bar hamburger__bar-2"></div>
    <div class="hamburger__bar hamburger__bar-3"></div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);

const onClick = () => {
    open.value = !open.value;
}

</script>