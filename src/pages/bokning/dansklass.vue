<template>
    <div class="book content">
        <section class="section" aria-labelledby="dance-title">
            <div class="section__content">
                <h1 id="dance-title">Dansklass - gruppbokning eller privatlektion</h1>
                <p>
                    Skapa minnen med vänner eller kollegor eller unna dig en privatlektion! Våra
                    <strong>dansklasser</strong> passar
                    perfekt för möhippor, födelsedagar, teambuilding eller när du helt enkelt bara vill dansa.
                    Välj mellan burlesque, feminine vibe, heels, street, cabaret eller en skräddarsydd mix. Prata med
                    oss så
                    hittar vi det som passar för dig.
                    Vi anpassar nivå, tempo och känsla efter just er grupp eller dina individuella mål.
                </p>
                <p>
                    <NuxtLink class="link link--accent" to="/kontakt">Kontakta oss</NuxtLink> för förslag och bokning,
                    eller kolla i vår <NuxtLink class="link link--accent" to="/kalender">kalender</NuxtLink> för
                    kommande datum på öppna klasser.
                </p>
                <p>
                    Är ni ute efter underhållning på scen istället? Läs mer om våra
                    <NuxtLink class="link link--accent" to="/bokning/show">shower</NuxtLink>.
                </p>
            </div>
        </section>

        <section class="section section--full-width section--carousel">
            <div class="section__content">
                <Splide :data-splide="options" class="carousel carousel--vertical">
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
                <h2>En klass med oss</h2>
                <p>
                    Vårt mål är att skapa en stund där alla känner sig trygga, snygga och fyllda av dansglädje, oavsett
                    tidigare erfarenhet. Det viktigaste är inte stegen i sig, utan att ni får skratta och njuta av
                    dansen.
                </p>
                <p>
                    Klassen börjar med en uppvärmning för att sedan gå över till koreografi som anpassas efter er grupps
                    nivå och önskemål. Vi ser alltid till att det finns tid på slutet om ni vill filma
                    er dans, så att ni får ett roligt minne att ta med er hem.
                </p>
                <p>
                    Vi utgår från Linköping men håller <strong>dansklasser i hela Sverige</strong>, i er lokal eller i
                    en
                    lokal vi
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
                <h2>Boka din dansupplevelse</h2>
                <p>
                    Vill du dansa med oss? Anmäl dig till en av våra kommande workshops eller boka en egen dansklass för
                    din grupp.
                    Osäker på vad som passar? Hör av dig så guidar vi dig rätt.
                    För bokning av egen dansklass – skriv gärna datum, plats, antal deltagare och önskad stil, så
                    återkommer vi med ett upplägg och prisförslag.
                </p>
                <div class="section__buttons">
                    <NuxtLink to="/kontakt" class="button">Skicka förfrågan</NuxtLink>
                    <NuxtLink to="/kalender" class="button button--secondary">Se alla datum</NuxtLink>
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
import type IImageInfo from '@/interfaces/IImageInfo'
import { useTestimonials } from '~/services/testimonials-service';
import { useUtils } from '@/utils';

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


// SEO
const canonicalUrl = 'https://femmefusion.se/bokning/dansklass';

useSeoMeta({
    title: 'Boka dansklass | Femme Fusion - workshop & prova på för event',
    description:
                'Boka dansklass med Femme Fusion för möhippa, födelsedag, kickoff eller teambuilding. Välj burlesque, feminine vibe, heels, street, cabaret eller en skräddarsydd mix. Vi anpassar nivå och upplägg – i Linköping och i hela Sverige.',
    ogTitle: 'Boka dansklass | Femme Fusion',
    ogDescription:
                'Dansworkshop för grupper eller privatlektion - burlesque, heels, street, cabaret, feminine vibe eller mix. Tryggt, roligt och anpassat efter er. Vi kommer till er i hela Sverige.',
    ogUrl: canonicalUrl,
    ogImage: 'https://femmefusion.se/images/meta.jpg',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Boka dansklass | Femme Fusion',
    twitterDescription:
        'Rolig, inkluderande dansworkshop för grupper, möhippor och företag. Skicka förfrågan idag.',
    twitterImage: 'https://femmefusion.se/images/meta.jpg'
})

useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Kan vi boka en dansklass även om vi aldrig har dansat förut?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Självklart! Vi anpassar nivå, tempo och känsla efter gruppens erfarenhet, så att alla kan vara med och ha roligt."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Erbjuder ni privatlektioner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ja! Förutom gruppbokningar kan du boka en privatlektion där vi fokuserar helt på dina mål och önskemål."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Vilka dansstilar kan vi välja?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ni kan välja mellan burlesque, feminine vibe, heels (även high heels), street, cabaret, musikal eller en skräddarsydd mix."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hur lång är en klass?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Vanligtvis är våra klasser 60-90 minuter, men vi anpassar längden efter era behov."
                    }
                }
            ]
        })
    }]
});

</script>