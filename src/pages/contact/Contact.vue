<template>
  <Page heading="Kontakta oss" preamble="" image="" content="" />
  <form class="contact-form" ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name" v-model="name" />
    <label>Email</label>
    <input type="email" name="user_email" v-model="email" />
    <label>Message</label>
    <textarea name="message" v-model="message"></textarea>
    <input type="submit" value="Send" />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import Page from "../../components/page/page.vue";

const form = ref();
let name = ref("");
let email = ref("");
let message = ref("");

const sendEmail = () => {
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
      console.log("Success! ", result.text);
    })
    .catch((error: any) => {
      console.log("Fail.. ", error.text);
    });
};
</script>
