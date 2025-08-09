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
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink :to="item.path" @click="onRouteClick">
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
import { useRouter } from "vue-router";

import Hamburger from '@/components/hamburger/Hamburger.vue';

const router = useRouter();
const burger: any = ref(null);
let open = ref(false);

const routes = ref(
  router.options.routes.filter(
    (route) => route.meta === undefined || route.meta.displayInMenu
  )
);

const navItems = computed(() =>
  router
    .getRoutes()
    .filter((r) => r.meta?.displayInMenu)
    .sort((a, b) => (a.meta?.order ?? 999) - (b.meta?.order ?? 999))
    .map((r) => ({
      path: r.path,
      label:
        (r.meta as any)?.menuLabel ?? String(r.name ?? "").replace(/-/g, " "),
    }))
);

const onRouteClick = () => {
  onMenuToggle();
  burger.value.onClick();
  document.querySelector("main")?.scrollIntoView({
    behavior: "smooth",
  });
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