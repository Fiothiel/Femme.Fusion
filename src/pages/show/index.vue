<template>
    <div class="content show-hub">
        <section class="section">
            <div class="section__content">
                <h1>Show</h1>
                <p>
                    VÃ¤lj det showspÃ¥r som passar ert tillfÃ¤lle. Dans, sÃ¥ng och scenenergi anpassas efter publik, lokal och
                    Ã¶nskad kÃ¤nsla. VÃ¤lj spÃ¥r sÃ¥ guidar vi dig rÃ¤tt.
                </p>
            </div>
        </section>

        <section class="section section--wide">
            <div class="section__content">
                <ul class="show-hub__cards">
                    <li>
                        <CardLink to="/foretag/show" :external="false" :icon="null">
                            <h2>Show till fÃ¶retagsevent</h2>
                            <p>Kickoff, middag, konferens eller lansering. Proffsigt, snyggt och lÃ¤tt att planera.</p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/privat/show" :external="false" :icon="null">
                            <h2>Show till privata tillfÃ¤llen</h2>
                            <p>FÃ¶delsedag, jubileum eller fest. Ett wow-nummer eller en hel show, ni vÃ¤ljer kÃ¤nslan.</p>
                        </CardLink>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <h2>Kommande shower</h2>

                <ul v-if="upcomingShows.length > 0" class="table-list">
                    <li v-for="event in upcomingShows" :key="event.id">
                        <NuxtLink class="table-list__link" :to="`/show/${event.id}`">
                            <span>{{ getShortDate(event.startDate) }}</span>
                            {{ event.title }}
                        </NuxtLink>
                    </li>
                </ul>

                <p v-else>
                    Inga publika datum ute just nu. Vill du boka ett nummer eller en hel show?
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en fÃ¶rfrÃ¥gan</NuxtLink>.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <p>
                    OsÃ¤ker pÃ¥ vad som passar? <NuxtLink class="link link--accent" to="/kontakt">Skicka en fÃ¶rfrÃ¥gan</NuxtLink>
                    med datum, plats och ungefÃ¤rlig idÃ© sÃ¥ Ã¥terkommer vi med fÃ¶rslag.
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

onMounted(() => {
    useUtils().scrollToMain();
});

const { getShortDate } = useUtils();
const { getShows } = useEvents();

const upcomingShows: Ref<IEvent[]> = computed(() => {
    return getShows().filter((event) => !!event.id).slice(0, 5);
});

applyPageSeo({
    title: "Show | Femme Fusion - show till fÃ¶retagsevent och privata fester",
    description:
        "Boka show med Femme Fusion. VÃ¤lj mellan show till fÃ¶retagsevent eller privata tillfÃ¤llen. Vi levererar dans, sÃ¥ng och scenuttryck och anpassar upplÃ¤gg efter publik, plats och Ã¶nskad kÃ¤nsla.",
    path: "/show",
    ogTitle: "Show | Femme Fusion",
    ogDescription:
        "Show till fÃ¶retagsevent och privata tillfÃ¤llen. VÃ¤lj spÃ¥r och hitta rÃ¤tt upplÃ¤gg direkt.",
    twitterTitle: "Show | Femme Fusion",
    twitterDescription:
        "Boka show till fÃ¶retag eller privat. Vi anpassar upplÃ¤gg efter publik och plats.",
    breadcrumbs: [
        { name: "Show", path: "/show" },
    ],
});
</script>
