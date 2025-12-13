<template>
    <div class="content workshop">
        <section class="section">
            <div class="section__content workshop__content">
                <h1>{{ workshop.title }}</h1>

                <div v-if="workshop.shortDescription" class="workshop__intro" v-html="workshop.shortDescription">
                </div>

                <ul class="workshop__info">
                    <li v-if="workshop.day">
                        <strong>Datum:</strong> {{ workshop.day }} {{ useUtils().getShortDate(workshop.startDate) }}
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

                <figure>
                    <NuxtImg v-if="workshop.image" :src="workshop.image.src" :alt="workshop.image.alt"
                        sizes="xl:2500px md:1500px 100vw" class="image workshop__image" />
                    <figcaption>
                        Foto: {{ workshop.image?.photographer }}
                    </figcaption>
                </figure>


                <div v-if="workshop.longDescription" class="workshop__body" v-html="workshop.longDescription"></div>

                <p class="workshop__cta">
                    <NuxtLink :to="workshop.url || '/anmalan'" class="button">
                        {{ workshop.buttonText || "Anmäl dig här" }}
                    </NuxtLink>
                </p>

                <p class="workshop__terms">
                    <small>
                        Läs våra
                        <NuxtLink to="/anmalningsvillkor">anmälnings och betalningsvillkor</NuxtLink>.
                    </small>
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
