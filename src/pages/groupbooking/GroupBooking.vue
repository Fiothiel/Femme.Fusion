<template>
  <div class="group-booking content">
    <h1>Gruppbokning</h1>
    <p>
      En gruppbokning är perfekt för alla tillfällen då du vill lära dig något nytt tillsammans med dina vänner. Varför
      inte göra möhippan till något extra speciellt med en privat danslektion? Eller samla ihop kollegorna för en
      teambuildingaktivitet med en twist av glamour? Vi skräddarsyr lektionerna efter era behov och nivåer, så att alla
      kan delta och ha roligt.
    </p>
    <div class="group-booking__styles">
      <ImageText path="ff-06.jpg" alt="Burlesque" :name="null" :right="false" heading="Burlesque" text="Burlesque kan vara allt från oskuldsfullt flirtigt till sensuellt och provokativt med attityd. Musiken spänner från storband till rock, och möjlighet finns att dansa med olika rekvisita såsom stol, boa och handskar."/>
      <ImageText path="kris-03.jpg" alt="Sensual Heels" :name="null" :right="false" heading="Sensual Heels" text="Sensual Heels är sensuellt och kaxigt, och dansas med fördel i riktiga höga och snygga klackskor. Dansen sker främst nere på golvet eller med stöd av en stol, och fokuserar på virvlande benrörelser och mycket attityd."/>
    </div>


    <router-link to="/contact" class="button">Kontakta oss för information och bokning!</router-link>
  </div>
</template>

<script setup lang="ts">
import ImageText from '../../components/imagetext/ImageText.vue';

</script>
