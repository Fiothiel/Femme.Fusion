<template>
  <nav
    ref="navRef"
    :aria-label="ariaLabel"
    class="menu"
    :class="{ 'menu--mobile': mobile, 'menu--open': mobile && open }"
    @click="onBackdropClick"
  >
    <ul class="menu__list" @click.stop>
      <li v-for="item in navItems" :key="item.id" class="menu__node">
        <!-- Undermeny -->
        <template v-if="item.children?.length">
          <MenuItemWithSubmenu
            :item="item"
            :open="openId === item.id"
            @toggle="toggleSubmenu(item.id)"
            @close="closeAllSubmenus"
            @navigate="onNavigate"
          />
        </template>

        <!-- Utan undermeny -->
        <template v-else>
          <NuxtLink :to="item.to" class="menu__item" @click="onNavigate">
            {{ item.label }}
          </NuxtLink>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { menuItems } from "@/data/menu";
import { MenuGroup } from "@/types/MenuItem";
import MenuItemWithSubmenu from "@/components/menu/MenuItemWithSubmenu.vue";

const props = defineProps<{
  mobile: boolean;
  open: boolean; // for mobile
}>();

const emit = defineEmits<{
  (e: "navigate"): void;
  (e: "close"): void;
}>();

const ariaLabel = ref(props.mobile ? "Mobilmeny" : "Huvudmeny");

const navRef = ref<HTMLElement | null>(null);
const openId = ref<string | null>(null);

const navItems = computed(() =>
  menuItems
    .filter((i) => i.group === MenuGroup.MAIN)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
);

const closeAllSubmenus = () => {
  openId.value = null;
};

const toggleSubmenu = (id: string) => {
  if (openId.value === id) {
    openId.value = null;
  } else {
    openId.value = id;
  }
};

const onNavigate = () => {
  closeAllSubmenus();

  if (props.mobile) {
    emit("navigate");
  }
};

const onBackdropClick = () => {
  if (props.mobile && props.open) {
    emit("close");
  }
};

const onDocumentPointerDown = (e: PointerEvent) => {
  const target = e.target as Node | null;

  if (!target) {
    return;
  }

  if (!navRef.value) {
    return;
  }

  if (!navRef.value.contains(target)) {
    closeAllSubmenus();
  }
};

const onDocumentKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeAllSubmenus();
  }
};

onMounted(() => {
  document.addEventListener("pointerdown", onDocumentPointerDown);
  document.addEventListener("keydown", onDocumentKeyDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onDocumentPointerDown);
  document.removeEventListener("keydown", onDocumentKeyDown);
});
</script>
