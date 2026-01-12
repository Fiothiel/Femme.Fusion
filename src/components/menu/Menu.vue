<template>
  <nav :aria-label="ariaLabel" class="menu" :class="{ 'menu--mobile': mobile, 'menu--open': mobile && open }"
    @click="onBackdropClick">
    <ul class="menu__list" @click.stop>
      <li v-for="item in navItems" :key="item.id">
        <NuxtLink :to="item.to" class="menu__item" @click="onNavigate">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { menuItems } from '@/data/menu';
import { MenuGroup } from "@/types/MenuItem";

const props = defineProps<{
  mobile: boolean;
  open: boolean; // for mobile
}>();

const emit = defineEmits<{
  (e: "navigate"): void;
  (e: "close"): void;
}>();

const ariaLabel = ref(props.mobile ? "Mobilmeny" : "Huvudmeny");

const navItems = computed(() =>
  menuItems
    .filter(i => i.group === MenuGroup.MAIN)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
);

const onNavigate = () => {
  if (props.mobile) {
    emit("navigate");
  }
};

const onBackdropClick = () => {
  if (props.mobile && props.open) {
    emit("close");
  }
};

</script>