<template>
  <div class="content">
    <section class="section">
      <div class="section__content">
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
          <label>Telefonnummer</label>
          <input type="telephone" name="phone" v-model="phone" />
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import Loader from "../../components/loader/Loader.vue";
import emailjs from "@emailjs/browser";

definePageMeta({
  displayInMenu: true,
  menuLabel: 'Kontakt',
  order: 4
});

const form = ref();
let loading = ref(false);
let displayMessage = ref(false);

const { handleSubmit, resetForm } = useForm();

const { value: name, errorMessage: nameError } = useField<string>("name", "required");
const { value: email, errorMessage: emailError } = useField<string>("email", "required|email");
const { value: phone } = useField<string>("phone");
const { value: message, errorMessage: messageError } = useField<string>("message", "required");

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
        reply_to: `${email.value}, ${phone.value}`,
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

const canonicalUrl = 'https://femmefusion.se/kontakt';

useSeoMeta({
  title: 'Kontakt | Femme Fusion - boka show eller dansklass',
  description:
    'Kontakta Femme Fusion för bokning av show, dansklass eller workshop. Vi utgår från Linköping och arbetar i hela Sverige.',
  ogTitle: 'Kontakt | Femme Fusion',
  ogDescription:
    'Hör av dig för offert och bokning - vi skräddarsyr underhållning för ert event.',
  ogUrl: canonicalUrl,
  ogImage: 'https://femmefusion.se/images/meta.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kontakt | Femme Fusion',
  twitterDescription:
    'Maila oss för bokning av show, dansklass eller workshop. Snabb återkoppling.',
  twitterImage: 'https://femmefusion.se/images/meta.jpg'
});

useHead({ link: [{ rel: 'canonical', href: canonicalUrl }] });
</script>
