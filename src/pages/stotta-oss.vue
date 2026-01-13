<template>
  <div class="content support">
    <section class="section section--airy">
      <div class="section__content">
        <h1>Stötta Femme Fusion</h1>
        <p>Bakom varje show ligger repetitioner, koreografi, kostymarbete, musikval och mycket kärlek till scenen. Om du
          vill vara med och backa det vi gör kan du stötta oss via Patreon eller Buy Me a Coffee.</p>
      </div>
    </section>
    <section class="section section--airy section--darkred">
      <div class="section__content">
        <h2>Varför stötta oss?</h2>
        <p>
          Att skapa scenkonst kräver tid, energi och resurser. Ditt stöd hjälper oss att fortsätta utveckla nya nummer,
          hålla hög kvalitet och våga skapa shower som känns både lyxiga, lekfulla och lite oväntade.
        </p>
        <p>
          Genom att stötta oss är du med och gör det möjligt för Femme Fusion att fortsätta skapa och leverera magi på
          scen.
        </p>
      </div>
    </section>
    <section class="section section--wide section--airy">
      <div class="section__content">
        <h2>Välj hur du vill stötta</h2>

        <ul class="support__cards">
          <li>
            <CardLink to="https://www.patreon.com/DITT_NAMN" icon="/icons/patreon.png" :external="true">
              <h2>Patreon</h2>
              <p><strong>Stötta oss löpande.</strong> Stötta månadsvis och kom närmare oss på och bakom scenen.</p>
            </CardLink>
          </li>

          <li>
            <CardLink to="https://buymeacoffee.com/DITT_NAMN" icon="/icons/buy-me-a-coffee_rounded.png" :external="true">
              <h2>Buy Me a Coffee</h2>
              <p><strong>Stötta oss en gång.</strong> Bjud oss på en kaffe och bidra till repetition, kostym och nya
                nummer.</p>
            </CardLink>
          </li>
        </ul>
      </div>
    </section>
    <!--     <section class="section section--airy">
      <div class="section__content">
        <h2>Patreon. För dig som vill stötta löpande</h2>
        <p>
          På Patreon kan du stötta oss månadsvis. Just nu börjar vi enkelt, med fokus på att bygga en stabil grund.
          Med tiden kommer vi utveckla vår Patreon med fler nivåer och innehåll som inte alltid syns i våra öppna
          kanaler.
        </p>
        <p>
          Genom att bli Patreon hjälper du oss att skapa nytt material, lägga tid på repetition och fortsätta utvecklas
          som showgrupp.
        </p>
        <a href="https://www.patreon.com/DITT_NAMN" class="button" target="_blank" rel="noopener">
          Bli Patreon
        </a>
      </div>
    </section>

    <section class="section section--airy">
      <div class="section__content">
        <h2>Buy Me a Coffee. För dig som vill stötta en gång</h2>
        <p>
          Vill du stötta oss utan att binda upp dig månadsvis? Då kan du bjuda oss på en kaffe.
          Ett enkelt sätt att visa uppskattning och bidra till det vi gör.
        </p>
        <p>
          Ofta hamnar kaffet mitt i ett kostymprojekt, en koreografidag eller planeringen av nästa show.
        </p>
        <a href="https://buymeacoffee.com/DITT_NAMN" class="button button--secondary" target="_blank" rel="noopener">
          Bjud oss på en kaffe
        </a>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import CardLink from "~/components/cardlink/CardLink.vue";
import { applyPageSeo } from "~/services/seo-service";

applyPageSeo({
  title: "Stötta Femme Fusion | Patreon och Buy Me a Coffee",
  description:
    "Vill du stötta Femme Fusion? Backa vårt skapande via Patreon eller Buy Me a Coffee och hjälp oss fortsätta skapa shower med dans, sång och scenmagi.",

  path: "/stotta-oss",

  breadcrumbs: [
    { name: "Stötta oss", path: "/stotta-oss" },
  ],

  ogTitle: "Stötta Femme Fusion",
  ogDescription:
    "Stötta Femme Fusion via Patreon eller Buy Me a Coffee och var med och möjliggör vårt fortsatta skapande.",

  twitterTitle: "Stötta Femme Fusion",
  twitterDescription:
    "Vill du stötta vårt skapande? Här hittar du våra sätt att stötta Femme Fusion.",

  faqKey: "faq-stotta-oss",
  faq: [
    {
      question: "Hur kan jag stötta Femme Fusion?",
      answer:
        "Du kan stötta oss löpande via Patreon eller genom att ge ett engångsstöd via Buy Me a Coffee.",
    },
    {
      question: "Är Patreon på svenska?",
      answer:
        "Ja, vår Patreon är på svenska.",
    },
    {
      question: "Kan jag stötta utan att binda upp mig?",
      answer:
        "Ja, via Buy Me a Coffee kan du stötta oss med ett engångsbelopp utan prenumeration.",
    },
    {
      question: "Vad används stödet till?",
      answer:
        "Stödet går till repetition, skapande av nya nummer, kostymer och utveckling av Femme Fusions shower.",
    },
    {
      question: "Kan jag vara anonym?",
      answer:
        "Ja, det går bra att stötta anonymt om du inte vill synas med namn.",
    },
  ],
});
</script>
