<template>
    <div class="book content">
        <section class="section" aria-labelledby="company-show-title">
            <div class="section__content">
                <h1 id="company-show-title">Show till företagsevent</h1>
                <p>
                    Vi erbjuder en skräddarsydd show med dans, sång och scenunderhållning. Vi skapar
                    välrepeterade och visuellt uttrycksfulla nummer som inkluderar olika dansstilar och uttryck, för en
                    varierad och dynamisk helhet.
                </p>
                <p>
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink> så tar vi fram ett
                    upplägg som passar just ert event.

                </p>
                <p>
                    Söker ni en aktivitet i stället för ett sceninslag? Läs mer om
                    <NuxtLink class="link link--accent" to="/foretag/dansklass">dans som kick-off &amp; teambuilding
                    </NuxtLink>.
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

        <section class="section section--airy" aria-labelledby="company-show-setup">
            <div class="section__content">
                <h2 id="company-show-setup">Upplägg som passar ert event</h2>

                <p>
                    Våra shower varierar i uttryck och format, men alltid professionellt genomförda. Vi skapar allt från
                    moderna och rockiga nummer till 20-talsinspirerade teman, till glittriga nummer fyllda med glamour.
                    Showen formas efter er publik, ert event och den känsla ni vill uppnå.
                </p>

                <p>
                    Vi hjälper er att välja ett upplägg som passar kvällens tempo och helhet. Är ni osäkra på vad som
                    blir lagom? Berätta om ert event, så tar vi fram ett genomtänkt och tryggt förslag. Ni får en
                    dedikerad kontaktperson som guidar er genom hela processen.
                </p>
            </div>
        </section>

        <section class="section section--compact section--darkred section--airy" aria-labelledby="company-show-offer">
            <div class="section__content">
                <h3 id="company-show-offer">I korthet</h3>
                <ul class="company-features">
                    <li><strong>Passar för:</strong> konferensmiddag, gala, invigning, kundevent, julfest och kickoff
                    </li>
                    <li><strong>Format:</strong> från ett kort sceninslag till en sammanhållen show eller flera inslag
                        under kvälle.</li>
                    <li><strong>Uttryck:</strong> från elegant och stilrent till mer kaxigt och energifyllt</li>
                    <li><strong>Tryggt upplägg:</strong> vi anpassar efter scen, yta och teknik på plats</li>
                </ul>
            </div>
        </section>


        <section class="section" aria-labelledby="company-show-next">
            <div class="section__content">
                <NuxtLink to="/kontakt" class="button button--cta">Skicka förfrågan</NuxtLink>
            </div>
        </section>

        <section class="section section--airy" id="testimonials">
            <div class="section__content">
                <Testimonials heading="Ord från våra kunder"
                    preamble="Så här beskriver våra kunder upplevelsen av att arbeta med oss."
                    :testimonials="testimonials" />
            </div>
        </section>

        <section class="section" aria-labelledby="company-show-next">
            <div class="section__content">
                <h2 id="company-show-next">Nästa steg</h2>
                <p>
                    Berätta datum, plats och ungefär vilken känsla ni vill skapa, så återkommer vi med ett förslag som
                    passar just er.
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
import { useTestimonials } from "~/services/testimonials-service";
import { applyPageSeo } from "~/services/seo-service";

onMounted(() => {
    useUtils().scrollToMain();
});

const testimonials = useTestimonials().getShow();

const options = JSON.stringify({
    type: "loop",
    autoplay: false,
    perPage: 3,
    focus: "center",
    speed: 1500,
    autoWidth: true,
    gap: "0.5rem",
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
        alt: "Tre showartister uppträder i ett synkroniserat stolnummer med fjäderfantasier under en professionell scenföreställning."
    },
    {
        src: "/images/show/show-arbis-hoog-2.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister uppträder på stolar i glittrande scenkostymer, upplysta av rosa och lila scenljus under ett elegant nummer."
    },
    {
        src: "/images/show/show-skylten-kimv-4.webp",
        photographer: "Kim Vestbrant",
        alt: "Två showartister genomför ett stilrent och kontrollerat stolnummer under en professionell scenproduktion."
    },
    {
        src: "/images/show/show-skylten-må-2.webp",
        photographer: "Mattias Åström",
        alt: "Två showartister sjunger live på scen med mikrofoner under en välproducerad scenföreställning."
    },
    {
        src: "/images/show/show-arbis-hoog-3.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister sjunger och uppträder i duo på scen med tydlig scennärvaro och publikfokus."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-1.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartister uppträder i ett koreograferat gruppnummer på scen under en energifylld men kontrollerad föreställning."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-3.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartister genomför ett sceniskt gruppnummer med tydlig koreografi och scenljus."
    },
    {
        src: "/images/show/show-dv-24.webp",
        photographer: "StormPhoto",
        alt: "Fyra showartister uppträder utomhus med sång och koreografi under ett större event."
    },
    {
        src: "/images/show/show-skylten-kimv-5.webp",
        photographer: "Kim Vestbrant",
        alt: "Showartist uppträder i ett solonummer med stol under en professionell scenföreställning."
    },
    {
        src: "/images/show/show-arbis-hoog-1.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartist sjunger live på scen i ett svartvitt foto med fokus på sång och scennärvaro."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-2.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister uppträder i ett mer uttrycksfullt duo-nummer med tydlig attityd och energi."
    }
]);


applyPageSeo({
    title: "Show till företagsevent | Femme Fusion",
    description:
        "Boka Femme Fusion till företagsevent, middag eller gala. Professionell show med dans, sång och scenuttryck. Tydligt upplägg och trygg leverans. Skicka förfrågan.",
    path: "/foretag/show",
    ogTitle: "Show till företagsevent | Femme Fusion",
    ogDescription:
        "Professionell show med dans, sång och scenuttryck till företagsevent, middagar och officiella sammanhang.",
    twitterTitle: "Show till företagsevent | Femme Fusion",
    twitterDescription:
        "Boka show med dans, sång och scenenergi till företagsevent. Tydligt upplägg och trygg leverans. Skicka förfrågan.",
    faqKey: "faq-company-show",
    faq: [
        {
            question: "Behöver vi en scen för att boka er?",
            answer:
                "Nej. Vi kan uppträda på scen, dansgolv eller en öppen yta. Vi anpassar upplägget efter lokalen och era förutsättningar.",
        },
        {
            question: "Kan ni anpassa tonen så det passar en företagsmiddag?",
            answer:
                "Ja. Vi anpassar scenuttryck och tonalitet efter sammanhanget så att det känns professionellt och passar er publik.",
        },
        {
            question: "Reser ni utanför Linköping?",
            answer:
                "Ja. Vi utgår från Linköping men uppträder på event i hela Sverige.",
        },
    ],
    breadcrumbs: [
        { name: "Företag", path: "/foretag" },
        { name: "Show till företagsevent", path: "/foretag/show" },
    ],
});
</script>
