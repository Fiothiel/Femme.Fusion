<template>
  <div class="events content">
    <section>
      <h1>Aktuellt</h1>
      <p>Om vi har kommande dansklasser eller shower hittar du information om dem här.-</p>
      <h2>Kurser och workshops</h2>
      <Loader v-if="loading" :large="true" :label="true" />
      <ul v-if="courses.length > 0">
        <li v-for="event in courses" :key="event.url">
          <Modal :id="event.url">
            <template v-slot:link="{ clicked }: { clicked: () => void }">
              <a class="events__details" @click="clicked">
                <span>{{ getShortDate(event.startDate) }}</span>
                {{ event.title }}</a>
            </template>
            <template v-slot:content>
              <EventInfo :event="event" />
            </template>
          </Modal>
        </li>
      </ul>
      <p v-else-if="courses.length === 0 && !loading">
        Inga kurser eller workshops planerade för tillfället. Boka en lektion?
      </p>
    </section>
    <section v-if="shows.length > 0">
      <h2>Shower</h2>
      <Loader v-if="loading" :large="true" :label="true" />
      <ul>
        <li v-for="event in shows" :key="event.url">
          <Modal :id="event.url">
            <template v-slot:link="{ clicked }: { clicked: () => void }">
              <a class="events__details" @click="clicked">
                <span>{{ getShortDate(event.startDate) }}</span>
                {{ event.title }}</a>
            </template>
            <template v-slot:content>
              <EventInfo :event="event" />
            </template>
          </Modal>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { useUtils } from "@/utils";
import { useEvents } from "@/services/events-service";
import IEvent from "@/interfaces/IEvent";
import EventInfo from "@/components/eventinfo/EventInfo.vue";
import Loader from "@/components/loader/Loader.vue";
import Modal from "@/components/modal/Modal.vue";
import { EventType } from "@/constants";

definePageMeta({
  displayInMenu: true,
  menuLabel: 'Aktuellt',
  order: 3
});

const { getShortDate } = useUtils();
const { getEvents } = useEvents();

const courses: Ref<IEvent[]> = ref([]);
const shows: Ref<IEvent[]> = ref([]);
const loading = ref(true);

onMounted(() => {
  getEvents().then((result: IEvent[]) => {
    courses.value = result.filter((e: IEvent) => e.type === EventType.Course);
    shows.value = result.filter((e: IEvent) => e.type === EventType.Show);
    loading.value = false;
  });
});
</script>