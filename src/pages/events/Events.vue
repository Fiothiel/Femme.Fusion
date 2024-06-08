<template>
  <div class="events content">
    <h1>Aktuellt</h1>
    <h2>Kurser och workshops</h2>
    <ul>
      <li v-for="event in courses" :key="event.url">
        <span>{{ getShortDate(event.startDate) }}</span
        ><a :href="event.url" target="_blank">{{ event.title }}</a>
      </li>
    </ul>
    <!-- <template v-if="shows.length > 0">
      <h2>Shower</h2>
      <ul>
        <li v-for="event in shows" :key="event.url">
          <span>{{ getShortDate(event.startdate) }}</span
          ><a :href="event.url" target="_blank">{{ event.title }}</a>
        </li>
      </ul>
    </template> -->
  </div></template>

<script setup lang="ts">
import { ref, Ref, computed, onMounted } from "vue";
import { EventType } from "../../constants";
import { useUtils } from "../../utils";
import data from "../../assets/data/courses.json";
import IEvent from "../../interfaces/IEvent";
import { useEvents } from "../../services/events-service";

const { getShortDate } = useUtils();
const { getEvents } = useEvents();

const courses: Ref<IEvent[]> = ref([]);

onMounted(() => {
  getEvents().then((result: IEvent[]) => {
    courses.value = result;
  })
});

</script>