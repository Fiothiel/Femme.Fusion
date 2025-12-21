<template>
    <div class="content-post">       
        <h2>{{ post.heading }}</h2>
         <p class="content-post__published">{{ useUtils().getLongDate(post.publishedAt) }}</p>
        <p class="content-post__preamble">{{ post.preamble }}</p>
        <figure v-if="post.image" >
            <NuxtImg :src="post.image.src" :alt="post.image.alt"
                sizes="xl:2500px md:1500px 100vw" class="image content-post__image" />
            <figcaption>
                Foto: {{ post.image?.photographer }}
            </figcaption>
        </figure>
        <div v-html="post.body" />
    </div>
</template>

<script setup lang="ts">
import type IContentPost from '@/interfaces/IContentPost';
import { useUtils } from '~/utils';

const props = defineProps<{
    post: IContentPost
}>();
</script>