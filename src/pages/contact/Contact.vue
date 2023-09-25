<template>
  <div class="contact content">
    <h1>Kontakta oss</h1>
    <div>
      <p>Vill du eller funderar du på att boka en show? En danslektion för möhippan eller kompisgänget? Kontakta oss så hör vi av oss!
      </p>

      <form class="contact__form" ref="form" @submit.prevent="sendEmail">
        <label>Namn</label>
        <input type="text" name="user_name" v-model="name" />
        <label>Email</label>
        <input type="email" name="user_email" v-model="email" />
        <label>Meddelande</label>
        <textarea name="message" v-model="message"></textarea>
        <button type="submit" class="button">Skicka</button>
      </form>
    </div>    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

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
>