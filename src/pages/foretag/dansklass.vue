<template>
    <div class="book content">
        <section class="section" aria-labelledby="dance-title">
            <div class="section__content">
                <h1 id="dance-title">Dansklass för företag</h1>
                <p>
                    Ge teamet en aktivitet som höjer energin direkt. Våra <strong>dansklasser</strong> passar perfekt
                    för
                    kickoff, konferens, afterwork och teambuilding. Upplägget är lättsamt, tryggt och anpassat för
                    blandade
                    nivåer så att alla kan vara med.
                </p>
                <p>
                    Välj en stil som matchar ert event, till exempel feminine vibe, cabaret, street eller en
                    skräddarsydd mix.
                    Vi leder tydligt, tar hand om gruppen och ser till att det känns proffsigt hela vägen.
                </p>
                <p>
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink> med datum, plats
                    och
                    ungefärligt antal deltagare, så återkommer vi med upplägg och pris. Du kan också kolla in våra kommande
                    <NuxtLink class="link link--accent" to="/kurser">öppna klasser</NuxtLink>.
                </p>
                <p>
                    Söker ni underhållning på scen? Läs mer om våra
                    <NuxtLink class="link link--accent" to="/foretag/show">shower för företagsevent</NuxtLink>.
                </p>
            </div>
        </section>

        <section class="section section--full-width section--carousel">
            <div class="section__content">
                <Splide :data-splide="options" class="carousel">
                    <SplideSlide v-for="image in images" :key="image.src">
                        <figure>
                            <NuxtImg class="book__image image" :src="image.src" sizes="md:1280px 100vw"
                                :alt="image.alt" />
                            <figcaption>Foto: {{ image.photographer }}</figcaption>
                        </figure>
                    </SplideSlide>
                </Splide>
            </div>
        </section>

        <section class="section" id="dance-offer">
            <div class="section__content">
                <h2>Så funkar en dansklass med oss</h2>
                <p>
                    Vi skapar en stund där alla känner sig inkluderade och trygga, oavsett erfarenhet. Fokus ligger på
                    energi,
                    samspel och rörelseglädje. Ni behöver inte kunna dansa för att få ut massor av upplevelsen.
                </p>
                <p>
                    Vi börjar med en enkel uppvärmning och går sedan över till koreografi som anpassas efter gruppen. Om
                    ni vill
                    filma en kort del på slutet löser vi det, perfekt som minne eller internt content.
                </p>
                <p>
                    Vi utgår från Linköping men håller <strong>dansklasser i hela Sverige</strong>, i er lokal eller i
                    en lokal vi
                    hjälper till att ordna.
                </p>
            </div>
        </section>

        <section class="section section--airy" id="testimonials">
            <div class="section__content">
                <Testimonials heading="Röster från deltagare" :testimonials="testimonials" />
            </div>
        </section>

        <section class="section" id="book">
            <div class="section__content">
                <h2>Boka dansklass för företag</h2>
                <p>
                    Vill ni boka en dansklass till er kickoff eller teambuilding? Skriv gärna datum, plats, antal
                    deltagare och
                    vilken känsla ni vill ha så återkommer vi med ett tydligt upplägg och prisförslag. Osäker på vad som
                    passar?
                    Hör av er så guidar vi er rätt.
                </p>
                <div class="section__buttons">
                    <NuxtLink to="/kontakt" class="button">Skicka förfrågan</NuxtLink>
                    <NuxtLink to="/kurser" class="button button--secondary">Se alla datum</NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import type IImageInfo from '@/interfaces/IImageInfo';
import { useTestimonials } from '~/services/testimonials-service';
import { useUtils } from '@/utils';
import { applyPageSeo } from '~/services/seo-service';

onMounted(() => {
    useUtils().scrollToMain();
});

const testimonials = useTestimonials().getDanceclass();

const options = JSON.stringify({
    type: 'loop',
    autoplay: false,
    perPage: 3,
    focus: 'center',
    speed: 1500,
    autoWidth: true,
    gap: '0.5rem',
    breakpoints: { 900: { perPage: 1 } }
});

const images: Ref<IImageInfo[]> = ref([
    {
        src: '/images/danceclass/carousel/danceclass-01.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Deltagare på dansklass utför koreografi i grupp i ljus dansstudio.'
    },
    {
        src: '/images/danceclass/carousel/danceclass-04.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Gruppdansklass där deltagare tränar koreografi tillsammans i studio.'
    },
    {
        src: '/images/danceclass/carousel/danceclass-07.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Dansklass i studio med gemensam uppvärmning och rörelseövningar.'
    },
    {
        src: '/images/danceclass/carousel/danceclass-08.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Deltagare på dansklass tränar koreografi i inspirerande och trygg miljö.'
    },
    {
        src: '/images/danceclass/carousel/danceclass-09.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Gruppdansklass där deltagare utvecklar teknik, uttryck och rörelse.'
    },
    {
        src: '/images/danceclass/carousel/danceclass-05.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Dansklass med fokus på rörelse, koordination och scennärvaro.'
    },
]);

applyPageSeo({
    title: "Dansklass för företag | Femme Fusion - kickoff & teambuilding",
    description:
        "Boka dansklass för företag med Femme Fusion. Perfekt för kickoff, konferens, afterwork och teambuilding. Tryggt, roligt och anpassat för blandade nivåer. Vi utgår från Linköping och kommer till er i hela Sverige.",
    path: "/foretag/dansklass",
    ogTitle: "Dansklass för företag | Femme Fusion",
    ogDescription:
        "Dansklass för kickoff och teambuilding. Vi anpassar nivå och upplägg så att hela gruppen kan vara med.",
    twitterTitle: "Dansklass för företag | Femme Fusion",
    twitterDescription:
        "Boka dansklass till kickoff och teambuilding. Skicka förfrågan idag.",
    image: "https://femmefusion.se/images/danceclass/carousel/danceclass-02.webp",
    faqKey: "faq-dansklass-foretag",
    faq: [
        {
            question: "Behöver vi ha danserfarenhet för att boka en dansklass?",
            answer:
                "Nej. Vi anpassar nivå och tempo så att alla kan vara med, även om ni aldrig har dansat förut.",
        },
        {
            question: "Hur lång är en dansklass för företag?",
            answer:
                "Vanligtvis 60-90 minuter, men vi kan anpassa längd och upplägg efter ert schema.",
        },
        {
            question: "Vilka stilar kan vi välja mellan?",
            answer:
                "Ni kan välja till exempel feminine vibe, cabaret, street eller en skräddarsydd mix som passar ert event.",
        },
        {
            question: "Kan ni hålla dansklassen i vår lokal?",
            answer:
                "Ja. Vi kan komma till er, eller hjälpa till att ordna lokal vid behov.",
        },
    ],
    breadcrumbs: [
        { name: "Företag", path: "/foretag" },
        { name: "Dansklass för företag", path: "/foretag/dansklass" },
    ],
});
</script>
