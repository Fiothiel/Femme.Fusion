<template>
    <div class="book content">
        <!-- Intro -->
        <section class="section" aria-labelledby="private-show-title">
            <div class="section__content">
                <h1 id="private-show-title">Show till privat fest</h1>
                <p>
                    En show som överraskar, engagerar och sätter stämningen för hela kvällen.
                    Femme Fusion levererar <strong>dans, sång och scenenergi</strong> som blir
                    ett minne gästerna pratar om långt efter festen.
                </p>
                <p>
                    Det kan vara kvällens oväntade höjdpunkt, ett inslag som bryter av middagen
                    eller flera nummer som lyfter stämningen under kvällen. Ni berättar om festen,
                    vi hjälper er hitta ett upplägg som känns rätt.
                </p>
                <p>
                    <NuxtLink class="link link--accent" to="/bokning">
                        Skicka förfrågan
                    </NuxtLink>
                    så guidar vi er vidare.
                </p>
            </div>
        </section>

        <!-- Bilder -->
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

        <!-- Förklarande text -->
        <section class="section section--airy" aria-labelledby="private-show-setup">
            <div class="section__content">
                <h2 id="private-show-setup">En show som lyfter festen</h2>

                <p>
                    Våra shower är varierade i både uttryck och format, men alltid genomförda
                    med närvaro, energi och tydlig scennärvaro. Det kan vara något lekfullt och
                    energifyllt som får gästerna att jubla, eller ett mer elegant nummer som
                    sätter tonen för kvällen.
                </p>

                <p>
                    Lika viktigt som <em>vad</em> som händer är <em>när</em> det händer.
                    Därför hjälper vi er att välja ett upplägg som passar just er fest,
                    oavsett om det är en födelsedag, ett bröllop, ett jubileum eller en privat tillställning.
                </p>

                <p>
                    Ni behöver inte ha allt klart från början. Berätta om festen, lokalen
                    och vilken känsla ni vill skapa, så tar vi fram ett förslag som känns
                    genomtänkt, lagom och kul.
                </p>
            </div>
        </section>

        <!-- Sammanfattning / statement -->
        <section class="section section--compact section--darkred section--airy" aria-labelledby="private-show-summary">
            <div class="section__content">
                <h3 id="private-show-summary" class="section__subheading">I korthet</h3>
                <ul class="company-features">
                    <li><strong>Passar för:</strong> födelsedag, bröllop, jubileum och privat fest.</li>
                    <li><strong>Format:</strong> från ett kort överraskningsnummer till flera inslag under kvällen.</li>
                    <li><strong>Känsla:</strong> lekfull, energifylld eller elegant - ni väljer.</li>
                    <li><strong>Enkelt för er:</strong> vi sköter upplägget och anpassar efter plats och yta.</li>
                </ul>
            </div>
        </section>

        <!-- CTA -->
        <section class="section section--airy" aria-labelledby="private-show-cta">
            <div class="section__content">
                <NuxtLink to="/bokning" class="button button--cta">
                    Skicka förfrågan
                </NuxtLink>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="section section--airy" id="testimonials">
            <div class="section__content">
                <h2>Ord från våra kunder</h2>
                <p class="section__intro">
                    Så här beskriver våra kunder upplevelsen av våra shower.
                </p>
                <Testimonials heading="" :testimonials="testimonials" />
            </div>
        </section>

        <!-- Nästa steg -->
        <section class="section" aria-labelledby="private-show-next">
            <div class="section__content">
                <h2 id="private-show-next">Nästa steg</h2>
                <p>
                    Berätta lite om festen, när den äger rum och vilken känsla ni vill skapa,
                    så återkommer vi med ett förslag som passar just er.
                </p>
                <NuxtLink to="/bokning" class="button button--cta">
                    Skicka förfrågan
                </NuxtLink>
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
        src: "/images/show/show-skylten-kimv-5.webp",
        photographer: "Kim Vestbrant",
        alt: "Showartist uppträder i ett energifyllt solonummer med stol och tydlig närvaro under en festlig scenföreställning."
    },
    {
        src: "/images/show/show-skylten-kimv-2.webp",
        photographer: "Kim Vestbrant",
        alt: "Tre showartister uppträder tillsammans i ett synkroniserat stolnummer med fjäderfantasier."
    },
    {
        src: "/images/show/show-arbis-hoog-1.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartist sjunger live i ett svartvitt foto som fångar ett intimt och starkt scenögonblick."
    },
    {
        src: "/images/show/show-arbis-hoog-3.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister sjunger och dansar tillsammans i ett lekfullt och energifyllt scenmoment."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-2.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister uppträder i ett uttrycksfullt duo-nummer med attityd och stark rörelse."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-3.webp",
        photographer: "Fotograferna Hoog",
        alt: "Showartister genomför ett fartfyllt gruppnummer som skapar stark stämning på scen."
    },
    {
        src: "/images/show/show-todecay-kulturnatten-hoog-1.webp",
        photographer: "Fotograferna Hoog",
        alt: "Koreograferat gruppnummer med tydlig energi och publikfångande rörelse."
    },
    {
        src: "/images/show/show-arbis-hoog-2.webp",
        photographer: "Fotograferna Hoog",
        alt: "Två showartister uppträder på stolar i glittrande kostymer under ett elegant men lekfullt nummer."
    },
    {
        src: "/images/show/show-skylten-kimv-4.webp",
        photographer: "Kim Vestbrant",
        alt: "Två showartister uppträder tillsammans i ett stilfullt och dansant stolnummer."
    },
    {
        src: "/images/show/show-skylten-må-2.webp",
        photographer: "Mattias Åström",
        alt: "Två showartister sjunger live på scen under ett festligt och energifyllt nummer."
    },
    {
        src: "/images/show/show-dv-24.webp",
        photographer: "StormPhoto",
        alt: "Fyra showartister uppträder utomhus under en stor och livfull scenföreställning."
    }
]);


applyPageSeo({
    title: "Show till privat fest | Femme Fusion",
    description:
        "Boka show till privat fest med Femme Fusion. Dans, sång och scenenergi som överraskar och lyfter stämningen på födelsedagar, bröllop och privata tillställningar.",
    path: "/privat/show",
    ogTitle: "Show till privat fest | Femme Fusion",
    ogDescription:
        "En show som överraskar och skapar stämning på festen. Dans och sång som gästerna pratar om långt efteråt.",
    twitterTitle: "Show till privat fest | Femme Fusion",
    twitterDescription:
        "Boka show till privat fest. Dans, sång och scenenergi som gör kvällen minnesvärd.",
    faqKey: "faq-private-show",
    faq: [
        {
            question: "Passar showen även för mindre fester?",
            answer:
                "Ja. Vi anpassar alltid upplägget efter plats, yta och antal gäster så att det känns lagom och genomtänkt.",
        },
        {
            question: "Kan showen vara en överraskning under kvällen?",
            answer:
                "Absolut. Många bokar ett kort överraskningsinslag som blir en naturlig höjdpunkt under festen.",
        },
        {
            question: "Behöver vi ordna teknik själva?",
            answer:
                "Ofta räcker det med enklare förutsättningar. Vi går igenom vad som behövs i förväg och anpassar oss efter platsen.",
        },
    ],
    breadcrumbs: [
        { name: "Privat", path: "/privat" },
        { name: "Show till privat fest", path: "/privat/show" },
    ],
});
</script>
