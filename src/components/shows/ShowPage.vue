<template>
    <div class="content show">
        <section class="section">
            <div class="section__content show__content">
                <h1>{{ show.title }}</h1>

                <div v-if="show.shortDescription" class="show__intro" v-html="show.shortDescription">
                </div>

                <ul class="show__info">
                    <li v-if="dateLabel">
                        <strong>Datum och tid:</strong> {{ dateLabel }}
                    </li>
                    <li v-if="show.address">
                        <strong>Plats:</strong> {{ show.address }}
                    </li>
                    <li v-if="priceLabel">
                        <strong>Pris:</strong> {{ priceLabel }}
                    </li>
                </ul>

                <figure v-if="show.image">
                    <NuxtImg :src="show.image.src" :alt="show.image.alt" sizes="xl:2500px md:1500px 100vw"
                        class="image show__image" />
                    <figcaption v-if="show.image?.photographer">
                        Foto: {{ show.image.photographer }}
                    </figcaption>
                </figure>

                <div v-if="show.longDescription" class="show__body" v-html="show.longDescription"></div>

                <p class="show__cta">
                    <NuxtLink :to="ctaUrl" class="button" target="_blank" rel="noopener">
                        {{ ctaLabel }}
                    </NuxtLink>
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IEvent } from "@/types/IEvent";
import { useUtils } from "../../utils";

const props = defineProps<{
    show: IEvent;
}>();

const dateLabel = computed(() => {
    const date = props.show.startDate
        ? useUtils().getShortDate(props.show.startDate)
        : "";

    if (props.show.dayAndTimeInfo) {
        return date ? `${props.show.dayAndTimeInfo} ${date}` : props.show.dayAndTimeInfo;
    }

    if (props.show.day) {
        return date ? `${props.show.day} ${date}` : props.show.day;
    }

    return date;
});

const priceLabel = computed(() => {
    const price = props.show.price as unknown;
    if (price === 0) {
        return "Gratis";
    }
    if (typeof price === "number") {
        return `${price} kr`;
    }
    if (typeof price === "string" && price.trim()) {
        return price;
    }
    return "";
});

const ctaUrl = computed(() => props.show.url || "/kontakt");
const ctaLabel = computed(() =>
    props.show.buttonText || (props.show.url ? "Läs mer" : "Skicka förfrågan")
);
</script>
