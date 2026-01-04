export const applyPageSeo = (input: PageSeoInput) => {
  const config = useRuntimeConfig();

  const siteUrl =
    (config.public.siteUrl as string | undefined) ?? "https://femmefusion.se";

  const canonicalUrl = `${siteUrl}${input.path}`;
  const imageUrl = input.image ?? `${siteUrl}/images/meta.jpg`;

  useSeoMeta({
    title: input.title,
    description: input.description,

    ogTitle: input.ogTitle ?? input.title,
    ogDescription: input.ogDescription ?? input.description,
    ogUrl: canonicalUrl,
    ogImage: imageUrl,

    twitterCard: "summary_large_image",
    twitterTitle: input.twitterTitle ?? input.ogTitle ?? input.title,
    twitterDescription:
      input.twitterDescription ?? input.ogDescription ?? input.description,
    twitterImage: imageUrl,
    ogType: input.ogType ?? "website",
  });

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  });

  if (input.faq?.length) {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: input.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    useHead({
      script: [
        {
          key: input.faqKey ?? `faq-${input.path}`,
          type: "application/ld+json",
          innerHTML: JSON.stringify(faqJsonLd),
        },
      ],
    });
  }

  if (input.breadcrumbs?.length) {
    const homeCrumb = { name: "Hem", path: "/" };

    const crumbs = input.breadcrumbs[0]?.path === "/"
      ? input.breadcrumbs
      : [homeCrumb, ...input.breadcrumbs];

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: c.name,
        item: `${siteUrl}${c.path}`,
      })),
    };

    useHead({
      script: [
        {
          key: `breadcrumbs-${input.path}`,
          type: "application/ld+json",
          innerHTML: JSON.stringify(breadcrumbJsonLd),
        },
      ],
    });
  }

  return { canonicalUrl };
};
