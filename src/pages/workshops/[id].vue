<template>
  <WorkshopPage v-if="workshop" :workshop="workshop" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, createError } from "#imports";
import { useEvents } from "@/services/events-service";
import type { IEvent } from "@/types/IEvent";
import WorkshopPage from "@/components/workshops/WorkshopPage.vue";
import { applyPageSeo } from "~/services/seo-service";

const route = useRoute();
const { getById } = useEvents();

const id = route.params.id as string;

const workshop = computed<IEvent | undefined>(() =>
  getById(id)
);

if (!workshop.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Workshopen kunde inte hittas.",
  });
}

const seoTitle = computed(() => `${workshop.value!.title} | Femme Fusion`);

const plainDescription = computed(() => {
  const html =
    workshop.value!.longDescription || workshop.value!.shortDescription || "";
  return html.replace(/<[^>]+>/g, "").slice(0, 155);
});

const ogImage = computed(() => {
  return `https://femmefusion.se/images/workshop/${id}_meta.webp`;
});

applyPageSeo({
  title: seoTitle,
  description: plainDescription,
  path: `/workshops/${id}`,

  ogTitle: seoTitle,
  ogDescription: plainDescription,
  image: ogImage,
  ogType: "article",

  twitterTitle: seoTitle,
  twitterDescription: plainDescription,

  breadcrumbs: [
    { name: "Kalender", path: "/kalender" },
    { name: workshop.value!.title, path: `/workshops/${id}` },
  ],
});

function buildEventSchema(event: IEvent) {
  const siteUrl = "https://femmefusion.se";
  const [streetAddress, cityMaybe] = (event.address || "")
    .split(",")
    .map((p) => p.trim());

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: cityMaybe ? cityMaybe : "Skylten",
      address: {
        "@type": "PostalAddress",
        streetAddress: streetAddress || event.address,
        addressLocality: cityMaybe || "Linköping",
        addressCountry: "SE",
      },
    },
    image: event.image ? `${siteUrl}${event.image.src}` : `${siteUrl}/images/meta.jpg`,
    description: (event.longDescription || event.shortDescription || "")
      .replace(/<[^>]+>/g, ""),
    organizer: {
      "@type": "Organization",
      name: "Femme Fusion",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: String(event.price ?? 0),
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/anmalan`,
    },
  };
}

const eventSchema = computed(() => buildEventSchema(workshop.value!));

useHead({
  script: [
    {
      key: `schema-event-${id}`,
      type: "application/ld+json",
      innerHTML: JSON.stringify(eventSchema.value),
    },
  ],
});
</script>
