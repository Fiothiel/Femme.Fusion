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
          <input type="tel" name="phone" v-model="phone" />
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
import Loader from "@/components/loader/Loader.vue";
import { useEmail } from "@/services/email-service";
import { useUtils } from "@/utils";
import { applyPageSeo } from "~/services/seo-service";

onMounted(() => {
  useUtils().scrollToMain();
});

const { sendMessageEmail, sendConfirmationEmail, loading } = useEmail()
let displayMessage = ref(false);

const { handleSubmit, resetForm } = useForm();

const { value: name, errorMessage: nameError } = useField<string>("name", "required");
const { value: email, errorMessage: emailError } = useField<string>("email", "required|email");
const { value: phone } = useField<string>("phone");
const { value: message, errorMessage: messageError } = useField<string>("message", "required");

const onSubmit = handleSubmit(async () => {
  await sendMessageEmail({
    subject: 'Nytt meddelande',
    message: 'Nytt meddelande från kontaktformulär.',
    name: name.value,
    email: email.value,
    phone: phone.value,
    details: message.value
  });

  displayMessage.value = true;

  await sendConfirmationEmail({
    subject: "Tack för ditt meddelande!",
    name: name.value,
    email: email.value,
    details: `
      <p>Tack för ditt meddelande! Vi hör av oss så snart vi kan.</p>
      <p>Vänliga hälsningar.<br>Femme Fusion</p>
      <p><strong>Ditt meddelande:</strong><br><i>${message.value}</i></p>
    `});

  resetForm();
});


applyPageSeo({
  title: "Kontakt | Femme Fusion - boka show eller dansklass",
  description:
    "Kontakta Femme Fusion för bokning av show, dansklass eller workshop. Vi utgår från Linköping och jobbar i hela Sverige. Skicka en förfrågan så återkommer vi med förslag och offert.",
  path: "/kontakt",
  ogTitle: "Kontakt | Femme Fusion",
  ogDescription:
    "Hör av dig för offert och bokning. Vi skräddarsyr underhållning för ert event i hela Sverige.",
  twitterTitle: "Kontakt | Femme Fusion",
  twitterDescription:
    "Skicka förfrågan om show, dansklass eller workshop. Vi återkommer så snart vi kan.",
  breadcrumbs: [
    { name: "Kontakt", path: "/kontakt" },
  ],
});

</script>
