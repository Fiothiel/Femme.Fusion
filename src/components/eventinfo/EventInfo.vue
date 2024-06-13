<template>
  <div class="event-info">
    <h2>{{ event.title }}</h2>
    <div class="event-info__wrapper">
      <div class="event-info__details">
        <div>
          <dl>
            <dt>Pris:</dt>
            <dd>300 kr</dd>
          </dl>
          <dl>
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
    <a :href="event.url" target="_blank" class="button">Anmäl dig här</a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import IEvent from "../../interfaces/IEvent";

const props = defineProps<{
  event: IEvent;
}>();

onMounted(() => {
  console.log(props.event);
});
</script>