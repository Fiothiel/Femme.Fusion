<template>
    <div class="book content content--center">
        <section aria-labelledby="show-title">
            <h1 id="show-title">Show</h1>
            <p>
                Att stå på scen är vår specialitet. Med en mångsidig repertoar levererar vi underhållning som passar
                både företagsevent och privata tillställningar. Vi skräddarsyr shower utifrån ert varumärke, publik och
                scen.
            </p>
            <p>
                <NuxtLink class="link link--accent" to="/kontakt">Kontakta oss</NuxtLink> för offert och bokning.
            </p>
            <p>
                Vill ni hellre själva dansa? Läs mer om våra
                <NuxtLink class="link link--accent" to="/bokning/dansklass">dansklasser</NuxtLink>.
            </p>
        </section>
        <section>
            <div class="book__images">
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
        <section aria-labelledby="show-offer">
            <h2 id="show-offer">Vad vi erbjuder</h2>
            <p>
                Ingen show är den andra lik, och det är precis så vi vill ha det. Ibland gör vi ett kort inslag på ett
                par
                minuter som blir kvällens överraskning, ibland bygger vi upp en hel kväll med flera nummer och olika
                teman.
                Oavsett om ni önskar glitter och glamour, burlesque med humoristisk twist eller något helt skräddarsytt,
                så
                formar vi showen efter era behov och publik.
            </p>

            <p>
                Vi utgår från Linköping men tar våra shower till scener, företag och fester i hela Sverige.
                Vart ni än är, kan vi skapa en upplevelse som lyfter ert event.
            </p>
        </section>
        <section aria-labelledby="show-next">
            <h2 id="show-next">Nästa steg</h2>
            <p>
                Berätta om datum, plats och vilken känsla ni vill skapa så återkommer vi med ett förslag som passar just
                er.
            </p>
            <NuxtLink to="/kontakt" class="button button--cta">Skicka förfrågan</NuxtLink>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import IImageInfo from "../../interfaces/IImageInfo";

const canonicalUrl = 'https://femmefusion.se/bokning/show'

useSeoMeta({
  title: 'Boka show | Femme Fusion - underhållning i Sverige & Östergötland',
  description:
    'Boka show med Femme Fusion. Glittrande nummer, temashower och kundanpassad underhållning för företagsevent och fester - i Linköping, Östergötland och hela Sverige.',
  ogTitle: 'Boka show | Femme Fusion',
  ogDescription:
    'Kundanpassade shownummer - glitter, glamour och burlesque med modern edge. Vi uppträder i hela Sverige.',
  ogUrl: canonicalUrl,
  ogImage: 'https://femmefusion.se/images/meta.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Boka show | Femme Fusion',
  twitterDescription:
    'Glittrande, skräddarsydd underhållning för företag och fester. Boka Femme Fusion.',
  twitterImage: 'https://femmefusion.se/images/meta.jpg'
});


useHead({ link: [{ rel: 'canonical', href: canonicalUrl }] });

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ni skräddarsy ett tema för vårt event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Vi anpassar nummer, kostym och musik efter ert varumärke, publik och scen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Uppträder ni utanför Linköping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Vi utgår från Linköping men uppträder i hela Östergötland och i övriga Sverige.'
      }
    }
  ]
};

useHead({
  script: [
    {
      key: 'faq-show',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faq)
    }
  ]
});


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
        imageName: "/images/show/show-skylten-kimv-1.webp",
        photographer: "Kim Vestbrant",
        description: "Tre dansare i gula bodysuits poserar med sopkvastar – en lekfull hyllning till showgirls med städkraft och stage presence."
    },
    {
        imageName: "/images/show/show-skylten-kimv-2.webp",
        photographer: "Kim Vestbrant",
        description: "Tre dansare i svarta byxor och glittriga toppar sitter på stolar med vita fjäderviftor – klassisk burlesque med modern edge."
    },
    {
        imageName: "/images/show/show-skylten-kimv-3.webp",
        photographer: "Kim Vestbrant",
        description: "Tre dansare i skoluniform-inspirerade outfits sträcker armarna upp i dramatisk pose – kaxigt, synkat och fullt ös."
    },
    {
        imageName: "/images/show/show-skylten-kimv-4.webp",
        photographer: "Kim Vestbrant",
        description: "Två dansare i vita fransklänningar lutar sig mot stolar – sensuellt, retro och med Hollywood-glamour i varje rörelse."
    },
    {
        imageName: "/images/show/show-skylten-kimv-5.webp",
        photographer: "Kim Vestbrant",
        description: "En dansare i vit fransklänning interagerar med stolen i ett solo – självsäker, lekfull och strålande i scenens spotlight."
    },
    {
        imageName: "/images/show/show-skylten-må-1.webp",
        photographer: "Mattias Åström",
        description: "Två dansare i röda korsetter och fjädrar uppträder med mikrofoner – burlesk glamour och scenisk självsäkerhet med glimten i ögat."
    },
    {
        imageName: "/images/show/show-skylten-må-2.webp",
        photographer: "Mattias Åström",
        description: "Två dansare i glittriga blå toppar och svarta byxor sitter på stolar med mikrofoner i handen – ett lekfullt och självsäkert nummer där sång och flirtig charm går hand i hand."
    },
    {
        imageName: "/images/show/show-dv-24.webp",
        photographer: "StormPhoto",
        description: "Fyra dansare i vita skjortor och svarta shorts framför ett koreograferat nummer utomhus – självsäkra steg med girlboss-energi mitt på stan."
    },
    {
        imageName: "/images/show/show-kulturnatten-kimv-1.webp",
        photographer: "Kim Vestbrant",
        description: "Tre dansare i vita sjuksköterske-outfits spelar upp en teatralisk scen där en person i hoodie ”behandlas” – en komisk och provocerande twist på sjukvård."
    },
    {
        imageName: "/images/show/show-kulturnatten-kimv-2.webp",
        photographer: "Kim Vestbrant",
        description: "Dansare i polis- och streetkläder interagerar i en fängslande duo – dominans möter rebell i en scen med humor och edge."
    },
    {
        imageName: "/images/show/show-kulturnatten-kimv-3.webp",
        photographer: "Kim Vestbrant",
        description: "En dansare fångad i ett uttrycksfullt ögonblick, bakåtlutad med håret i rörelse – rå känsla och frihet i svartvitt."
    },
    {
        imageName: "/images/show/show-kulturnatten-kimv-4.webp",
        photographer: "Kim Vestbrant",
        description: "Tre dansare i glittrande scenkläder i en laddad formation – kroppar i synk, ansiktsuttryck i extas och rörelser med känsla."
    },
]);
</script>