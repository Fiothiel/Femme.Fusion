<template>
  <article class="current content">
    <h1 id="burlesque-weekend-heading">Burlesque weekend</h1>
    <span>Sista anmälningsdag 5 september</span>
    <Image
      alt="Femme Fusion med röda organzaboor"
      :fullWidth="false"
      :fallback="getImagePath('burlesque-weekend.jpg')"
      :sizes="null"
      :srcset="null"
    />
    <p>
      Gör dig redo för två härliga dagar fyllda med burlesque tillsammans med
      oss i Femme Fusion! Dans med olika rekvisita, tillverkning av egna
      scenkläder, fotografering, och en show som förevigas på film är
      ingredienser som ingår under denna inspirerande helg. Allt i en
      uppmuntrande och trygg atmosfär med mycket skratt och leenden.
    </p>
    <p>
      <a
        href="https://www.studieframjandet.se/ostergotlands-lan/gustav-arrangemang/kalenderhandelser/2024/september/burlesque-weekend-med-femme-fusion/"
        class="button button--large"
        target="_blank"
        >Anmäl dig här</a
      >
    </p>
    <p>
      Du får lära dig två koreografier med olika rekvisita och burlesque-vibes,
      som sätts ihop till en sammanhängande show. Utrymme finns för att utveckla
      din dans och din burlesque persona utifrån den nivå där du befinner dig,
      och du kommer att få testa på olika uttryckssätt och ges möjlighet till
      eget skapande. I slutet av helgen gör sig alla deltagare show ready och
      visar det de lärt sig för varandra, får det förevigat på film och tar
      härliga gruppbilder. Både film och bilder får du såklart med dig efter
      helgen! För film och foto har vi anlitat den duktiga fotografen Mattias
      Kannerstål. Det finns även möjlighet att få solobilder tagna av Mattias.
    </p>
    <p>
      Under helgen får du också chansen att skapa dina egna scenkläder. Pimpa
      och bedazzle något du redan äger och/eller designa ett par egna nipple
      tassels! Alla delar som behövs för tassels, samt övrigt pysselmaterial
      ingår. Vill du förädla en bh, ett par trosor eller något annat klädesplagg
      tar du med det. Kanske blir du sugen på att inviga dina nya showkläder
      under helgens avslutande framträdande?
    </p>
    <p>
      För att fylla på energidepåerna under dagarna tillsammans kommer det att
      finnas snacks och fika tillgängligt. Ta med den lunch du önskar äta.
      Meddela gärna om du har några allergier!
    </p>
    <p>Vi utlovar en härlig helg med dans, glitter och glädje!</p>
    <section>
      <h2>Detaljer</h2>
      <dl>
        <dt>Lördag:</dt>
        <dd>09:00-16:00 Dans och pysselverkstad</dd>
        <dt>Söndag:</dt>
        <dd>09:00-17:00 Dans och uppvisning, film och foto</dd>
        <dt>Pris:</dt>
        <dd>1800 kr</dd>
      </dl>
    </section>
    <p>
      <i
        >I priset ingår lån av rekvisita, pysselmaterial, professionellt filmad
        show, gruppbilder och fika/snacks.<br />
        Ta med lunch, träningskläder, eventuellt eget klädesplagg att smycka,
        samt smink och kläder som du vill bli fotad och uppträda i.
      </i>
    </p>
    <section>
      <h2>FAQ</h2>
      <p>
        Hittar du inte svaret på din fråga?
        <router-link to="/contact">Kontakta oss.</router-link>
      </p>
      <Accordion
        v-for="(question, i) in faqData"
        :key="`faq-${i}`"
        :summary="question.question"
        :details="question.answer"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
import Accordion from "../../components/accordion/Accordion.vue";
import Image from "../../components/image/Image.vue";
import faqData from "../../assets/data/faq.json";
import { onMounted } from 'vue';
import { useUtils } from "../../utils";
const { getImagePath } = useUtils();

onMounted(() => {
  document.getElementById('burlesque-weekend-heading')?.scrollIntoView({ behavior: 'smooth' });
});
</script>
