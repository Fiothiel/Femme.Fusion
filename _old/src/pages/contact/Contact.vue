<template>
  <div class="contact content">
    <h1>Kontakta oss</h1>

    <p>
      Vill du förgylla ditt evenemang med en hänförande show, eller överraska
      gästerna på födelsedagsfesten med glittrande underhållning? Kanske önskas
      en inspirerande danslektion för möhippan eller konferensen? Kontakta oss
      så hjälper vi dig vidare från idé till verklighet!
    </p>

    <form class="form" ref="form" @submit="onSubmit">
      <label>Namn</label>
      <input type="text" name="name" v-model="name" />
      <div class="form__error" v-if="!!nameError">{{ nameError }}</div>
      <label>Email</label>
      <input type="email" name="email" v-model="email" />
      <div class="form__error" v-if="!!emailError">{{ emailError }}</div>
      <label>Meddelande</label>
      <textarea name="message" v-model="message"></textarea>
      <div class="form__error" v-if="!!messageError">{{ messageError }}</div>
      <button v-if="!loading" type="submit" class="button">Skicka</button>
      <button v-else disabled class="button">
        <Loader :large="false" :label="false" />
      </button>
      <div v-if="displayMessage">Tack för ditt meddelande!</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import Loader from "../../components/loader/Loader.vue";
import emailjs from "@emailjs/browser";

const form = ref();
let loading = ref(false);
let displayMessage = ref(false);

const { handleSubmit, resetForm } = useForm();

const { value: name, errorMessage: nameError } = useField<string>(
  "name",
  "required"
);
const { value: email, errorMessage: emailError } = useField<string>(
  "email",
  "required|email"
);
const { value: message, errorMessage: messageError } = useField<string>(
  "message",
  "required"
);

const onSubmit = handleSubmit(() => {
  sendEmail();
});

const sendEmail = () => {
  loading.value = true;
  emailjs
    .send(
      "service_3vexa7i",
      "template_contactform",
      {
        from_name: name.value,
        message: message.value,
        reply_to: email.value,
      },
      "2V1Svme8xyPiol8YX"
    )
    .then(() => {
      loading.value = false;
      displayMessage.value = true;
      resetForm();
    })
    .catch((error: any) => {
      console.log("Fail.. ", error.text);
    });
};
</script>
>