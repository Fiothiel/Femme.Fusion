<template>
    <div class="content workshop">
        <section class="section">
            <div class="section__content">
                <div class="workshop__text">
                    <h1>{{ workshop.title }}</h1>

                    <div v-if="workshop.shortDescription" class="workshop__intro" v-html="workshop.shortDescription"></div>

                    <ul class="workshop__info">
                        <li v-if="workshop.day">
                            <strong>Datum:</strong> {{ workshop.day }}
                        </li>
                        <li v-if="timeLabel">
                            <strong>Tid:</strong> {{ timeLabel }}
                        </li>
                        <li v-if="workshop.address">
                            <strong>Plats:</strong> {{ workshop.address }}
                        </li>
                        <li v-if="workshop.level">
                            <strong>Nivå:</strong> {{ workshop.level }}
                        </li>
                        <li v-if="priceLabel">
                            <strong>Pris:</strong> {{ priceLabel }}
                        </li>
                    </ul>

                    <div v-if="workshop.longDescription" class="workshop__body" v-html="workshop.longDescription"></div>

                    <p class="workshop__cta">
                        Vill du boka din plats?
                        <NuxtLink :to="workshop.url || '/anmalan'">
                            {{ workshop.buttonText || "Anmäl dig här" }}
                        </NuxtLink>.
                    </p>
                </div>

                <NuxtImg v-if="workshop.image" :src="workshop.image.src" :alt="workshop.image.alt"
                    sizes="xl:2500px md:1500px 100vw" class="image workshop__image" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IEvent } from "@/types/IEvent";

const props = defineProps<{
    workshop: IEvent;
}>();

const timeLabel = computed(() => {
    if (!props.workshop.startDate || !props.workshop.endDate) {
        return "";
    }

    const start = new Date(props.workshop.startDate);
    const end = new Date(props.workshop.endDate);

    const fmt = (date: Date): string =>
        date.toLocaleTimeString("sv-SE", {
            hour: "2-digit",
            minute: "2-digit",
        });

    // normal hyphen, not en dash
    return `${fmt(start)}-${fmt(end)}`;
});

const priceLabel = computed(() => {
    if (props.workshop.price === 0) {
        return "Gratis";
    }
    return `${props.workshop.price} kr`;
});
</script>
