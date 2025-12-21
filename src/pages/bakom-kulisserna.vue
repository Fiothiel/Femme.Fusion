<template>
  <div class="behind-the-scenes content">
    <section class="section">
      <div class="section__content">
        <h1>Bakom kulisserna</h1>
        <p>Här delar vi med oss av små glimtar av vårt arbete, våra tankar och vår process.</p>
      </div>
    </section>
    <section class="section" v-for="post in posts">
      <div class="section__content">
        <ContentPost :post="post" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Ref } from "vue";
import postsData from "@/public/data/posts.json";
import type IContentPost from "~/interfaces/IContentPost";
import ContentPost from "@/components/contentpost/ContentPost.vue";

const posts = computed(() =>
  [...postsData].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  )
);

</script>