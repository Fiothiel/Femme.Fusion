<template>
  <slot name="link" :clicked="toggleModal" />
  <div v-if="showModal" class="modal-wrapper" @click.self="closeModal()">
    <div class="modal" role="dialog" :id="id" aria-modal="true" @click.stop>
      <button class="close-button" @click="closeModal()" v-on:keyup.enter="closeModal()">
        <span></span>
      </button>

      <slot name="content" :close="toggleModal" />
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref } from "vue";

defineProps({
  id: String,
});

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

let showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;

  const body = document.querySelector("body");
  body?.classList.toggle("modal-open");

  if (showModal.value) {
    document.addEventListener("keydown", handleKeydown);
  } else {
    document.removeEventListener("keydown", handleKeydown);
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeModal();
  }
}

function closeModal() {
  const body = document.querySelector("body");
  const modal = document.getElementsByClassName("vue-modal");

  if (body && modal && modal.length <= 1) {
    body.classList.remove("modal-open");
  }
  showModal.value = false;
  emit("closeModal"); // In case someone wants to listen
}

const clicked = ref<() => void>(toggleModal);
</script>