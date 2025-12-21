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

function buildEventSchema(event: IEvent) {
  const siteUrl = "https://femmefusion.se";

  // basic parsing of address – you can refine later if you want
  const [streetAddress, cityMaybe] = (event.address || "").split(",").map(p => p.trim());

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
        addressCountry: "SE"
      }
    },
    image: event.image
      ? `${siteUrl}${event.image.src}`
      : `${siteUrl}/images/meta.jpg`,
    description:
      event.longDescription
        ? event.longDescription.replace(/<[^>]+>/g, "")
        : event.shortDescription.replace(/<[^>]+>/g, ""),
    organizer: {
      "@type": "Organization",
      name: "Femme Fusion",
      url: siteUrl
    },
    offers: {
      "@type": "Offer",
      price: String(event.price ?? 0),
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/anmalan`
    }
  };
};



useSeoMeta({
  title: seoTitle.value,
  description: plainDescription.value,
  ogTitle: seoTitle.value,
  ogDescription: plainDescription.value,
  ogUrl: canonicalUrl.value,
  ogImage: `/images/workshop/${id}_meta.webp`,
  twitterCard: "summary_large_image",
});

const eventSchema = computed(() => buildEventSchema(workshop.value!));
useHead({
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(eventSchema.value)
    }
  ],
});
</script>
