<template>
    <div class="courses content">
        <section class="section">
            <div class="section__content">
                <h1>Kurser & dansklasser</h1>
                <p>
                    Här hittar du våra kommande <strong>öppna dansklasser</strong>. Klicka på en klass för mer information
                    och bokning.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <h2>Kommande dansklasser</h2>

                <ul v-if="courses.length > 0" class="table-list">
                    <li v-for="event in courses" :key="event.id">
                        <NuxtLink class="table-list__link" :to="`/workshops/${event.id}`">
                            <span>{{ getShortDate(event.startDate) }}</span>
                            {{ event.title }}
                            <small class="table-list__badge">{{ getCourseFormat(event) }}</small>
                        </NuxtLink>
                    </li>
                </ul>

                <div v-else class="courses__empty">
                    <p>
                        Inga öppna dansklasser planerade just nu. Vill du boka en egen dansklass?
                    </p>
                    <div class="section__buttons">
                        <NuxtLink to="/privat/dansklass" class="button">Boka för privat</NuxtLink>
                        <NuxtLink to="/foretag/dansklass" class="button button--secondary">Boka för företag</NuxtLink>
                    </div>
                </div>

                <div v-if="courses.length > 0" class="courses__cta">
                    <p>
                        Vill du boka en egen dansklass för privat eller företag?
                        <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>.
                    </p>
                </div>

                <p class="courses__archive-link">
                    Vill du se vad vi har gjort tidigare?
                    <NuxtLink class="link link--accent" to="/tidigare-kurser">Se tidigare kurser & workshops</NuxtLink>.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Ref } from 'vue';
import { useUtils } from '@/utils';
import { useEvents } from '@/services/events-service';
import type { IEvent } from '@/types/IEvent';
import { applyPageSeo } from '~/services/seo-service';

onMounted(() => {
    useUtils().scrollToMain();
});

const { getShortDate } = useUtils();
const { getCourses } = useEvents();

const courses: Ref<IEvent[]> = computed(() => {
    return getCourses();
});

const getCourseFormat = (event: IEvent): string => {
    return event.numOccasions > 1 ? "kurs" : "workshop";
};

applyPageSeo({
    title: "Kurser & dansklasser | Femme Fusion - kommande datum",
    description:
        "Se kommande öppna dansklasser med Femme Fusion. Klicka för info och bokning. Vill du boka en egen dansklass för privat eller företag? Skicka en förfrågan.",
    path: "/kurser",
    ogTitle: "Kurser & dansklasser | Femme Fusion",
    ogDescription:
        "Kommande öppna dansklasser. Se datum och boka din plats.",
    twitterTitle: "Kurser & dansklasser | Femme Fusion",
    twitterDescription:
        "Se kommande öppna dansklasser med Femme Fusion. Boka din plats.",
    breadcrumbs: [
        { name: "Kurser & dansklasser", path: "/kurser" },
    ],
});
</script>
