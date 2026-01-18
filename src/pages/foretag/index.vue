<template>
    <div class="content show-hub">
        <section class="section">
            <div class="section__content">
                <h1>Företagsevent</h1>
                <p>
                    Femme Fusion erbjuder <strong>professionell underhållning och dansupplevelser för företag</strong>.
                    Oavsett om ni söker en show eller en aktiv dansklass hjälper vi er skapa rätt känsla för ert event.
                </p>
            </div>
        </section>

        <section class="section section--wide">
            <div class="section__content">
                <ul class="show-hub__cards">
                    <li>
                        <CardLink to="/foretag/show" :external="false" :icon="null">
                            <h2>Show till företagsevent</h2>
                            <p>
                                Scenföreställning med dans och sång. Passar kickoff, middag, konferens
                                eller lansering.
                            </p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/foretag/dansklass" :external="false" :icon="null">
                            <h2>Dansklass & teambuilding</h2>
                            <p>
                                En energifylld och inkluderande aktivitet som stärker gruppen
                                och skapar gemenskap.
                            </p>
                        </CardLink>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <p>
                    Vill du bolla upplägg eller få en offert?
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>
                    så återkommer vi med förslag.
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
    title: "Företagsevent | Femme Fusion - show och dans för företag",
    description:
        "Boka show eller dansklass till företagsevent. Femme Fusion levererar professionell underhållning och teambuilding anpassad efter publik och tillfälle.",
    path: "/foretag",
    ogTitle: "Företagsevent | Femme Fusion",
    ogDescription:
        "Show och dansklass för kickoff, konferens och företagsevent.",
    twitterTitle: "Företagsevent | Femme Fusion",
    twitterDescription:
        "Boka show eller dansklass till ert företagsevent.",
    breadcrumbs: [
        { name: "Företag", path: "/foretag" },
    ],
});
</script>
