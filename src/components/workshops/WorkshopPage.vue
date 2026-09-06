<template>
    <div class="content workshop">
        <section class="section">
            <div class="section__content workshop__content">
                <h1>{{ workshop.title }}</h1>

                <div v-if="workshop.shortDescription" class="workshop__intro" v-html="workshop.shortDescription">
                </div>

                <ul class="workshop__info">
                    <li v-if="isMultiOccasion && periodLabel">
                        <strong>Period:</strong> {{ periodLabel }}
                    </li>
                    <li v-if="isMultiOccasion">
                        <strong>Antal tillfällen:</strong> {{ workshop.numOccasions }}
                    </li>
                    <li v-else-if="workshop.day">
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

                <div v-if="isPastWorkshop" class="workshop__notice">
                    <p>
                        <strong>Det här tillfället har passerat.</strong>
                        Vill du gå en liknande kurs eller workshop? Se kommande datum eller skicka en förfrågan.
                    </p>
                    <div class="section__buttons workshop__notice-buttons">
                        <NuxtLink to="/kurser" class="button">Se kommande datum</NuxtLink>
                        <NuxtLink to="/kontakt" class="button button--secondary">Skicka förfrågan</NuxtLink>
                    </div>
                </div>

                <p v-else class="workshop__cta">
                    <NuxtLink :to="ctaUrl" class="button" :target="ctaTarget" :rel="ctaRel">
                        {{ workshop.buttonText || "Anmäl dig här" }}
                    </NuxtLink>
                </p>

                <p v-if="!isPastWorkshop" class="workshop__terms">
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

const isMultiOccasion = computed(() => props.workshop.numOccasions > 1);

const isPastWorkshop = computed(() => {
    const date = props.workshop.endDate || props.workshop.startDate;

    if (!date) {
        return false;
    }

    return new Date(date) < new Date();
});

const periodLabel = computed(() => {
    if (!isMultiOccasion.value || !props.workshop.startDate || !props.workshop.endDate) {
        return "";
    }

    const start = new Date(props.workshop.startDate);
    const end = new Date(props.workshop.endDate);
    const startDate = useUtils().getShortDate(props.workshop.startDate);
    const endDate = useUtils().getShortDate(props.workshop.endDate);

    if (start.toDateString() === end.toDateString()) {
        return `${startDate} ${start.getFullYear()}`;
    }

    if (start.getFullYear() === end.getFullYear()) {
        return `${startDate} till ${endDate} ${end.getFullYear()}`;
    }

    return `${startDate} ${start.getFullYear()} till ${endDate} ${end.getFullYear()}`;
});

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
    const price = props.workshop.price;

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

const ctaUrl = computed(() => props.workshop.url || "/anmalan");
const isExternal = computed(() => /^https?:\/\//.test(ctaUrl.value));
const ctaTarget = computed(() => (isExternal.value ? "_blank" : undefined));
const ctaRel = computed(() => (isExternal.value ? "noopener" : undefined));
</script>
