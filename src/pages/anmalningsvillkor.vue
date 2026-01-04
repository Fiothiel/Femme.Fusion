<template>
  <div class="terms content">
    <section class="section">
      <div class="section__content">
        <h1>Anmälnings- och betalningsvillkor</h1>
        <h2>Anmälan</h2>
        <p>
          Anmälan är bindande. Din plats är garanterad först när du får mejl från oss om att du blivit
          antagen.
          Efter antagningsbeskedet skickas faktura via Frilans Finans.
        </p>

        <h2>Betalning</h2>
        <p>
          Betalning sker mot faktura via Frilans Finans. Fakturan har 30 dagars betalningsfrist.
        </p>
        <p>
          Vid utebliven betalning kan Frilans Finans ta ut påminnelseavgift och dröjsmålsränta
          enligt sina villkor.
        </p>

        <h2>Ångerrätt</h2>
        <p>
          Enligt distansavtalslagen gäller normalt 14 dagars ångerrätt vid köp på distans.
          Ångerrätten gäller dock inte för våra kurser och workshops, eftersom de är fritidsaktiviteter
          som äger rum på ett bestämt datum. Genom att anmäla dig godkänner du att ångerrätten inte gäller.
        </p>

        <h2>Avbokning</h2>
        <p>Efter anmälan gäller följande avbokningsregler:</p>
        <ul>
          <li>Avbokning senast 7 dagar före workshop: 50 procent av avgiften debiteras.</li>
          <li>Avbokning senare än 7 dagar före workshop: Ingen återbetalning sker.</li>
        </ul>

        <h2>Sjukdom</h2>
        <p>
          Vid sjukdom återbetalas avgiften endast mot uppvisande av läkarintyg. Andra typer av intyg godkänns inte. Du
          är alltid välkommen att överlåta din plats till någon annan om du själv inte kan delta eller byta till en
          annan workshop.
        </p>

        <h2>Byte av deltagare</h2>
        <p>
          Du kan överlåta din plats till en annan person utan extra kostnad. Meddela oss innan så vi vet vem
          som kommer.
        </p>

        <h2>Inställd workshop</h2>
        <p>
          Om vi behöver ställa in workshoppen, till exempel vid för få deltagare eller sjukdom, återbetalas
          hela avgiften.
          Vi ersätter inte andra kostnader som resa eller boende.
        </p>

        <h2>Praktisk information</h2>
        <p>
          Plats, tider och övrig information skickas ut innan workshopdagen.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from '@/utils';

onMounted(() => {
    useUtils().scrollToMain();
});

const canonicalUrl = "https://femmefusion.se/anmalningsvillkor"

useSeoMeta({
  title: "Anmälnings- och betalningsvillkor för våra kurser och workshops | Femme Fusion",
  description:
    "Läs om anmälningsvillkor, betalning, ångerrätt och avbokningsregler för Femme Fusions kurser och workshops.",
  ogTitle: "Anmälningsvillkor för workshops",
  ogDescription:
    "Information om anmälan, betalning, ångerrätt, sjukdom och avbokning för Femme Fusions kurser och workshops.",
  ogUrl: canonicalUrl,
  ogImage: "https://femmefusion.se/images/meta-2026.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Anmälningsvillkor förkurser och workshops",
  twitterDescription:
    "Så funkar anmälan och betalning till Femme Fusions kurser och workshops.",
  twitterImage: "https://femmefusion.se/images/meta-2026.jpg",
})

useHead({
  link: [{ rel: "canonical", href: canonicalUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: "Anmälningsvillkor för workshops",
        mainEntity: [
          {
            "@type": "Question",
            name: "När är min plats garanterad?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Din plats är garanterad först när du får mejl från Femme Fusion om att du blivit antagen. Efter antagningsbeskedet skickas faktura via Frilans Finans.",
            },
          },
          {
            "@type": "Question",
            name: "Hur fungerar betalningen?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Betalning sker mot faktura via Frilans Finans. Fakturan har 30 dagars betalningsfrist.",
            },
          },
          {
            "@type": "Question",
            name: "Har jag ångerrätt?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Enligt distansavtalslagen gäller normalt 14 dagars ångerrätt vid köp på distans. Ångerrätten gäller dock inte för Femme Fusions kurser och workshops, eftersom det är fritidsaktiviteter på bestämda datum. Genom att anmäla dig godkänner du att ångerrätten inte gäller."
            }
          },
          {
            "@type": "Question",
            name: "Vad gäller vid avbokning?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Efter anmälan gäller följande avbokningsregler: Avbokning senast 7 dagar före workshop debiteras med 50 procent av avgiften. Avbokning senare än 7 dagar före workshop ger ingen återbetalning."
            }
          },
          {
            "@type": "Question",
            name: "Vad händer vid sjukdom?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Vid sjukdom återbetalas avgiften endast mot uppvisande av läkarintyg. Du kan alltid överlåta platsen till någon annan om du inte kan delta.",
            },
          },
          {
            "@type": "Question",
            name: "Kan jag överlåta min plats?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Ja. Du kan överlåta din plats till en annan person utan extra kostnad. Meddela Femme Fusion innan workshopdagen.",
            },
          },
          {
            "@type": "Question",
            name: "Vad händer om workshoppen ställs in?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Om workshoppen ställs in, till exempel vid för få deltagare eller sjukdom, återbetalas hela avgiften. Andra kostnader som resa eller boende ersätts inte.",
            },
          },
        ],
      }),
    },
  ],
});

</script>