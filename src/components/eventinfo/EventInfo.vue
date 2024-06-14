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
        </div>
        <div>
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
        <p v-html="event.description"></p>
      </div>
    </div>
    <a :href="event.url" target="_blank" class="button">{{ buttonText }}</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { EventType } from "../../constants";
import IEvent from "../../interfaces/IEvent";

const props = defineProps<{
  event: IEvent;
}>();

const buttonText = ref(props.event.type === EventType.Course ? 'Anmäl dig' : 'Mer information')

</script>