<template>
    <div class="book content content--center">
        <!-- Intro -->
        <section aria-labelledby="dance-title">
            <h1 id="dance-title">Dansklass - gruppbokning eller privatlektion</h1>
            <p>
                Skapa minnen med vänner eller kollegor eller unna dig en privatlektion! Våra
                <strong>dansklasser</strong> passar
                perfekt för möhippor, födelsedagar, teambuilding eller när du helt enkelt bara vill dansa.
                Välj mellan burlesque, feminine vibe, heels, street, cabaret eller en skräddarsydd mix. Prata med oss så
                hittar vi det som passar för dig.
                Vi anpassar nivå, tempo och känsla efter just er grupp eller dina individuella mål.
            </p>
            <p>
                <NuxtLink class="link link--accent" to="/kontakt">Kontakta oss</NuxtLink> för förslag och bokning.
            </p>
            <p>
                Är ni ute efter underhållning på scen istället? Läs mer om våra
                <NuxtLink class="link link--accent" to="/bokning/show">shower</NuxtLink>.
            </p>
        </section>

        <section>
            <div class="book__images book__images--dance-class">
                <Splide :data-splide="options">
                    <SplideSlide v-for="image in images" :key="image.imageName">
                        <figure>
                            <NuxtImg class="book__image" :src="image.imageName" sizes="md:960px 100vw"
                                :alt="image.description" />
                            <figcaption>Foto: {{ image.photographer }}</figcaption>
                        </figure>
                    </SplideSlide>
                </Splide>
            </div>
        </section>

        <section aria-labelledby="dance-offer">
            <h2 id="dance-offer">En klass med oss</h2>
            <p>
                Vårt mål är att skapa en stund där alla känner sig trygga, snygga och fyllda av dansglädje, oavsett
                tidigare erfarenhet. Det viktigaste är inte stegen i sig, utan att ni får skratta och njuta av dansen.
            </p>
            <p>
                Klassen börjar med en uppvärmning för att sedan gå över till koreografi som anpassas efter er grupps
                nivå och önskemål. Vi ser alltid till att det finns tid på slutet om ni vill filma
                er dans, så att ni får ett roligt minne att ta med er hem.
            </p>
            <p>
                Vi utgår från Linköping men håller <strong>dansklasser i hela Sverige</strong>, i er lokal eller i en
                lokal vi
                hjälper till att ordna.
            </p>
        </section>


        <section aria-labelledby="dance-next">
            <h2 id="dance-next">Nästa steg</h2>
            <p>
                Skriv gärna datum, plats, antal deltagare och önskad stil, så återkommer vi med ett upplägg och
                prisförslag.
            </p>
            <NuxtLink to="/kontakt" class="button button--cta">Skicka förfrågan</NuxtLink>
        </section>
    </div>
</template>


<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import IImageInfo from '@/interfaces/IImageInfo'

const canonicalUrl = 'https://femmefusion.se/bokning/dansklass'

useSeoMeta({
    title: 'Boka dansklass | Femme Fusion – workshop & prova på för event',
    description:
        'Boka dansklass eller prova på med Femme Fusion. Energigivande workshop med burlesque-inspiration för kickoff, möhippa och företagsevent – i Linköping, Östergötland och i hela Sverige.',
    ogTitle: 'Boka dansklass | Femme Fusion',
    ogDescription:
        'Prova på-pass och skräddarsydda workshops som höjer stämningen på ert event. Vi kommer till er – i hela Sverige.',
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
                        "text": " Ni kan välja mellan burlesque, feminine vibe, heels, street, cabaret eller en skräddarsydd mix."
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

const options = JSON.stringify({
    type: 'loop',
    autoplay: false,
    perPage: 3,
    focus: 'center',
    speed: 1500,
    autoWidth: true,
    gap: '0.5rem',
    breakpoints: { 900: { perPage: 1 } }
})

const images: Ref<IImageInfo[]> = ref([
    { imageName: '/images/great-gatsby.jpg', photographer: 'Mattias Kannerstål', description: 'Gatsbyvibbar med flapper' },
    { imageName: '/images/groupbooking-burlesque.jpg', photographer: 'Mattias Kannerstål', description: 'Burlesque och korsetter' },
    { imageName: '/images/groupbooking-heels.jpg', photographer: 'Daniel Häggmyr', description: 'Höga pleaser shoes i sensual heels' }
])
</script>