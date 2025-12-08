<template>
    <div class="content workshop">
        <section class="section">
            <div class="section__content">
                <div class="workshop__text">
                    <h1>{{ event.title }}</h1>

                    <slot name="intro" />

                    <ul class="workshop__info">
                        <li v-if="event.dayAndTimeInfo"><strong>Datum:</strong> {{ event.day }}</li>
                        <li v-if="timeLabel"><strong>Tid:</strong> {{ timeLabel }}</li>
                        <li v-if="event.address"><strong>Plats:</strong> {{ event.address }}</li>
                        <li v-if="event.level"><strong>Nivå:</strong> {{ event.level }}</li>
                        <li v-if="priceLabel"><strong>Pris:</strong> {{ priceLabel }}</li>
                    </ul>

                    <slot name="body" />

                    <p class="workshop__cta">
                        Vill du boka din plats?
                        <NuxtLink :to="event.url || '/anmalan'">
                            {{ event.buttonText || 'Anmäl dig här' }}
                        </NuxtLink>.
                    </p>
                </div>

                <NuxtImg
                    v-if="event.image"
                    :src="event.image.src"
                    :alt="event.image.alt"
                    sizes="xl:2500px md:1500px 100vw"
                    class="image workshop__image"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { IEvent } from "@/types/IEvent";

const props = defineProps<{
    event: IEvent;
}>();

const timeLabel = computed(() => {
    const start = new Date(props.event.startDate);
    const end = new Date(props.event.endDate);
    return `${start.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}-${end.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}`;
});

const priceLabel = computed(() => {
    return props.event.price === 0 ? "Gratis" : `${props.event.price} kr`;
});
</script>
