<template>
  <div class="events content">
    <h1>Aktuellt</h1>
    <h2>Kurser och workshops</h2>
    <Loader v-if="loading" :large="true" :label="true" />
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
import { ref, Ref, onMounted } from "vue";
import { useUtils } from "../../utils";
import { useEvents } from "../../services/events-service";
import IEvent from "../../interfaces/IEvent";
import Loader from '../../components/loader/Loader.vue';

const { getShortDate } = useUtils();
const { getEvents } = useEvents();

const courses: Ref<IEvent[]> = ref([]);
const loading = ref(true);

onMounted(() => {
  getEvents().then((result: IEvent[]) => {
    courses.value = result;
    loading.value = false;
  })
});

</script>