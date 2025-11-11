import testimonialsData from "@/public/data/testimonials.json";
import { TestimonialCategory } from "~/constants";

export const useTestimonials = () => {
  const testimonials: Ref<Testimonial[]> = ref(testimonialsData);

  const getDanceclass = (): Testimonial[] =>
    testimonials.value.filter(
      (t) => t.category === TestimonialCategory.DanceClass
    );

  const getShow = (): Testimonial[] =>
    testimonials.value.filter((t) => t.category === TestimonialCategory.Show);

  const shuffle = <T>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j]!, a[i]!];
    }
    return a;
  };

  const getRandom = (
    count: number,
    category?: TestimonialCategory
  ): Testimonial[] => {
    let pool = testimonials.value;
    if (category) {
      pool = pool.filter((t) => t.category === category);
    }
    return shuffle(pool).slice(0, count);
  };

  return {
    testimonials,
    getDanceclass,
    getShow,
    getRandom,
  };
};
