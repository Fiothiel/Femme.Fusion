<template>
  <nav class="section-nav">
    <a v-for="link in links" :key="link.target" @click.prevent="scrollTo(link.target)" class="section-nav__link">
      {{ link.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  links: { label: string; target: string }[]
}>()

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>
