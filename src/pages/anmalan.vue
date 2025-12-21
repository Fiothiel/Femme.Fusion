<template>
    <div class="content signup">
        <section class="section">
            <div class="section__content">
                <h1>Anmälan till workshops</h1>

                <p>
                    Välj de workshops du vill anmäla dig till och fyll i dina uppgifter.
                    Vi skickar en bekräftelse via e-post.
                </p>

                <form class="form" ref="form" @submit="onSubmit">
                    <label>Välj de workshops du vill anmäla dig till. Klicka på namnet för att läsa mer om en specifik
                        workshop.</label>
                    <div class="signup__options">
                        <label v-for="event in courses" :key="event.url" class="signup__option">
                            <input type="checkbox" :value="event.title + ' - ' + useUtils().getShortDate(event.startDate) + ', ' + event.dayAndTimeInfo"
                                v-model="selectedWorkshops" />
                            <div class="signup__option-content">
                                <a class="signup__option-title" :href="getWorkshopLink(event)" target="_blank"
                                    rel="noopener">
                                    {{ event.title }}
                                </a>
                                <span class="signup__option-meta">
                                    {{ useUtils().getShortDate(event.startDate) }} {{ event.dayAndTimeInfo }} 
                                </span>
                            </div>
                        </label>
                    </div>
                    <div class="form__error" v-if="workshopError">{{ workshopError }}</div>

                    <label>Namn</label>
                    <input type="text" name="name" v-model="name" />
                    <div class="form__error" v-if="nameError">{{ nameError }}</div>

                    <label>Email</label>
                    <input type="email" name="email" v-model="email" />
                    <div class="form__error" v-if="emailError">{{ emailError }}</div>

                    <label>Telefonnummer</label>
                    <input type="tel" name="phone" v-model="phone" />

                    <label>Adress</label>
                    <input type="text" name="address" v-model="address" />
                    <div class="form__error" v-if="addressError">{{ addressError }}</div>

                    <label>Postnummer</label>
                    <input type="text" name="postalCode" v-model="postalCode" />
                    <div class="form__error" v-if="postalCodeError">{{ postalCodeError }}</div>

                    <label>Stad</label>
                    <input type="text" name="city" v-model="city" />
                    <div class="form__error" v-if="cityError">{{ cityError }}</div>

                    <label>Personnummer (för fakturering, 10–12 siffror)</label>
                    <input type="text" name="personalNumber" v-model="personalNumber" />
                    <div class="form__error" v-if="personalNumberError">{{ personalNumberError }}</div>

                    <label>Meddelande</label>
                    <textarea name="message" v-model="message" rows="4"
                        placeholder="T.ex. om du har funderingar, önskemål eller vill anmäla fler personer."></textarea>

                    <label class="signup__terms">
                        <input type="checkbox" v-model="acceptedTerms" />
                        <span>
                            Jag har läst och godkänner
                            <NuxtLink to="/anmalningsvillkor" target="_blank" class="link">
                                anmälnings- och betalningsvillkoren
                            </NuxtLink>.
                        </span>
                    </label>
                    <div class="form__error" v-if="termsError">{{ termsError }}</div>

                    <button v-if="!loading" type="submit" class="button">Skicka</button>
                    <button v-else disabled class="button">
                        <Loader :large="false" :label="false" />
                    </button>

                    <div v-if="displayMessage">Tack för din anmälan!</div>
                </form>

            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useField, useForm } from "vee-validate";
import Loader from "@/components/loader/Loader.vue";
import { useEvents } from "@/services/events-service";
import type { IEvent } from "~/types/IEvent";
import { useEmail } from '@/services/email-service';
import { useUtils } from "@/utils";

const { sendMessageEmail, sendConfirmationEmail, loading } = useEmail();
const displayMessage = ref(false);

const { handleSubmit, resetForm } = useForm();

const { getCourses } = useEvents();
const courses: Ref<IEvent[]> = ref([]);

const selectedWorkshops = ref<string[]>([]);
const workshopError = ref<string | null>(null);

const { value: name, errorMessage: nameError } = useField<string>("name", "required");
const { value: personalNumber, errorMessage: personalNumberError } = useField<string>('personalNumber', 'required|personalnumber')
const { value: email, errorMessage: emailError } = useField<string>("email", "required|email");
const { value: phone } = useField<string>("phone");
const { value: address, errorMessage: addressError } = useField<string>("address", "required");
const { value: postalCode, errorMessage: postalCodeError } = useField<string>("postalCode", "required|numeric");
const { value: city, errorMessage: cityError } = useField<string>("city", "required");
const { value: message } = useField<string>("message");
const { value: acceptedTerms, errorMessage: termsError } = useField<boolean>("acceptedTerms", value => (value ? true : "Du måste godkänna villkoren.")
);

onMounted(() => {
    courses.value = getCourses();
});

function getWorkshopLink(event: IEvent): string {
    return `/workshops/${event.id}`;
}

const onSubmit = handleSubmit(async () => {
    if (selectedWorkshops.value.length === 0) {
        workshopError.value = "Du måste välja minst en workshop.";
        return;
    } else {
        workshopError.value = null;
    }

    await sendEmail();
});

const sendEmail = async () => {
    const selectedSnapshot = [...selectedWorkshops.value]
    const classesHtml = selectedSnapshot.map(w => `<li>${w}</li>`).join('')

    // 1. Mail till FF
    await sendMessageEmail({
        subject: 'Ny workshopanmälan',
        message: 'Ny anmälan via anmälningsformuläret.',
        name: name.value,
        email: email.value,
        phone: phone.value,
        details: `
      <p><strong>Namn:</strong> ${name.value}</p>
      <p><strong>Email:</strong> ${email.value}</p>
      <p><strong>Telefon:</strong> ${phone.value || 'Ej angivet'}</p>
      <p><strong>Personnummer:</strong> ${personalNumber.value}</p>
      <p><strong>Adress:</strong> ${address.value}, ${postalCode.value} ${city.value}</p>
      <p><strong>Workshops:</strong></p>
      <ul>${classesHtml}</ul>
      <p><strong>Meddelande:</strong><br>${message.value || 'Inget meddelande angivet.'}</p>
    `
    });

    displayMessage.value = true

    // 2. Bekräftelsemail till deltagaren
    await sendConfirmationEmail({
        subject: 'Tack för din anmälan!',
        name: name.value,
        email: email.value,
        details: `
      <p>Tack för din anmälan!</p>
      <p>Du har anmält dig till:</p>
      <ul>${classesHtml}</ul>
      <p>Du får ett nytt mail när vi har gått igenom anmälningarna och kan bekräfta din plats.</p>
      <p>Vänliga hälsningar,<br>Femme Fusion</p>
    `
    });

    // 3. Töm formulär
    selectedWorkshops.value = [];
    resetForm();
}


// SEO
const canonicalUrl = "https://femmefusion.se/anmalan";

useSeoMeta({
    title: "Anmälan | Femme Fusion - workshops våren 2026",
    description:
        "Anmäl dig till vårens workshops hos Femme Fusion. Musikaldans, feminine vibe, jazz/cabaret med flera. Platserna är begränsade.",
    ogTitle: "Anmälan | Femme Fusion",
    ogDescription: "Boka din plats på vårens workshops. Dansglädje, uttryck och energi.",
    ogUrl: canonicalUrl,
    ogImage: "https://femmefusion.se/images/meta.jpg",
    twitterCard: "summary_large_image"
});

useHead({ link: [{ rel: "canonical", href: canonicalUrl }] });
</script>