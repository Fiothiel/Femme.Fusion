<template>
    <div class="book content">
        <section class="section" aria-labelledby="show-title">
            <div class="section__content">
                <h1 id="show-title">Show</h1>
                <p>
                    Att stå på scen är vår specialitet. Med en mångsidig repertoar levererar vi underhållning som passar
                    både företagsevent och privata tillställningar. Vi skräddarsyr shower utifrån ert varumärke, publik
                    och
                    scen.
                </p>
                <p>
                    <NuxtLink class="link link--accent" to="/kontakt">Kontakta oss</NuxtLink> för offert och bokning.
                </p>
                <p>
                    Vill ni hellre själva dansa? Läs mer om våra
                    <NuxtLink class="link link--accent" to="/bokning/dansklass">dansklasser</NuxtLink>.
                </p>
            </div>
        </section>
        <section>
            <div class="book__images">
                <Splide :data-splide="options" class="carousel">
                    <SplideSlide v-for="image in images" :key="image.src">
                        <figure>
                            <NuxtImg class="book__image image" :src="image.src" sizes="md:960px 100vw"
                                :alt="image.alt" />
                            <figcaption>Foto: {{ image.photographer }}</figcaption>
                        </figure>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
        <section class="section section--airy" aria-labelledby="show-offer">
            <div class="section__content">
                <h2 id="show-offer">Vad vi erbjuder</h2>
                <p>
                    Ingen show är den andra lik, och det är precis så vi vill ha det. Ibland gör vi ett kort inslag på
                    ett par minuter som blir kvällens överraskning, ibland bygger vi upp en hel kväll med flera nummer
                    och olika teman. Oavsett om ni önskar glitter och glamour, humor och energi eller ett mer stilrent
                    scenuttryck formar vi showen efter era behov, er publik och er scen.
                </p>

                <p>
                    Vi utgår från Linköping men tar våra shower till scener, företag och fester i hela Sverige.
                    Vart ni än är, kan vi skapa en upplevelse som lyfter ert event.
                </p>
            </div>
        </section>
        <section class="section section--airy" id="testimonials">
            <div class="section__content">
                <Testimonials heading="Ord från våra kunder" :testimonials="testimonials" />
            </div>
        </section>
        <section class="section" aria-labelledby="show-next">
            <div class="section__content">
                <h2 id="show-next">Nästa steg</h2>
                <p>
                    Berätta om datum, plats och vilken känsla ni vill skapa så återkommer vi med ett förslag som passar
                    just
                    er.
                </p>
                <NuxtLink to="/kontakt" class="button button--cta">Skicka förfrågan</NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import type IImageInfo from "../../interfaces/IImageInfo";
import { useUtils } from "@/utils";
import { useTestimonials } from '~/services/testimonials-service';
import { applyPageSeo } from "~/services/seo-service";

onMounted(() => {
    useUtils().scrollToMain();
});

const testimonials = useTestimonials().getShow();

const options = JSON.stringify({
    type: "loop",
    autoplay: false,
    perPage: 3,
    focus: 'center',
    speed: 1500,
    autoWidth: true,
    gap: '0.5rem',
    breakpoints: {
        900: {
            perPage: 1,
        },
    },
});

const images: Ref<IImageInfo[]> = ref([
    {
        src: "/images/show/show-skylten-kimv-2.webp",
        photographer: "Kim Vestbrant",
        alt: "Tre showartister uppträder på stolar med fjäderfantasier under en professionell scenföreställning."
    },
    {
        src: "/images/show/show-skylten-må-2.webp",
        photographer: "Mattias Åström",
        alt: "Två showartister sjunger live på scen med mikrofoner under en energifylld show."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-1.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartister uppträder i ett koreograferat nummer på scen under en liveföreställning."
    },
    {
        src: "/images/show/show-arbis-hoog-2.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister uppträder på stolar i glittrande scenkostymer, upplysta av rosa och lila scenljus under en professionell show."
    },
    {
        src: "/images/show/show-dv-24.webp",
        photographer: "StormPhoto",
        alt: "Fyra showartister uppträder utomhus med sång och koreografi under en energifylld scenföreställning."
    },
    {
        src: "/images/show/show-skylten-kimv-5.webp",
        photographer: "Kim Vestbrant",
        alt: "Showartist uppträder i ett solonummer med stol under en professionell scenföreställning."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-2.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister uppträder i duo på scen med tydlig koreografi och scennärvaro."
    },
    {
        src: "/images/show/show-arbis-hoog-3.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister sjunger och uppträder på scen med mikrofon, fångade i ett live-ögonblick med tydlig scennärvaro."
    },
    {
        src: "/images/show/show-arbis-hoog-1.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartist sjunger live på scen i svartvitt foto, sittande vid en stol med stark scenkänsla och fokus på sång."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-3.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartister uppträder i ett sceniskt nummer under en professionell liveföreställning."
    },
    {
        src: "/images/show/show-skylten-kimv-4.webp",
        photographer: "Kim Vestbrant",
        alt: "Två showartister uppträder på stolar i glittrande scenkostymer under en elegant danssekvens."
    },
]);

applyPageSeo({
    title: "Boka show | Femme Fusion - showartister för event i hela Sverige",
    description:
        "Boka show med Femme Fusion. Show med dans, sång och glamour. Kundanpassade nummer och temashower för företagsevent, bröllop, möhippor och privata fester i Linköping, Östergötland och hela Sverige.",
    path: "/bokning/show",
    ogTitle: "Boka show | Femme Fusion",
    ogDescription:
        "Show med dans, sång och stark scennärvaro. Kundanpassade nummer och temashower för event i hela Sverige.",
    twitterTitle: "Boka show | Femme Fusion",
    twitterDescription:
        "Boka show med dans, sång och glamour. Kundanpassade nummer för företagsevent och fester i hela Sverige.",
    faqKey: "faq-show",
    faq: [
        {
            question: "Kan ni skräddarsy ett tema för vårt event?",
            answer:
                "Ja! Vi anpassar nummer, kostym och musik efter ert varumärke, publik och scen.",
        },
        {
            question: "Uppträder ni utanför Linköping?",
            answer:
                "Absolut. Vi utgår från Linköping men uppträder på event och scener i hela Sverige.",
        },
    ],
    breadcrumbs: [
        { name: "Bokning", path: "/bokning" },
        { name: "Boka show", path: "/bokning/show" },
    ],
});

</script>