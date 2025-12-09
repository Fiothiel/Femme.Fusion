<template>
  <div class="calendar content">
    <section class="section">
      <div class="section__content">
        <h1>Kalender</h1>
        <p>Om vi har kommande dansklasser eller shower hittar du information om dem här.</p>
      </div>
    </section>
    <section class="section">
      <div class="section__content">
        <h2>Kurser och workshops</h2>
        <ul v-if="courses.length > 0" class="table-list">
          <li v-for="event in courses" :key="event.url">
            <Modal :id="event.url">
              <template v-slot:link="{ clicked }: { clicked: () => void }">
                <a class="table-list__link" @click="clicked">
                  <span>{{ getShortDate(event.startDate) }}</span>
                  {{ event.title }}</a>
              </template>
              <template v-slot:content>
                <EventInfo :event="event" />
              </template>
            </Modal>
          </li>
        </ul>
        <p v-else-if="courses.length === 0">
          Inga kurser eller workshops planerade för tillfället. Boka en lektion?
        </p>
      </div>
    </section>
    <section v-if="shows.length > 0" class="section">
      <div class="section__content">
        <h2>Shower</h2>
        <ul class="table-list">
          <li v-for="event in shows" :key="event.url">
            <Modal :id="event.url">
              <template v-slot:link="{ clicked }: { clicked: () => void }">
                <a class="table-list__link" @click="clicked">
                  <span>{{ getShortDate(event.startDate) }}</span>
                  {{ event.title }}</a>
              </template>
              <template v-slot:content>
                <EventInfo :event="event" />
              </template>
            </Modal>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUtils } from "@/utils";
import { useEvents } from "@/services/events-service";
import type { Ref } from "vue";
import type { IEvent } from '@/types/IEvent';
import EventInfo from "@/components/eventinfo/EventInfo.vue";
import Modal from "@/components/modal/Modal.vue";

definePageMeta({
  displayInMenu: true,
  menuLabel: 'Kalender',
  order: 3
});

const { getShortDate } = useUtils();
const { getCourses, getShows } = useEvents();

const courses: Ref<IEvent[]> = computed(() => getCourses());
const shows: Ref<IEvent[]> = computed(() => getShows());

</script>