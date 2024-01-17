<template>
  <div class="events content">
    <h1>Aktuellt</h1>
    <h2>Kurser och workshops</h2>
    <ul>
      <li v-for="event in courses" :key="event.url">
        <span>{{ getShortDate(event.startdate) }}</span
        ><a :href="event.url" target="_blank">{{ event.title }}</a>
      </li>
    </ul>
    <template v-if="shows.length > 0">
      <h2>Shower</h2>
      <ul>
        <li v-for="event in shows" :key="event.url">
          <span>{{ getShortDate(event.startdate) }}</span
          ><a :href="event.url" target="_blank">{{ event.title }}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from "vue";
import { EventType } from "../../constants";
import { useUtils } from "../../utils";
import data from "../../assets/data/courses.json";
import IEvent from "../../interfaces/IEvent";

const { getShortDate } = useUtils();
const events: Ref<IEvent[]> = ref(data);
const courses = computed(() =>
  events.value.filter(
    (event: IEvent) =>
      event.type === EventType.Course || event.type === EventType.Workshop
  )
  .sort((a: IEvent, b: IEvent) => {
      // Assuming startdate is a property of IEvent
      const dateA = new Date(a.startdate);
      const dateB = new Date(b.startdate);

      // Compare dates and return a number
      if (dateA < dateB) {
        return -1; // indicates that a comes before b
      } else if (dateA > dateB) {
        return 1; // indicates that a comes after b
      } else {
        return 0; // indicates that a and b are equal in terms of order
      }
    })
);

const shows = computed(() =>
  events.value.filter((event: IEvent) => event.type === EventType.Show)
);
</script>