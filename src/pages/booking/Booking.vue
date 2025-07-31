<template>
  <div class="book content content--center">
    <h1>Bokning</h1>
    <p>Show eller dansklass – låt oss ta hand om det!</p>

    <div class="book__toggle" role="tablist" aria-label="Bokningstyp">
      <button
        role="tab"
        :aria-selected="displayShow"
        aria-controls="show-panel"
        id="show-tab"
        class="button button--large button--toggle"
        :class="{ 'button--toggle-active': displayShow }"
        @click="setTab(true)">
        Show
      </button>
      <button
        role="tab"
        :aria-selected="!displayShow"
        aria-controls="dance-panel"
        id="dance-tab"
        class="button button--large button--toggle"
        :class="{ 'button--toggle-active': !displayShow }"
        @click="setTab(false)">
        Dansklass
      </button>
    </div>

    <div v-show="displayShow" role="tabpanel" id="show-panel" aria-labelledby="show-tab">
      <Show />
    </div>
    <div v-show="!displayShow" role="tabpanel" id="dance-panel" aria-labelledby="dance-tab">
      <DanceClass />
    </div>

    <router-link to="/contact" class="button button--large">Kontakta oss</router-link>
  </div>
</template>


<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DanceClass from "./DanceClass.vue";
import Show from "./Show.vue";

const route = useRoute();
const router = useRouter();

const displayShow = ref(true);


const updateTabFromQuery = () => {
  const q = route.query.q;
  displayShow.value = q !== 'danceclass'; // default to true/show
};

onMounted(() => {
  updateTabFromQuery();
});

watch(() => route.query.q, () => {
  updateTabFromQuery();
});

function setTab(show: boolean) {
  displayShow.value = show;
  router.replace({
    query: {
      ...route.query,
      q: show ? 'show' : 'danceclass'
    }
  });
}

</script>
