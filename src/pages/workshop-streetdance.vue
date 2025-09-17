<template>
  <div class="signup content">
    <h1>Streetdance Workshop</h1>

    <p>
      Välkommen till vår streetdanceworkshop – en fartfylld klass med attityd
      och groove! Den passar dig som dansat lite tidigare och gillar att utmana
      dig själv i tempo och uttryck. Under passet lär du dig en koreografi
      tillsammans med <strong>Ella och Kristina</strong>, som guidar dig genom
      steg och känsla.
    </p>

    <p>
      <strong>När:</strong> Lördag 20 september, kl. 10:30–12:00<br />
      <strong>Plats:</strong> Skylten, Södra Oskarsgatan 3<br />
      <strong>Pris:</strong> 200 kr (175 kr för studenter)
    </p>

    <p class="signup__terms">
      <Modal id="betalning">
        <template v-slot:link="{ clicked }">
          <a href="#" @click.prevent="clicked">Betalningsinformation</a>
        </template>
        <template v-slot:content>
          <h2>Betalningsinformation</h2>
          <p>
            När du blivit antagen till workshopen kommer du få en faktura via
            Frilans Finans.
          </p>
          <p>
            Enligt lagen (2005:59) om distansavtal och avtal utanför
            affärslokaler har du möjlighet att ångra din workshopanmälan inom 14
            dagar från bekräftelse. Meddela detta via
            <a href="mailto:info@femmefusion.se">info@femmefusion.se</a> innan
            ångerfristen löper ut.
          </p>
          <p>
            Om workshopen inleds under ångerfristen krävs särskilt samtycke. Vid
            giltiga skäl (sjukdom med intyg, flytt m.m.) återbetalas resterande
            avgift. I övriga fall gäller full betalningsskyldighet.
          </p>
          <p>Om workshopen ställs in återbetalas hela avgiften.</p>
        </template>
      </Modal>

      &nbsp;|&nbsp;

      <Modal id="villkor">
        <template v-slot:link="{ clicked }">
          <a href="#" @click.prevent="clicked"
            >Anmälningsvillkor och ångerrätt</a
          >
        </template>
        <template v-slot:content>
          <h2>Anmälningsvillkor och ångerrätt</h2>
          <p>
            Du har rätt att få tillbaka avgiften om vi tvingas ställa in
            workshopen innan start.
          </p>
          <p>
            Enligt lagen (2005:59) har du rätt att ångra din anmälan inom 14
            dagar från det att vi bekräftat din plats. Kontakta oss via
            <a href="mailto:info@femmefusion.se">info@femmefusion.se</a> inom
            ångerfristen.
          </p>
          <p>
            Påbörjas workshopen under ångerfristen krävs särskilt samtycke. Vid
            avbokning på grund av giltigt skäl (t.ex. sjukdom med intyg),
            återbetalas resterande belopp. Saknas giltigt skäl är du
            betalningsskyldig för hela avgiften.
          </p>
          <p>
            Avbokning efter ångerfristen innebär att du är skyldig att betala
            hela avgiften.
          </p>
        </template>
      </Modal>
    </p>

    <h2>Anmäl dig till streetdance</h2>

    <form class="form" ref="form" @submit="onSubmit">
      <label>Fullständigt namn</label>
      <input type="text" name="name" v-model="name" />
      <div class="form__error" v-if="!!nameError">{{ nameError }}</div>

      <label>Personnummer</label>
      <input type="text" name="personalnumber" v-model="personalnumber" />
      <div class="form__error" v-if="!!personalnumberError">
        {{ personalnumberError }}
      </div>

      <label>Student? (ja/nej)</label>
      <input type="text" name="student" v-model="student" />

      <label>E-postadress</label>
      <input type="email" name="email" v-model="email" />
      <div class="form__error" v-if="!!emailError">{{ emailError }}</div>

      <label>Gatuadress</label>
      <input type="text" name="street" v-model="street" />
      <div class="form__error" v-if="!!streetError">{{ streetError }}</div>

      <label>Postnummer</label>
      <input type="text" name="postal" v-model="postal" />
      <div class="form__error" v-if="!!postalError">{{ postalError }}</div>

      <label>Ort</label>
      <input type="text" name="city" v-model="city" />
      <div class="form__error" v-if="!!cityError">{{ cityError }}</div>

      <button v-if="!loading" type="submit" class="button">
        Skicka anmälan
      </button>
      <button v-else disabled class="button">
        <Loader :large="false" :label="false" />
      </button>

      <div v-if="displayMessage">Tack för din anmälan!</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import Loader from "../../components/loader/Loader.vue";
import Modal from "../../components/modal/Modal.vue";
import emailjs from "@emailjs/browser";

definePageMeta({ displayInMenu: false })

const form = ref();
const loading = ref(false);
const displayMessage = ref(false);

const { handleSubmit, resetForm } = useForm();

const { value: name, errorMessage: nameError } = useField<string>(
  "name",
  "required"
);
const { value: personalnumber, errorMessage: personalnumberError } =
  useField<string>("personalnumber", "required|numeric");
const { value: email, errorMessage: emailError } = useField<string>(
  "email",
  "required|email"
);
const { value: street, errorMessage: streetError } = useField<string>(
  "street",
  "required"
);
const { value: postal, errorMessage: postalError } = useField<string>(
  "postal",
  "required|numeric"
);
const { value: city, errorMessage: cityError } = useField<string>(
  "city",
  "required"
);
const student = ref('');

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
        reply_to: email.value,
        message: `Streetdance workshop-anmälan:\nPersonnummer: ${personalnumber.value}\nAdress: ${street.value}, ${postal.value} ${city.value}\n Student? ${student.value}`,
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
      loading.value = false;
    });
};
</script>