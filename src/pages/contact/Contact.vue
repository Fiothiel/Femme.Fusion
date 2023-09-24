<template>
  <div class="contact content">
    <h1>Kontakta oss</h1>
    <div>
      <p>Catch mouse and gave it as a present as lick i the shoes cat walks in keyboard for cat slap dog in face cat
        meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog sleep in the bathroom sink and refuse
        to
        leave cardboard box. Spread kitty litter all over house spend six hours per day washing, but still have a crusty
        butthole yet pee in the shoe white cat sleeps on a black shirt, sleep. Purr for no reason man running from cops
        stops to pet cats, goes to jail and jump on fridge lick master's hand at first then bite because im moody yet lick
        yarn hanging out of own butt so eats owners hair then claws head yet i do no work yet get food, shelter, and lots
        of
        stuff just like man who lives with us.
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