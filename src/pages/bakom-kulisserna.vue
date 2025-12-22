<template>
  <div class="behind-the-scenes content">
    <section class="section">
      <div class="section__content">
        <h1>Bakom kulisserna</h1>
        <p>Här delar vi med oss av små glimtar av vårt arbete, våra tankar och vår process.</p>
      </div>
    </section>
    <section class="section" v-for="post in posts" :key="post.id">
      <div class="section__content">
        <ContentPost :post="post" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUtils } from "@/utils";
import { useRoute } from "vue-router";
import postsData from "@/public/data/posts.json";
import ContentPost from "@/components/contentpost/ContentPost.vue";

const route = useRoute();

onMounted(() => {
    useUtils().scrollToMain();
});

const posts = computed(() =>
  [...postsData].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  )
);


const latestPost = computed(() => {
  return posts.value[0];
});

const canonicalUrl = computed(() => {
  return `https://femmefusion.se${route.path}`;
});

const seoTitle = computed(() => {
  return "Bakom kulisserna | Femme Fusion";
});

const plainDescription = computed(() => {
  const fallback =
    "Här delar vi med oss av små glimtar av vårt arbete, våra tankar och vår process.";

  const preamble = latestPost.value?.preamble || "";
  if (preamble) {
    return preamble.slice(0, 155);
  }

  const body = latestPost.value?.body || "";
  if (!body) {
    return fallback;
  }

  return body.replace(/<[^>]+>/g, "").slice(0, 155);
});

const ogImage = computed(() => {
  const src = latestPost.value?.image?.src;

  if (!src) {
    return "https://femmefusion.se/images/meta.jpg";
  }

  if (src.startsWith("http")) {
    return src;
  }

  if (src.startsWith("/")) {
    return `https://femmefusion.se${src}`;
  }

  return `https://femmefusion.se/${src}`;
});

function buildBehindTheScenesSchema() {
  const siteUrl = "https://femmefusion.se";

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bakom kulisserna",
    url: `${siteUrl}${route.path}`,
    description:
      "Här delar vi med oss av små glimtar av vårt arbete, våra tankar och vår process.",
    publisher: {
      "@type": "Organization",
      name: "Femme Fusion",
      url: siteUrl
    }
  };
}

useSeoMeta({
  title: seoTitle.value,
  description: plainDescription.value,

  ogTitle: seoTitle.value,
  ogDescription: plainDescription.value,
  ogUrl: canonicalUrl.value,
  ogImage: ogImage.value,

  twitterCard: "summary_large_image",
  twitterTitle: seoTitle.value,
  twitterDescription: plainDescription.value,
  twitterImage: ogImage.value,
});

const blogSchema = computed(() => {
  return buildBehindTheScenesSchema();
});

useHead({
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(blogSchema.value)
    }
  ]
});

</script>