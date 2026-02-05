<template>
  <ShowPage v-if="show" :show="show" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, createError } from "#imports";
import { useEvents } from "@/services/events-service";
import type { IEvent } from "@/types/IEvent";
import ShowPage from "@/components/shows/ShowPage.vue";
import { applyPageSeo } from "~/services/seo-service";
import { useUtils } from "@/utils";

const route = useRoute();
const { getById } = useEvents();

const id = route.params.id as string;

onMounted(() => {
  useUtils().scrollToMain();
})

const show = computed<IEvent | undefined>(() =>
  getById(id)
);

if (!show.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Showen kunde inte hittas.",
  });
}

const seoTitle = computed(() => `${show.value!.title} | Femme Fusion`);

const plainDescription = computed(() => {
  const html =
    show.value!.longDescription || show.value!.shortDescription || "";
  return html.replace(/<[^>]+>/g, "").slice(0, 155);
});

const ogImage = computed(() => {
  const image = show.value?.image?.src;
  if (image) {
    return `https://femmefusion.se${image}`;
  }
  return "https://femmefusion.se/images/meta-2026.jpg";
});

applyPageSeo({
  title: seoTitle.value,
  description: plainDescription.value,
  path: `/shower/${id}`,

  ogTitle: seoTitle.value,
  ogDescription: plainDescription.value,
  image: ogImage.value,
  ogType: "article",

  twitterTitle: seoTitle.value,
  twitterDescription: plainDescription.value,

  breadcrumbs: [
    { name: "Show", path: "/show" },
    { name: show.value!.title, path: `/shower/${id}` },
  ],
});

function buildEventSchema(event: IEvent) {
  const siteUrl = "https://femmefusion.se";
  const [streetAddress, cityMaybe] = (event.address || "")
    .split(",")
    .map((p) => p.trim());
  const offerUrl = event.url
    ? event.url.startsWith("http")
      ? event.url
      : `${siteUrl}${event.url}`
    : `${siteUrl}/kontakt`;

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
    image: event.image ? `${siteUrl}${event.image.src}` : `${siteUrl}/images/meta-2026.jpg`,
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
      url: offerUrl,
    },
  };
}

const eventSchema = computed(() => buildEventSchema(show.value!));

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
