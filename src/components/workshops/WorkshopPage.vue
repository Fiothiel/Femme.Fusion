<template>
    <div class="content workshop">
        <section class="section">
            <div class="section__content">
                <div class="workshop__text">
                    <h1>{{ title }}</h1>

                    <slot name="intro" />

                    <ul class="workshop__info">
                        <li v-if="dateLabel"><strong>Datum:</strong> {{ dateLabel }}</li>
                        <li v-if="timeLabel"><strong>Tid:</strong> {{ timeLabel }}</li>
                        <li v-if="addressLabel"><strong>Plats:</strong> {{ addressLabel }}</li>
                        <li v-if="levelLabel"><strong>Nivå:</strong> {{ levelLabel }}</li>
                        <li v-if="priceLabel"><strong>Pris:</strong> {{ priceLabel }}</li>
                    </ul>

                    <slot name="body" />

                    <p class="workshop__cta">
                        Vill du boka din plats?
                        <NuxtLink to="/anmalan">Anmäl dig här</NuxtLink>.
                    </p>
                </div>

                <NuxtImg v-if="imageSrc" :src="imageSrc" :alt="imageAlt" sizes="xl:2500px md:1500px 100vw"
                class="image workshop__image" />
            </div>            
        </section>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    dateLabel: string;
    timeLabel: string;
    addressLabel: string;
    levelLabel?: string;
    priceLabel?: string;
    imageSrc: string;
    imageAlt: string;
}

defineProps<Props>();
</script>
