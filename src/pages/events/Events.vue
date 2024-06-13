<template>
  <div class="events content">
    <h1>Aktuellt</h1>
    <h2>Kurser och workshops</h2>
    <Loader v-if="loading" :large="true" :label="true" />
    <ul>
      <li v-for="event in courses" :key="event.url">
        <Modal :id="event.url">
          <template v-slot:link="{ clicked }: { clicked: () => void }">
            <a class="events__details" @click="clicked">
              <span>{{ getShortDate(event.startDate) }}</span>
              {{ event.title }}</a
            >
          </template>
          <template v-slot:content>
            <EventInfo :event="event" />
          </template>
        </Modal>
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
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { useUtils } from "../../utils";
import { useEvents } from "../../services/events-service";
import IEvent from "../../interfaces/IEvent";
import EventInfo from "../../components/eventinfo/EventInfo.vue";
import Loader from "../../components/loader/Loader.vue";
import Modal from "../../components/modal/Modal.vue";

const { getShortDate } = useUtils();
const { getEvents } = useEvents();

const courses: Ref<IEvent[]> = ref([]);
const loading = ref(true);

onMounted(() => {
  getEvents().then((result: IEvent[]) => {
    courses.value = result;
    loading.value = false;
  });
});
</script>