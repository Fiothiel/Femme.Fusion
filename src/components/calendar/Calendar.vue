<template>
    <vue-cal
        class="calendar"
        :events="events"
        default-view="month"
        :disable-views="['years', 'year', 'week', 'day']"
        :time="false"
        :locale="locale"
        events-on-month-view
        @event-click="openEvent"
    />
</template>

<script setup lang="ts">
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

const locale = 'sv';

const events = [
    {
        start: '2026-02-14',
        end: '2026-02-14',
        title: 'Show • Företagsevent',
        class: 'event-show',
    },
    {
        start: '2026-02-18',
        end: '2026-02-18',
        title: 'Dansklass • Feminine vibe',
        class: 'event-class',
    },
    {
        start: '2026-02-22',
        end: '2026-02-22',
        title: 'Photoshoot',
        class: 'event-other',
    },
];

const openEvent = (event: any) => {
    console.log("SUPPPPPPPPPPPPPPP! ", event);
};
</script>
