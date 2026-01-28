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
                    <li v-for="event in courses" :key="event.url">
                        <Modal :id="event.url">
                            <template v-slot:link="{ clicked }: { clicked: () => void }">
                                <a class="table-list__link" @click="clicked">
                                    <span>{{ getShortDate(event.startDate) }}</span>
                                    {{ event.title }}
                                </a>
                            </template>
                            <template v-slot:content>
                                <EventInfo :event="event" />
                            </template>
                        </Modal>
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
import EventInfo from '@/components/eventinfo/EventInfo.vue';
import Modal from '@/components/modal/Modal.vue';
import { applyPageSeo } from '~/services/seo-service';

onMounted(() => {
    useUtils().scrollToMain();
});

const { getShortDate } = useUtils();
const { getCourses } = useEvents();

const courses: Ref<IEvent[]> = computed(() => {
    return getCourses();
});

applyPageSeo({
    title: "Kurser & dansklasser | Femme Fusion - kommande datum",
    description:
        "Se kommande öppna dansklasser med Femme Fusion. Klicka för info och bokning. Vill du boka en egen dansklass för privat eller företag? Skicka en förfrågan.",
    path: "/courses",
    ogTitle: "Kurser & dansklasser | Femme Fusion",
    ogDescription:
        "Kommande öppna dansklasser. Se datum och boka din plats.",
    twitterTitle: "Kurser & dansklasser | Femme Fusion",
    twitterDescription:
        "Se kommande öppna dansklasser med Femme Fusion. Boka din plats.",
    breadcrumbs: [
        { name: "Kurser & dansklasser", path: "/courses" },
    ],
});
</script>
