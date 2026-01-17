<template>
  <div class="menu__item-group" :class="{ 'menu__item-group--open': open }">
    <button
      type="button"
      class="menu__item"
      :class="{ 'menu__item--open': open }"
      aria-haspopup="true"
      :aria-expanded="open.toString()"
      :aria-controls="submenuId"
      @click="$emit('toggle')"
      @keydown.enter.prevent="$emit('toggle')"
      @keydown.space.prevent="$emit('toggle')"
      @keydown.esc.prevent="$emit('close')"
    >
      {{ item.label }}
    </button>

    <ul v-if="open" :id="submenuId" class="menu__sublist">
      <li v-for="child in sortedChildren" :key="child.id">
        <NuxtLink :to="child.to" class="menu__item" @click="onChildClick">
          {{ child.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MenuItem } from "@/types/MenuItem";

const props = defineProps<{
  item: MenuItem;
  open: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
  (e: "close"): void;
  (e: "navigate"): void;
}>();

const submenuId = computed(() => {
  return `submenu-${props.item.id}`;
});

const sortedChildren = computed(() => {
  return (props.item.children ?? []).slice().sort((a, b) => {
    return (a.order ?? 999) - (b.order ?? 999);
  });
});

const onChildClick = () => {
  emit("navigate");
  emit("close");
};
</script>
