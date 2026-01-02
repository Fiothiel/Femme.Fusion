<template>
  <footer class="footer">
    <div class="footer__content">
      <section aria-labelledby="footer-about" class="footer__column">
        <h2 id="footer-about">Om Femme Fusion</h2>
        <p>
          Femme Fusion är en showgrupp från Linköping som levererar skräddarsydda
          shower, dans och workshops för företagsevent, fester och scener i
          Östergötland och i hela Sverige.
        </p>
      </section>
      <nav aria-labelledby="footer-links" class="footer__column footer__column--right">
        <h2 id="footer-links">Snabblänkar</h2>
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <NuxtLink :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <section aria-labelledby="footer-contact" class="footer__column footer__column--right">
        <h2 id="footer-contact">Kontakt</h2>
        <address>
          <div>Femme Fusion</div>
          <div><a href="mailto:info@femmefusion.se">info@femmefusion.se</a></div>
          <div>Linköping, Sverige</div>
        </address>
      </section>
      <section aria-labelledby="footer-social" class="footer__column footer__column--right">
        <h2 id="footer-social">Följ oss</h2>
        <ul class="footer__socials">
          <li>
            <a href="https://www.instagram.com/femmefusionofficial/" target="_blank" rel="noopener noreferrer"
              aria-label="Femme Fusion på Instagram" class="footer__icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="256px" height="256px">
                <g transform="">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(5.33333,5.33333)">
                      <path
                        d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/femmefusionofficial" target="_blank" rel="noopener noreferrer"
              aria-label="Femme Fusion på Facebook" class="footer__icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="256px" height="256px">
                <g transform="">
                  <g fill-opacity="0" fill="#be0e0e" fill-rule="nonzero" stroke="none" stroke-width="1"
                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                    stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                  </g>
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(4,4)">
                      <path
                        d="M48,7h-32c-4.418,0 -8,3.582 -8,8v32c0,4.418 3.582,8 8,8h17v-17h-6v-7h6v-5c0,-7 4,-11 10,-11c3.133,0 5,1 5,1v6h-4c-2.86,0 -4,2.093 -4,4v5h7l-1,7h-6v17h8c4.418,0 8,-3.582 8,-8v-32c0,-4.418 -3.582,-8 -8,-8z">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div class="footer__bottom">
      <img class="hero__logo" src="/logo-white.svg" />
      <span>© <time :datetime="String(year)">{{ year }}</time> Femme Fusion</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { menuItems } from '@/data/menu';
import { MenuGroup } from "@/types/MenuItem";
const year = new Date().getFullYear();

const navItems = computed(() =>
  menuItems
    .filter(i => i.group === MenuGroup.FOOTER)          // only main nav
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
);

</script>