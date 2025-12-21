<template>
  <div>
    <Hamburger
      @click="onMenuToggle"
      @keypress.enter="onMenuToggle"
      ref="burger"
    />
    <div
      class="menu"
      :class="{ 'menu--open': open }"
      @click.self="closeMenu"
      role="dialog"
      aria-modal="true">
      <nav class="menu__nav">
        <h1>Meny</h1>
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <NuxtLink :to="item.to" @click="onRouteClick">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { computed, ref } from "vue";
import { menuItems } from '@/data/menu';

import Hamburger from '@/components/hamburger/Hamburger.vue';
import { MenuGroup } from "@/types/MenuItem";

const burger: any = ref(null);
let open = ref(false);

const navItems = computed(() =>
  menuItems
    .filter(i => i.group === MenuGroup.MAIN)          // only main nav
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
);

const onRouteClick = () => {
  onMenuToggle();
  burger.value.onClick();
  setTimeout(() => {
  document.querySelector("main")?.scrollIntoView({
    behavior: "smooth",
  });
  }, 150);
};

const onMenuToggle = () => {
  open.value = !open.value;

  if (open.value) {
    document.body.classList.add("no-scroll");
    document.body.addEventListener("keydown", onKeyPress);
  } else {
    document.body.classList.remove("no-scroll");
    document.body.removeEventListener("keydown", onKeyPress);
  }
};

const onKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeMenu();
  }
};

const closeMenu = () => {
  onMenuToggle();
    if (burger && burger.value) {
      burger.value.onClick();
    }
}
</script>