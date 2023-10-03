<template>
  <div class="contact content">
    <h1>Kontakta oss</h1>
    <div>
      <p>
        Vill du förgylla ditt evenemang med en hänförande show, eller överraska
        gästerna på födelsedagsfesten med glittrande underhållning? Kanske
        önskas en inspirerande danslektion för möhippan eller konferensen?
        Kontakta oss så hjälper vi dig vidare från idé till verklighet!
      </p>

      <form class="contact__form" ref="form" @submit.prevent="sendEmail">
        <label>Namn</label>
        <input type="text" name="user_name" v-model="name" />
        <label>Email</label>
        <input type="email" name="user_email" v-model="email" />
        <label>Meddelande</label>
        <textarea name="message" v-model="message"></textarea>
        <button v-if="!loading" type="submit" class="button">Skicka</button>
        <button v-else disabled type="submit" class="button"><Loader/></button>
        <div v-if="displayMessage">Tack för ditt meddelande!</div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Loader from '../../components/loader/Loader.vue';
import emailjs from "@emailjs/browser";

const form = ref();
let name = ref('');
let email = ref('');
let message = ref('');
let loading = ref(false);
let displayMessage = ref(false);

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
    .then((result: any) => {
      loading.value = false;
      displayMessage.value = true;
      name.value = '';
      email.value = '';
      message.value = '';
    })
    .catch((error: any) => {
      console.log("Fail.. ", error.text);
    });
};
</script>
>