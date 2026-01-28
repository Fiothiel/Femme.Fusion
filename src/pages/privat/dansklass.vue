<template>
    <div class="book content">
        <section class="section" aria-labelledby="dance-title">
            <div class="section__content">
                <h1 id="dance-title">Dansklass för möhippa, fest eller privatlektion</h1>
                <p>
                    Vill ni göra något som känns både kul och minnesvärt? Våra <strong>dansklasser</strong> passar perfekt för
                    möhippor, födelsedagar, kompisgäng eller när du vill unna dig en privatlektion. Det blir tryggt, peppande
                    och anpassat efter er, oavsett nivå.
                </p>
                <p>
                    Välj mellan burlesque, feminine vibe, heels, street, cabaret eller en skräddarsydd mix. Ni väljer känslan
                    så fixar vi upplägget. På slutet finns det tid om ni vill filma en del av koreografin, så att ni får ett
                    roligt minne att ta med er hem.
                </p>
                <p>
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink> för bokning, eller kolla in våra kommande
                    <NuxtLink class="link link--accent" to="/kurser">öppna klasser</NuxtLink>.
                </p>
                <p>
                    Är ni ute efter underhållning på scen istället? Läs mer om våra
                    <NuxtLink class="link link--accent" to="/show">shower</NuxtLink>.
                </p>
            </div>
        </section>

        <section class="section section--full-width section--carousel">
            <div class="section__content">
                <Splide :data-splide="options" class="carousel">
                    <SplideSlide v-for="image in images" :key="image.src">
                        <figure>
                            <NuxtImg class="book__image image" :src="image.src" sizes="md:1280px 100vw" :alt="image.alt" />
                            <figcaption>Foto: {{ image.photographer }}</figcaption>
                        </figure>
                    </SplideSlide>
                </Splide>
            </div>
        </section>

        <section class="section" id="dance-offer">
            <div class="section__content">
                <h2>En klass med oss</h2>
                <p>
                    Vårt mål är att skapa en stund där alla känner sig trygga, snygga och fyllda av dansglädje, oavsett tidigare
                    erfarenhet. Det viktigaste är inte stegen i sig, utan att ni får skratta, känna er fria och ha kul
                    tillsammans.
                </p>
                <p>
                    Klassen börjar med uppvärmning och går sedan över i koreografi som anpassas efter er grupp eller dina
                    individuella mål. Vi hjälper er med teknik, uttryck och känsla på ett sätt som känns snällt men tydligt.
                </p>
                <p>
                    Vi utgår från Linköping men håller <strong>dansklasser i hela Sverige</strong>, i er lokal eller i en lokal
                    vi hjälper till att ordna.
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
                <h2>Boka din dansklass</h2>
                <p>
                    Vill ni boka en egen dansklass? Skriv gärna datum, plats, antal deltagare och önskad stil så återkommer vi
                    med ett upplägg och prisförslag. Osäker på vad som passar? Hör av dig så guidar vi dig rätt.
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
        src: '/images/danceclass/danceclass-01.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Deltagare på dansklass utför koreografi i grupp i ljus dansstudio.'
    },
    {
        src: '/images/danceclass/danceclass-02.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Dansklass med flera deltagare som tränar rörelser och steg i spegelsal.'
    },
    {
        src: '/images/danceclass/danceclass-03.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Deltagare på dansklass övar armrörelser och uttryck i gemensam koreografi.'
    },
    {
        src: '/images/danceclass/danceclass-04.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Gruppdansklass där deltagare tränar koreografi tillsammans i studio.'
    },
    {
        src: '/images/danceclass/danceclass-05.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Dansklass med fokus på rörelse, koordination och scennärvaro.'
    },
    {
        src: '/images/danceclass/danceclass-06.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Deltagare på dansklass följer koreograferade instruktioner i grupp.'
    },
    {
        src: '/images/danceclass/danceclass-07.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Dansklass i studio med gemensam uppvärmning och rörelseövningar.'
    },
    {
        src: '/images/danceclass/danceclass-08.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Deltagare på dansklass tränar koreografi i inspirerande och trygg miljö.'
    },
    {
        src: '/images/danceclass/danceclass-09.webp',
        photographer: 'Hampus Zetterblom',
        alt: 'Gruppdansklass där deltagare utvecklar teknik, uttryck och rörelse.'
    },
]);

applyPageSeo({
    title: "Boka dansklass | Femme Fusion - möhippa, fest & privatlektion",
    description:
        "Boka dansklass med Femme Fusion för möhippa, födelsedag, kompisgäng eller privatlektion. Välj burlesque, feminine vibe, heels, street, cabaret eller en skräddarsydd mix. Vi anpassar nivå och upplägg i Linköping och i hela Sverige.",
    path: "/privat/dansklass",
    ogTitle: "Boka dansklass | Femme Fusion",
    ogDescription:
        "Dansklass för möhippa, fest eller privatlektion. Tryggt, roligt och anpassat efter er. Vi kommer till er i hela Sverige.",
    twitterTitle: "Boka dansklass | Femme Fusion",
    twitterDescription:
        "Boka dansklass för möhippa och grupper. Skicka förfrågan idag.",
    image: "https://femmefusion.se/images/danceclass/danceclass-02.webp",
    faqKey: "faq-dansklass-privat",
    faq: [
        {
            question: "Kan vi boka en dansklass även om vi aldrig har dansat förut?",
            answer:
                "Självklart. Vi anpassar nivå och tempo så att alla kan vara med och känna sig trygga.",
        },
        {
            question: "Kan vi boka privatlektion?",
            answer:
                "Ja. Privatlektion passar om du vill fokusera på teknik, uttryck eller en koreografi som känns helt rätt för dig.",
        },
        {
            question: "Vilka dansstilar kan vi välja?",
            answer:
                "Ni kan välja mellan burlesque, feminine vibe, heels, street, cabaret, musikal eller en skräddarsydd mix.",
        },
        {
            question: "Hur lång är en klass?",
            answer:
                "Vanligtvis är våra klasser 60-90 minuter, men vi anpassar längden efter era behov.",
        },
    ],
    breadcrumbs: [
        { name: "Privat", path: "/privat" },
        { name: "Boka dansklass", path: "/privat/dansklass" },
    ],
});
</script>
