<template>
  <div class="book content">
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
        @click="displayShow = true">
        Show
      </button>
      <button
        role="tab"
        :aria-selected="!displayShow"
        aria-controls="dance-panel"
        id="dance-tab"
        class="button button--large button--toggle"
        :class="{ 'button--toggle-active': !displayShow }"
        @click="displayShow = false">
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
import { useUtils } from "../../utils";
import { ref } from "vue";
const { getImagePath } = useUtils();
import Image from "../../components/image/Image.vue";
import DanceClass from "./DanceClass.vue";
import Show from "./Show.vue";

const displayShow = ref(true);

</script>
