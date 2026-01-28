<template>
    <main class="error-page">
        <div class="error-page__card">
            <NuxtImg class="error-page__image image" src="/images/error.webp"
                alt="Showartist på scen under en dramatisk föreställning med rekvisita och scenljus." width="1400"
                format="webp" />

            <div class="error-page__content">
                <h1 class="error-page__heading">
                    404
                </h1>
                <span class="error-page__sub-heading">Du har hamnat utanför scenen.</span>

                <p class="error-page__text">
                    Den här sidan finns inte. Men showen fortsätter. Vi hjälper dig tillbaka till rätt plats.
                </p>

                <div class="error-page__actions">
                    <button class="button" @click="handleClearError">
                        Till startsidan
                    </button>

                    <NuxtLink class="button button--ghost" to="/kontakt">
                        Skicka förfrågan
                    </NuxtLink>
                </div>

                <p class="error-page__meta">
                    Felkod: <strong>{{ error.statusCode }}</strong>
                </p>
            </div>
        </div>
    </main>
</template>


<script setup lang="ts">
defineProps<{
    error: {
        statusCode: number;
        statusMessage?: string;
    };
}>();

const handleClearError = () => {
    clearError({ redirect: "/" });
};
</script>