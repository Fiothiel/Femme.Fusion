<template>
    <div class="courses course-archive content">
        <section class="section">
            <div class="section__content">
                <h1>Tidigare kurser & workshops</h1>
                <p>
                    Här samlar vi tidigare <strong>kurser och workshops</strong> som Femme Fusion har hållit.
                    Vill du boka ett liknande upplägg för ett event, företag eller privat tillfälle?
                    <NuxtLink class="link link--accent" to="/kontakt">Skicka en förfrågan</NuxtLink>.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="section__content">
                <div v-if="courseGroups.length > 0" class="course-archive__groups">
                    <section v-for="group in courseGroups" :key="group.year" class="course-archive__group">
                        <h2>{{ group.year }}</h2>

                        <ul class="table-list">
                            <li v-for="event in group.events" :key="event.id ?? `${event.title}-${event.startDate}`">
                                <NuxtLink v-if="event.id" class="table-list__link" :to="`/workshops/${event.id}`">
                                    <span>{{ getShortDate(event.startDate) }}</span>
                                    {{ event.title }}
                                    <small class="table-list__badge">{{ getCourseFormat(event) }}</small>
                                </NuxtLink>
                                <div v-else class="table-list__text">
                                    <span>{{ getShortDate(event.startDate) }}</span>
                                    {{ event.title }}
                                    <small class="table-list__badge">{{ getCourseFormat(event) }}</small>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>

                <p v-else>
                    Inga tidigare kurser eller workshops finns publicerade just nu.
                </p>

                <div class="section__buttons">
                    <NuxtLink to="/kurser" class="button">Se kommande datum</NuxtLink>
                    <NuxtLink to="/kontakt" class="button button--secondary">Skicka förfrågan</NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUtils } from "@/utils";
import { useEvents } from "@/services/events-service";
import type { IEvent } from "@/types/IEvent";
import { applyPageSeo } from "@/services/seo-service";

type CourseGroup = {
    year: number;
    events: IEvent[];
};

onMounted(() => {
    useUtils().scrollToMain();
});

const { getShortDate } = useUtils();
const { getPastCourses } = useEvents();

const pastCourses = computed<IEvent[]>(() => {
    return getPastCourses();
});

const courseGroups = computed<CourseGroup[]>(() => {
    const groups = new Map<number, IEvent[]>();

    pastCourses.value.forEach((event) => {
        const year = new Date(event.startDate).getFullYear();
        const events = groups.get(year) ?? [];
        events.push(event);
        groups.set(year, events);
    });

    return Array.from(groups.entries()).map(([year, events]) => ({
        year,
        events,
    }));
});

const getCourseFormat = (event: IEvent): string => {
    return event.numOccasions > 1 ? "kurs" : "workshop";
};

applyPageSeo({
    title: "Tidigare kurser & workshops | Femme Fusion",
    description:
        "Se tidigare kurser och workshops med Femme Fusion. Läs om tidigare dansklasser och skicka en förfrågan om du vill boka ett liknande upplägg.",
    path: "/tidigare-kurser",
    ogTitle: "Tidigare kurser & workshops | Femme Fusion",
    ogDescription:
        "En översikt över tidigare kurser och workshops med Femme Fusion.",
    twitterTitle: "Tidigare kurser & workshops | Femme Fusion",
    twitterDescription:
        "Se tidigare kurser och workshops med Femme Fusion.",
    breadcrumbs: [
        { name: "Kurser & dansklasser", path: "/kurser" },
        { name: "Tidigare kurser & workshops", path: "/tidigare-kurser" },
    ],
});
</script>
