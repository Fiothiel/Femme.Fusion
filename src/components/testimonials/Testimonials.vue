<template>
  <div class="testimonials">
    <h2 v-if="heading">{{ heading }}</h2>

    <Splide class="testimonials__carousel" :data-splide="carouselOptions">
      <SplideSlide v-for="(group, groupIndex) in groupedTestimonials" :key="groupIndex">
        <div class="testimonials__group">
          <div v-for="(testimonial, index) in group" :key="index" class="testimonials__item" :class="[{ 'testimonials__item--right': index % 2 !== 0 }, sizeClass(testimonial.quote)]">
            <blockquote class="testimonials__quote">
              {{ testimonial.quote }}
            </blockquote>
            <div v-if="testimonial.from" class="testimonials__from">
              – {{ testimonial.from }}
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const props = defineProps<{
  heading?: string;
  testimonials: Testimonial[];
}>();

const groupedTestimonials = computed(() => {
  const groups = []
  for (let i = 0; i < props.testimonials.length; i += 2) {
    groups.push(props.testimonials.slice(i, i + 2))
  }
  return groups
})

const carouselOptions = JSON.stringify({
  type: 'loop',
  perPage: 1,
  gap: '2rem',
  arrows: props.testimonials.length > 2 ? true : false,
  pagination: false,
  speed: 800,
  autoHeight: true, 
  breakpoints: {
    899: { arrows: false, pagination: true, gap: '2rem' }
  }
})

function sizeClass(quote: string) {
  const len = quote.trim().length
  if (len < 100) return 'testimonials__item--short'
  if (len < 200) return 'testimonials__item--medium'
  return 'testimonials__item--long'
}

</script>