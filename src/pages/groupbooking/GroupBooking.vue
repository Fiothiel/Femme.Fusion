<template>
  <div class="book content">
    <h1>Gruppbokning</h1>
    <p>
      En gruppbokning är perfekt för alla tillfällen då du vill lära dig något nytt tillsammans med dina vänner. Varför
      inte göra möhippan till något extra speciellt med en privat danslektion? Eller samla ihop kollegorna för en
      teambuildingaktivitet med en twist av glamour? Vi skräddarsyr lektionerna efter era behov och nivåer, så att alla
      kan delta och ha roligt.
    </p>
    <Image path="../../src/assets/images/ff-04.jpg" alt="Louboutinsko i svart lack mot en parkeringshusvägg"
      :fullWidth="true" />

    <router-link to="/contact" class="button button--large">Kontakta oss för information och bokning!</router-link>
  </div>
</template>

<script setup lang="ts">
import Image from '../../components/image/Image.vue';

</script>
