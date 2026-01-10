<template>
  <header class="header" :class="{ 'header--sticky': isSticky }">
    <a href="/"><img src="/logo-white.svg" class="header__logo"></a>
    <nav aria-label="Huvudmeny">
        <ul class="header__menu header__menu--desktop">
          <li v-for="item in navItems" :key="item.id">
            <NuxtLink :to="item.to" class="menu-item">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
    </nav>
    <NuxtLink to="/bokning" class="button button--secondary button--header header__book header__book--desktop">Boka</NuxtLink>
    <Hamburger />
  </header>
</template>
  
<script setup lang="ts">
import { computed, ref } from "vue";
import { menuItems } from '@/data/menu';
import { MenuGroup } from "@/types/MenuItem";
import Hamburger from "../hamburger/Hamburger.vue";

const navItems = computed(() =>
  menuItems
    .filter(i => i.group === MenuGroup.MAIN)          // only main nav
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
);

const isSticky = ref(false);

const onScroll = () => {
  isSticky.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

</script>