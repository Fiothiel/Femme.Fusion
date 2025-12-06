<template>
  <div class="event-info">
    <h2>{{ event.title }}</h2>
    <div class="event-info__wrapper">
      <div class="event-info__details">
        <div v-if="event.price || event.level">
          <dl v-if="event.price">
            <dt>Pris:</dt>
            <dd>{{ event.price }} kr</dd>
          </dl>
          <dl v-if="event.level">
            <dt>Nivå:</dt>
            <dd>{{ event.level }}</dd>
          </dl>
          <dl>
            <dt>Antal tillfällen:</dt>
            <dd>{{ event.numOccasions }}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Startdatum:</dt>
            <dd>{{ useUtils().getShortDate(event.startDate) }}</dd>
          </dl>
          <dl>
            <dt>Dag & tid:</dt>
            <dd>{{ event.dayAndTimeInfo }}</dd>
          </dl>
          <dl>
            <dt>Adress:</dt>
            <dd>{{ event.address }}</dd>
          </dl>
        </div>
      </div>
      <div>
        <p v-html="event.shortDescription"></p>
        <p v-if="event.id">
          <NuxtLink :to="`/workshops/${event.id}`">Läs mer</NuxtLink>
        </p>
      </div>
    </div>
    <a v-if="event.url" :href="event.url" target="_blank" class="button">{{ event.buttonText }}</a>
  </div>
</template>

<script setup lang="ts">
import type { IEvent } from "@/types/IEvent";
import { useUtils } from "../../utils";

defineProps<{
  event: IEvent;
}>();


</script>