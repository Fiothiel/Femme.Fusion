<template>
  <WorkshopPage v-if="workshop" :workshop="workshop" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, createError } from "#imports";
import { useEvents } from "@/services/events-service";
import type { IEvent } from "@/types/IEvent";
import WorkshopPage from "@/components/workshops/WorkshopPage.vue";

const route = useRoute();
const { getById } = useEvents();

const workshop = computed<IEvent | undefined>(() =>
  getById(route.params.id as string)
);

if (!workshop.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Workshopen kunde inte hittas.",
  });
}

const canonicalUrl = computed(
  () => `https://femmefusion.se/workshops/${route.params.id}`
);

const seoTitle = computed(() => `${workshop.value!.title} | Femme Fusion`);

const plainDescription = computed(() => {
  const html =
    workshop.value!.longDescription ||
    workshop.value!.shortDescription ||
    "";
  return html.replace(/<[^>]+>/g, "").slice(0, 155);
});

useSeoMeta({
  title: seoTitle.value,
  description: plainDescription.value,
  ogTitle: seoTitle.value,
  ogDescription: plainDescription.value,
  ogUrl: canonicalUrl.value,
  ogImage: "https://femmefusion.se/images/meta.jpg",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: canonicalUrl.value }],
});
</script>
