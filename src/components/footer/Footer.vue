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
          <li>
            <NuxtLink to="/">Hem</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/om-oss">Om oss</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kontakt">Kontakt</NuxtLink>
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
          <li>
            <a href="https://www.linkedin.com/company/femme-fusion-se/" target="_blank" rel="noopener noreferrer"
              aria-label="Femme Fusion på LinkedIn" class="footer__icon footer__icon--linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                clip-rule="evenodd" width="256" height="256" viewBox="0 0 512 512">
                <path fill="#fff"
                  d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z" />
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

const year = new Date().getFullYear();

</script>