<template>
  <div tabindex="0" class="hamburger" :class="{'hamburger--open': open}" @click="onClick" @keypress.enter="onClick">
    <div class="hamburger__bar hamburger__bar-1"></div>
    <div class="hamburger__bar hamburger__bar-2"></div>
    <div class="hamburger__bar hamburger__bar-3"></div>
    <div>Meny</div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const open = ref(false);

const onClick = () => {
    open.value = !open.value;
}

defineExpose({
  onClick
});

</script>