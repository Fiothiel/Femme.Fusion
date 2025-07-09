<template>
  <div class="current content">
    <h1>Gratis dansworkshop</h1>
    <p>
      Den 13 september kl. 10:00–12:15 på Skylten (Södra Oskarsgatan 3) bjuder vi på ett timmespass burlesque följt av
      ett timmespass feminine vibe. Vi filmar och fotar hela passet – du dansar gratis mot att synas i våra sociala
      kanaler. Inga förkunskaper krävs. Anmäl dig gratis i formuläret och ange om du vill delta på burlesque, feminine
      vibe eller båda! Det går även bra att anmäla sig via DM på Instagram.
    </p>
    <form class="form contact__form" ref="form" @submit="onSubmit">
      <label>Namn</label>
      <input type="text" name="name" v-model="name" />
      <div class="form__error" v-if="!!nameError">{{ nameError }}</div>

      <label>Mailadress</label>
      <input type="email" name="email" v-model="email" />
      <div class="form__error" v-if="!!emailError">{{ emailError }}</div>

      <fieldset>
        <legend>Vilka pass vill du delta på?</legend>
        <label>
          <input type="radio" name="sessions" value="both" v-model="sessions" />
          Båda passen
        </label>
        <label>
          <input type="radio" name="sessions" value="burlesque" v-model="sessions" />
          Endast Burlesque
        </label>
        <label>
          <input type="radio" name="sessions" value="feminine" v-model="sessions" />
          Endast Feminine Vibe
        </label>
        <div class="form__error" v-if="!!sessionsError">{{ sessionsError }}</div>
      </fieldset>

      <button v-if="!loading" type="submit" class="button">Skicka</button>
      <button v-else disabled class="button">
        <Loader :large="false" :label="false" />
      </button>

      <div v-if="displayMessage">Tack för din anmälan!</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import Loader from '../../components/loader/Loader.vue'
import emailjs from '@emailjs/browser'

const form = ref()
const loading = ref(false)
const displayMessage = ref(false)

const { handleSubmit, resetForm } = useForm()

const { value: name, errorMessage: nameError } = useField<string>('name', 'required')
const { value: email, errorMessage: emailError } = useField<string>('email', 'required|email')
const { value: sessions, errorMessage: sessionsError } = useField<string>('sessions', 'required')

const onSubmit = handleSubmit(() => {
  sendEmail()
})

const sendEmail = () => {
  loading.value = true
  emailjs
    .send(
      'service_3vexa7i',
      'template_contactform',
      {
        from_name: name.value,
        reply_to: email.value,
        message: "Workshop 13/9: " + sessions.value
      },
      '2V1Svme8xyPiol8YX'
    )
    .then(() => {
      loading.value = false
      displayMessage.value = true
      resetForm();
    })
    .catch((error: any) => {
      console.error('Fail.. ', error.text)
      loading.value = false
    })
}
</script>
