<template>
    <div class="content show-hub">
        <section class="section">
            <div class="section__content">
                <h1>Show</h1>
                <p>
                    Vi är Femme Fusion. Vi levererar en dynamisk <strong>scenföreställning</strong> med dans, sång och starkt
                    scenuttryck, ofta med en liten inspiration av burlesque. Välj det spår som passar dig så guidar vi dig
                    rätt direkt.
                </p>
            </div>
        </section>

        <section class="section section--wide">
            <div class="section__content">
                <ul class="show-hub__cards">
                    <li>
                        <CardLink to="/foretag/show" :external="false">
                            <h2>Show till företagsevent</h2>
                            <p>Kickoff, middag, konferens eller lansering. Proffsigt, snyggt och lätt att planera.</p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/privat/show" :external="false">
                            <h2>Show till privata tillfällen</h2>
                            <p>Födelsedag, jubileum eller fest. Ett wow-nummer eller en hel show, ni väljer känslan.</p>
                        </CardLink>
                    </li>
                </ul>
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
import { useUtils } from '@/utils';
import CardLink from '@/components/cardlink/CardLink.vue';
import { applyPageSeo } from '@/services/seo-service';

onMounted(() => {
    useUtils().scrollToMain();
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
