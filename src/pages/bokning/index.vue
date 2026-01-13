<template>
    <div class="content book">
        <section class="section">
            <div class="section__content">
                <h1>Bokning</h1>
                <p>
                    Oavsett om du vill boka en sprakande <strong>show</strong> eller en energifylld
                    <strong>dansklass</strong>
                    hjälper vi dig att skapa en upplevelse att minnas. Vi utgår från Linköping men uppträder och håller
                    workshops i hela Sverige.
                </p>

                <p>Vi i Femme Fusion erbjuder både skräddarsydda shower och gruppbokningar av dansklasser för olika
                    tillfällen.
                    Våra shower passar perfekt till företagsevent, fester och scener i hela Sverige, medan våra
                    dansklasser
                    är
                    populära vid möhippor, födelsedagar och teambuildingaktiviteter.</p>
            </div>
        </section>
        <section class="section section--wide">
            <div class="section__content">
                <ul class="book__cards">
                    <li>
                        <CardLink to="/bokning/show" :external="false">
                            <h2>Boka show</h2>
                            <p>Skräddarsydd underhållning för företagsevent, fester och scener.</p>
                        </CardLink>
                    </li>
                    <li>
                        <CardLink to="/bokning/dansklass" :external="false">
                            <h2>Boka dansklass</h2>
                            <p>Perfekt för möhippa, födelsedag eller teambuilding - alla nivåer.</p>
                        </CardLink>
                    </li>
                </ul>
            </div>
        </section>
        <section class="section">
            <div class="section__content">
                <p>
                    Vill du ha hjälp att välja? <NuxtLink class="link link--accent" to="/kontakt">Kontakta oss
                    </NuxtLink>
                    med datum, plats och önskemål så återkommer vi med förslag.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useUtils } from '@/utils';
import CardLink from '~/components/cardlink/CardLink.vue';
import { applyPageSeo } from '~/services/seo-service';

onMounted(() => {
    useUtils().scrollToMain();
});

applyPageSeo({
    title: "Bokning | Femme Fusion - boka show eller dansklass i hela Sverige",
    description:
        "Boka show eller dansklass med Femme Fusion. Vi skräddarsyr upplägg för företagsevent, bröllop, möhippor, middagar och privata fester. Vi utgår från Linköping och kommer till er i hela Sverige.",
    path: "/bokning",
    ogTitle: "Bokning | Femme Fusion",
    ogDescription:
        "Boka show eller dansklass. Vi anpassar upplägg efter publik, tema och plats i hela Sverige.",
    twitterTitle: "Bokning | Femme Fusion",
    twitterDescription:
        "Skicka förfrågan för show eller dansklass. Vi utgår från Linköping och jobbar i hela Sverige.",
    breadcrumbs: [
        { name: "Bokning", path: "/bokning" },
    ],
});

</script>