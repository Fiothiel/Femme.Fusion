<template>
<div class="events content">
  <h1>Aktuellt</h1>
  <h2>Kurser och workshops</h2>
  <div v-for="event in events" :key="event.url">
    <span>{{ event.startdate }}</span><a :href="event.url" target="_blank">{{ event.title }}</a>
  </div>
  <h2>Shower</h2>
</div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

import data from '../../assets/data/courses.json';
import IEvent from '../../interfaces/IEvent';

const events: Ref<IEvent[]> = ref(data);
//const coursesRef<IEvent[]> = ref(events.filter) 

</script>