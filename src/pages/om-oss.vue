<template>
  <div class="about">
    <h1>Femme Fusion</h1>
    <p>
      Vi är en professionell showgrupp baserad i Linköping, Östergötland, och vi
      reser gärna dit bokningarna tar oss för att skapa oförglömliga dans- och
      showupplevelser. Gruppen startade 2023, men vi har alla flera års
      erfarenhet av scenframträdanden och underhållning. Vi har bakgrund inom
      olika dansstilar och showformat, vilket gör oss flexibla och
      anpassningsbara efter era behov. Oavsett om det handlar om en privat show,
      företagsevent eller en skräddarsydd upplevelse, kan vi erbjuda
      högkvalitativ underhållning. Vårt fokus är att skapa minnesvärda
      upplevelser och leverera en förstklassig show för alla tillfällen.
    </p>
    <div class="about__members">
      <figure class="about__member about__member--left">
        <NuxtImg
          src="/images/profile/ella.jpg"
          alt="Ella"
        />
        <figcaption>Ella</figcaption>
      </figure>
      <figure class="about__member about__member--left">
        <NuxtImg
          src="/images/profile/hanna.jpg"
          alt="Hanna"
        />
        <figcaption>Hanna</figcaption>
      </figure>
      <figure class="about__member">
        <NuxtImg
          src="/images/profile/kristina.jpg"
          alt="Kristina"
        />
        <figcaption>Kristina</figcaption>
      </figure>
      <figure class="about__member">
        <NuxtImg
          src="/images/profile/sandra.jpg"
          alt="Sandra"
        />
        <figcaption>Sandra</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  displayInMenu: true,
  menuLabel: "Om oss",
  order: 1,
});

// Todo: List<IMember> to loop out
</script>
