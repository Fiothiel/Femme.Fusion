<template>
  <header class="header" :class="{ 'header--sticky': isSticky, 'header--menu-open': menuOpen }">
    <a href="/"><img src="/logo-white.svg" class="header__logo"></a>
    <Menu :mobile="false" :open="false" />
    <NuxtLink to="/bokning" class="button button--secondary button--header header__book header__book--desktop">Boka
    </NuxtLink>
    <Hamburger :open="menuOpen" @toggle="toggleMenu" />
  </header>
  <Menu :mobile="true" :open="menuOpen" @navigate="closeMenu" @close="closeMenu" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Hamburger from "../hamburger/Hamburger.vue";
import Menu from "../menu/Menu.vue";

const isSticky = ref(false);
const menuOpen = ref(false);

const onScroll = () => {
  isSticky.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeyDown);
});

const toggleMenu = () => {
  menuOpen.value ? closeMenu() : openMenu();
}

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};

const openMenu = () => {
  menuOpen.value = true;
  document.body.style.overflow = "hidden";
};

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && menuOpen.value) {
    closeMenu();
  }
};


</script>