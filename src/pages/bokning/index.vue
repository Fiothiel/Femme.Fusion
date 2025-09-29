<template>
    <section class="book content content--center">
        <h1>Bokning</h1>
        <p>
            Oavsett om du vill boka en sprakande <strong>show</strong> eller en energifylld <strong>dansklass</strong>
            hjälper vi dig att skapa en upplevelse att minnas. Vi utgår från Linköping men uppträder och håller
            workshops i hela Sverige.
        </p>

        <p>Vi i Femme Fusion erbjuder både skräddarsydda shower och gruppbokningar av dansklasser för olika tillfällen.
            Våra shower passar perfekt till företagsevent, fester och scener i hela Sverige, medan våra dansklasser är
            populära vid möhippor, födelsedagar och teambuildingaktiviteter.</p>

        <ul class="book__cards">
            <li>
                <NuxtLink to="/bokning/show" class="card">
                    <h2>Boka show</h2>
                    <p>Skräddarsydd underhållning för företagsevent, fester och scener.</p>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/bokning/dansklass" class="card">
                    <h2>Boka dansklass</h2>
                    <p>Perfekt för möhippa, födelsedag eller teambuilding - alla nivåer.</p>
                </NuxtLink>
            </li>
        </ul>

        <p>
            Vill du ha hjälp att välja? <NuxtLink class="link link--accent" to="/kontakt">Kontakta oss</NuxtLink>
            med datum, plats och önskemål så återkommer vi med förslag.
        </p>
    </section>
</template>

<script setup lang="ts">
const canonicalUrl = 'https://femmefusion.se/bokning'

useSeoMeta({
  title: 'Bokning | Femme Fusion - show, dansklass & workshops',
  description:
    'Skicka förfrågan för show, dansklass eller workshop. Vi skräddarsyr upplägg för företagsevent, bröllop och privata fester - i Linköping, Östergötland och hela Sverige.',
  ogTitle: 'Bokning | Femme Fusion',
  ogDescription:
    'Boka show, dansklass eller workshop - vi anpassar allt efter publik, tema och scen.',
  ogUrl: canonicalUrl,
  ogImage: 'https://femmefusion.se/images/meta.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Bokning | Femme Fusion',
  twitterDescription:
    'Skicka förfrågan för show, dansklass eller workshop. Vi uppträder i hela Sverige.',
  twitterImage: 'https://femmefusion.se/images/meta.jpg'
})

useHead({ link: [{ rel: 'canonical', href: canonicalUrl }] });

definePageMeta({
    displayInMenu: true,
    menuLabel: 'Bokning',
    order: 2
});
</script>