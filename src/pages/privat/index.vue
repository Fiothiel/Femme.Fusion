<template>
    <div class="content show-hub">
        <section class="section">
            <div class="section__content">
                <h1>Privata tillfällen</h1>
                <p>
                    Vi skapar <strong>minnesvärda upplevelser för privata fester och firanden</strong>.
                    Välj mellan show eller dansklass och sätt rätt stämning för ert tillfälle.
                </p>
            </div>
        </section>

        <section class="section section--wide">
            <div class="section__content">
                <ul class="show-hub__cards">
                    <li>
                        <CardLink to="/privat/show" :external="false" :icon="null">
                            <h2>Show till privat fest</h2>
                            <p>
                                Ett wow-nummer eller en hel show. Perfekt för födelsedag,
                                jubileum eller fest.
                            </p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/privat/dansklass" :external="false" :icon="null">
                            <h2>Dansklass till privat tillfälle</h2>
                            <p>
                                Möhippa, kompisgäng eller firande. Lättsamt, peppande
                                och anpassat efter er nivå.
                            </p>
                        </CardLink>
                    </li>
                </ul>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <p>
                    Har du en idé eller ett datum i åtanke?
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>
                    så hjälper vi dig vidare.
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
    title: "Privata tillfällen | Femme Fusion - show och dans till fest",
    description:
        "Boka show eller dansklass till privata tillfällen som möhippa, födelsedag och fest. Femme Fusion skapar minnesvärda upplevelser.",
    path: "/privat",
    ogTitle: "Privata tillfällen | Femme Fusion",
    ogDescription:
        "Show och dansklass till privata fester och firanden.",
    twitterTitle: "Privata tillfällen | Femme Fusion",
    twitterDescription:
        "Boka show eller dansklass till privat tillfälle.",
    breadcrumbs: [
        { name: "Privat", path: "/privat" },
    ],
});
</script>
