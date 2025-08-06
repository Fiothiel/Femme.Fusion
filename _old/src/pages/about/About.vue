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
      <ImageText
        imageName="profile-ella-500.jpg"
        alt="Ella"
        name="Ella"
        :text="null"
        :heading="null"
        :right="true"
      />
      <ImageText
        imageName="profile-hanna-500.jpg"
        alt="Hanna"
        name="Hanna"
        :text="null"
        :heading="null"
        :right="true"
      />
      <ImageText
        imageName="profile-kris-500.jpg"
        alt="Kristina"
        name="Kristina"
        :text="null"
        :heading="null"
        :right="false"
      />
      <ImageText
        imageName="profile-sandra-500.jpg"
        alt="Sandra"
        name="Sandra"
        :text="null"
        :heading="null"
        :right="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageText from "../../components/imagetext/ImageText.vue";

// Todo: List<IMember> to loop out
</script>
