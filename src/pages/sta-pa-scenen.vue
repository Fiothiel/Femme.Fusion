<template>
    <div class="content">
        <section class="section">
            <div class="section__content">
                <ContentPost :post="mockPost" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import ContentPost from "@/components/contentpost/ContentPost.vue";
import { useUtils } from "~/utils";

onMounted(() => {
  useUtils().scrollToMain();
});

const mockPost = {
    id: "sta-pa-scenen",
    heading: "Stå på scenen med Femme Fusion",
    preamble:
        "Purr stretch meow. Step into spotlight, tail high and whiskers forward. Cat ipsum dolor sit amet, curious floof with a taste for drama. Pause. Blink slowly. Decide this feels right.",
    image: {
        src: "/images/sta-pa-scenen.webp",
        alt: "Kattlik scenenergi med självsäker pose i rampljus.",
        photographer: "Fotograferna Hoog"
    },
    body: `
        <p>
            Purr meow meow hiss stretch. Jump on couch, lick paws, then suddenly decide this is the moment.
            Whiskers forward, tail high, claim the spotlight. Cat ipsum dolor sit amet, floof elit,
            but only when it feels right.
        </p>

        <p>
            Chase the red dot across the stage. Pause dramatically. Blink slowly at the audience.
            Meow loudly for no reason. Sit in the center and refuse to move.
            Cat ipsum energy, controlled chaos, soft paws and sharp focus.
        </p>

        <p>
            Nap briefly. Wake up powerful. Demand attention. Knock something over.
            Pretend it was intentional. Cat ipsum rules apply. If it works, it works.
        </p>

        <p>
            <a class="button" href="mailto:info@femmefusion.se">Maila oss</a>
        </p>
    `
};
</script>
