<template>
  <div class="event-info">
    <h2>{{ event.title }}</h2>
    <div class="event-info__wrapper">
      <div class="event-info__details">
        <div v-if="priceLabel || event.level">
          <dl v-if="priceLabel">
            <dt>Pris:</dt>
            <dd>{{ priceLabel }}</dd>
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
          <dl v-if="event.address">
            <dt>Adress:</dt>
            <dd>{{ event.address }}</dd>
          </dl>
        </div>
      </div>
      <div>
        <p v-html="event.shortDescription"></p>
        <p v-if="event.id" class="event-info__read-more">
          <NuxtLink :to="`/workshops/${event.id}`">Läs mer</NuxtLink>
        </p>
      </div>
    </div>
    <a v-if="event.url" :href="event.url" class="button">{{ event.buttonText }}</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IEvent } from "@/types/IEvent";
import { useUtils } from "../../utils";

const props = defineProps<{
  event: IEvent;
}>();

const priceLabel = computed(() => {
  const price = props.event.price;

  if (price === 0) {
    return "Gratis";
  }
  if (typeof price === "number") {
    return `${price} kr`;
  }
  if (typeof price === "string" && price.trim()) {
    return price;
  }

  return "";
});


</script>
