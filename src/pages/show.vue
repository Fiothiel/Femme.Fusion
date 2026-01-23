<template>
    <div class="content show-hub">
        <section class="section">
            <div class="section__content">
                <h1>Show</h1>
                <p>
                    Välj det showspår som passar ert tillfälle. Dans, sång och scenenergi anpassas efter publik, lokal och
                    önskad känsla. Välj spår så guidar vi dig rätt.
                </p>
            </div>
        </section>

        <section class="section section--wide">
            <div class="section__content">
                <ul class="show-hub__cards">
                    <li>
                        <CardLink to="/foretag/show" :external="false" :icon="null">
                            <h2>Show till företagsevent</h2>
                            <p>Kickoff, middag, konferens eller lansering. Proffsigt, snyggt och lätt att planera.</p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/privat/show" :external="false" :icon="null">
                            <h2>Show till privata tillfällen</h2>
                            <p>Födelsedag, jubileum eller fest. Ett wow-nummer eller en hel show, ni väljer känslan.</p>
                        </CardLink>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <h2>Kommande shower</h2>

                <ul v-if="upcomingShows.length > 0" class="table-list">
                    <li v-for="event in upcomingShows" :key="event.url">
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

                <p v-else>
                    Inga publika datum ute just nu. Vill du boka ett nummer eller en hel show?
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <p>
                    Osäker på vad som passar? <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>
                    med datum, plats och ungefärlig idé så återkommer vi med förslag.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUtils } from '@/utils';
import CardLink from '@/components/cardlink/CardLink.vue';
import { applyPageSeo } from '@/services/seo-service';
import { useEvents } from '@/services/events-service';
import type { Ref } from 'vue';
import type { IEvent } from '@/types/IEvent';
import EventInfo from '@/components/eventinfo/EventInfo.vue';
import Modal from '@/components/modal/Modal.vue';

onMounted(() => {
    useUtils().scrollToMain();
});

const { getShortDate } = useUtils();
const { getShows } = useEvents();

const upcomingShows: Ref<IEvent[]> = computed(() => {
    return getShows().slice(0, 5);
});

applyPageSeo({
    title: "Show | Femme Fusion - show till företagsevent och privata fester",
    description:
        "Boka show med Femme Fusion. Välj mellan show till företagsevent eller privata tillfällen. Vi levererar dans, sång och scenuttryck och anpassar upplägg efter publik, plats och önskad känsla.",
    path: "/show",
    ogTitle: "Show | Femme Fusion",
    ogDescription:
        "Show till företagsevent och privata tillfällen. Välj spår och hitta rätt upplägg direkt.",
    twitterTitle: "Show | Femme Fusion",
    twitterDescription:
        "Boka show till företag eller privat. Vi anpassar upplägg efter publik och plats.",
    breadcrumbs: [
        { name: "Show", path: "/show" },
    ],
});
</script>
