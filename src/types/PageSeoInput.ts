export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};


export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  image?: string;
  faqKey?: string;
  faq?: FaqItem[];
  ogType?: "website" | "article";
  breadcrumbs?: BreadcrumbItem[];
};