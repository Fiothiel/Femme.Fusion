<template>
    <div class="content show-hub">
        <section class="section">
            <div class="section__content">
                <h1>Dansklasser</h1>
                <p>
                    Vi är Femme Fusion. Vi håller <strong>dansklasser med fokus på känsla, uttryck och energi</strong>,
                    anpassade efter grupp, tillfälle och nivå. Välj det spår som passar er så guidar vi er rätt.
                </p>
            </div>
        </section>

        <section class="section section--wide">
            <div class="section__content">
                <ul class="show-hub__cards">
                    <li>
                        <CardLink to="/foretag/dansklass" :external="false" :icon="null">
                            <h2>Dansklass för företag</h2>
                            <p>
                                Kick-off, teambuilding eller energiboost. En rolig och inkluderande upplevelse
                                där alla kan vara med.
                            </p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/privat/dansklass" :external="false" :icon="null">
                            <h2>Dansklass för privata tillfällen</h2>
                            <p>
                                Möhippa, födelsedag eller fest. Lekfullt, peppande och anpassat efter er nivå
                                och vibe.
                            </p>
                        </CardLink>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <p>
                    Osäker på vad som passar?
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>
                    med datum, plats och gruppstorlek så hjälper vi er vidare.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUtils } from '@/utils';
import CardLink from '@/components/cardlink/CardLink.vue';
import { applyPageSeo } from '@/services/seo-service';

onMounted(() => {
    useUtils().scrollToMain();
});

applyPageSeo({
    title: "Dansklasser | Femme Fusion - dans för företag och privata grupper",
    description:
        "Boka dansklass med Femme Fusion. Välj mellan dansklass för företag eller privata tillfällen som möhippa och fest. Fokus på rörelseglädje, uttryck och energi.",
    path: "/dansklasser",
    ogTitle: "Dansklasser | Femme Fusion",
    ogDescription:
        "Dansklasser för företag och privata grupper. Anpassat efter nivå, grupp och tillfälle.",
    twitterTitle: "Dansklasser | Femme Fusion",
    twitterDescription:
        "Boka dansklass för företag eller privat. Peppande, inkluderande och professionellt.",
    breadcrumbs: [
        { name: "Dansklasser", path: "/dansklasser" },
    ],
});
</script>
