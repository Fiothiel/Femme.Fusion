<template>
  <div class="book content">
    <h1>Bokning</h1>
    <p>Show eller dansklass – låt oss ta hand om det!</p>

    <h2>Show</h2>
    <p>
      Att stå på scenen är vår specialitet! Tack vare vår mångsidiga repertoar
      kan vi leverera underhållning som passar både företagsevenemang och
      privata tillställningar med varierade typer av publik. Dessutom har vi
      möjlighet att erbjuda skräddarsydda lösningar för de kunder som önskar en
      helt unik upplevelse.
      <router-link to="/contact">Kontakta oss</router-link> för mer information
      och bokning.
    </p>
    <div class="book__images">
      <Image
        alt="Framträdande på Arbis i Norrköping"
        :fullWidth="false"
        :fallback="getImagePath('show-2.jpg')"
        :sizes="null"
        :srcset="`
            ${getImagePath('show-2.jpg')}, 500w`"
      />
      <Image
        alt="Framträdande på Arbis i Norrköping"
        :fullWidth="false"
        :fallback="getImagePath('show-1.jpg')"
        :sizes="null"
        :srcset="`
            ${getImagePath('show-1.jpg')}, 500w`"
      />      
      <Image
        alt="Framträdande på Arbis i Norrköping"
        :fullWidth="false"
        :fallback="getImagePath('show-3.jpg')"
        :sizes="null"
        :srcset="`
            ${getImagePath('show-3.jpg')}, 500w`"
      />
      

    </div>
    <h2>Gruppbokning</h2>
    <p>
      En gruppbokning är det perfekta sättet att skapa minnen tillsammans med
      dina vänner eller kollegor. Oavsett om det är en möhippa, födelsedagsfest
      eller en teambuildingaktivitet, erbjuder vi en upplevelse fylld av dans
      och glädje. Välj mellan olika dansstilar som burlesque, cabaret, feminine
      vibe, en mix av båda eller sensual heels – vi skräddarsyr lektionen efter
      era behov och nivåer, så att alla kan vara med och ha roligt.
      <router-link to="/contact">Kontakta oss</router-link> för mer information
      och bokning!
    </p>
    <div class="book__images">      
      <Image
        alt="Gatsbyvibbar med flapper"
        :fullWidth="false"
        :fallback="getImagePath('great-gatsby-900.jpg')"
        :sizes="null"
        :srcset="`
            ${getImagePath('great-gatsby-900.jpg')}, 2500w,
            ${getImagePath('great-gatsby-600.jpg')}, 500w`"
      />
      <Image
        alt="Burlesque och korsetter"
        :fullWidth="false"
        :fallback="getImagePath('groupbooking-burlesque-900.jpg')"
        :sizes="null"
        :srcset="`
            ${getImagePath('groupbooking-burlesque-900.jpg')}, 2500w,
            ${getImagePath('groupbooking-burlesque-600.jpg')}, 500w`"
      />
      <Image
        alt="Höga pleaser shoes i sensual heels"
        :fullWidth="false"
        :fallback="getImagePath('groupbooking-heels-900.jpg')"
        :sizes="null"
        :srcset="`
            ${getImagePath('groupbooking-heels-900.jpg')}, 2500w,
            ${getImagePath('groupbooking-heels-600.jpg')}, 500w`"
      />

    </div>
    <router-link to="/contact" class="button button--large"
      >Kontakta oss</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { useUtils } from "../../utils";
const { getImagePath } = useUtils();
import Image from "../../components/image/Image.vue";
</script>
