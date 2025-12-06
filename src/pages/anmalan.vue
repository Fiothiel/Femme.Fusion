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
                    <label>Välj de workshops du vill anmäla dig till. Klicka på namnet för att läsa mer om en specifik workshop.</label>
                    <div class="signup__options">
                        <label v-for="event in courses" :key="event.url" class="signup__option">
                            <input type="checkbox" :value="event.title + ' - ' + event.dayAndTimeInfo"
                                v-model="selectedWorkshops" />
                            <div class="signup__option-content">
                                <a class="signup__option-title" :href="getWorkshopLink(event)" target="_blank"
                                    rel="noopener">
                                    {{ event.title }}
                                </a>
                                <span class="signup__option-meta">
                                    {{ event.dayAndTimeInfo }}
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
                    <input type="telephone" name="phone" v-model="phone" />

                    <label>Adress</label>
                    <input type="text" name="address" v-model="address" />
                    <div class="form__error" v-if="addressError">{{ addressError }}</div>

                    <label>Postnummer</label>
                    <input type="text" name="postalCode" v-model="postalCode" />
                    <div class="form__error" v-if="postalCodeError">{{ postalCodeError }}</div>

                    <label>Stad</label>
                    <input type="text" name="city" v-model="city" />
                    <div class="form__error" v-if="cityError">{{ cityError }}</div>

                    <label>Meddelande</label>
                    <textarea name="message" v-model="message" rows="4" placeholder="T.ex. om du har funderingar, önskemål eller vill anmäla fler personer."></textarea>

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
import emailjs from "@emailjs/browser";
import { useEvents } from "@/services/events-service";
import type { IEvent } from "~/types/IEvent";

definePageMeta({
    displayInMenu: true,
    menuLabel: "Anmälan till workshops",
    order: 4
});

const form = ref();
const loading = ref(false);
const displayMessage = ref(false);

const { handleSubmit, resetForm } = useForm();

const { getCourses } = useEvents();
const courses: Ref<IEvent[]> = ref([]);

const selectedWorkshops = ref<string[]>([]);
const workshopError = ref<string | null>(null);

const { value: name, errorMessage: nameError } = useField<string>("name", "required");
const { value: email, errorMessage: emailError } = useField<string>("email", "required|email");
const { value: phone } = useField<string>("phone");
const { value: address, errorMessage: addressError } = useField<string>("address", "required");
const { value: postalCode, errorMessage: postalCodeError } = useField<string>("postalCode", "required|numeric");
const { value: city, errorMessage: cityError } = useField<string>("city", "required");
const { value: message } = useField<string>("message");

onMounted(async () => {
    courses.value = await getCourses();
});

function getWorkshopLink(event: IEvent): string {
  const match = event.description?.match(/href="([^"]+)"/);
  return match ? match[1] : "#";
}

const onSubmit = handleSubmit(() => {
    // Validate workshops
    if (selectedWorkshops.value.length === 0) {
        workshopError.value = "Du måste välja minst en workshop.";
        return;
    } else {
        workshopError.value = null;
    }

    console.log(selectedWorkshops.value);
    return;
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
                message: `
                WORKSHOPS:
                ${selectedWorkshops.value.join(", ")}

                Meddelande:
                ${message.value}

                Adress:
                ${address.value}
                ${postalCode.value} ${city.value}
        `,
                reply_to: `${email.value}, ${phone.value}`
            },
            "2V1Svme8xyPiol8YX"
        )
        .then(() => {
            loading.value = false;
            displayMessage.value = true;
            selectedWorkshops.value = [];
            resetForm();
        })
        .catch((error) => {
            console.log("Fail.. ", error.text);
        });
};


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