import { siteConfig } from "@/lib/metadata";

/**
 * Structured data (schema.org JSON-LD) for search engines and AI answer
 * engines (Google AI Overviews, ChatGPT/Perplexity browsing, etc).
 *
 * These don't change what a human sees on the page — they tell machines
 * unambiguously who Ultivance is, what it does, where it operates, and
 * what it costs, which is what surfaces the brand for entity-style and
 * "who does X near me" queries rather than only exact-keyword matches.
 */

const PHONE = "+2348145046894";
const EMAIL = "ultivancetechnologies@gmail.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: "Ultivance Technologies",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/ultivance-icon-badge.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  email: EMAIL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Place", name: "Africa" },
  ],
  sameAs: [
    "https://instagram.com/ultivancetechnologies",
    "https://tiktok.com/@ultivancetechnologies",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      email: EMAIL,
      contactType: "sales",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-US",
};

type CoreService = {
  name: string;
  description: string;
  slug: string;
};

// Mirrors components/services/service-details.tsx — kept in sync manually.
export const CORE_SERVICES: readonly CoreService[] = [
  {
    name: "Website Development",
    description:
      "Business, e-commerce, and CMS-driven websites built to convert, for companies, schools, healthcare providers, NGOs, and government agencies in Nigeria and across Africa.",
    slug: "website-development",
  },
  {
    name: "Mobile App Development",
    description:
      "Android, iOS, and cross-platform mobile app development for startups and organizations.",
    slug: "mobile-app-development",
  },
  {
    name: "AI Automation & Agents",
    description:
      "AI automation and AI agents for customer support, sales, and booking that run without human intervention.",
    slug: "ai-automation",
  },
  {
    name: "Workflow Automation",
    description:
      "CRM, HR, and operations workflow automation that removes repetitive manual work.",
    slug: "workflow-automation",
  },
  {
    name: "Custom Software Development",
    description:
      "Custom management systems and ERPs built around an organization's specific roles and processes.",
    slug: "custom-software",
  },
  {
    name: "UI/UX Design",
    description: "Clear, fast, on-brand interface design for web and mobile products.",
    slug: "ui-ux-design",
  },
  {
    name: "Branding & Identity",
    description: "Logo systems and brand guidelines built to scale with a growing organization.",
    slug: "branding",
  },
  {
    name: "Cloud & API Integration",
    description: "Payment gateways, data pipelines, and third-party API integration.",
    slug: "cloud-api-integration",
  },
  {
    name: "Digital Transformation Consulting",
    description: "Consulting to map an organization's path from manual processes to digital systems.",
    slug: "digital-transformation-consulting",
  },
] as const;

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CORE_SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Place", name: "Africa" },
      ],
      url: `${siteConfig.url}/services#${service.slug}`,
    },
  })),
};

type FaqEntry = { question: string; answer: string };

// Long-tail, question-shaped keywords — this is what AI answer engines and
// Google's "People also ask" actually match against, more than bare
// two-word terms like "AI automation" ever will.
export const SERVICES_FAQ: readonly FaqEntry[] = [
  {
    question: "How much does website development cost in Nigeria?",
    answer:
      "Ultivance Technologies' website projects start from ₦150,000 for a basic site, ₦300,000 for a full business website, and ₦600,000 for e-commerce builds. Final pricing depends on scope, features, and timeline, confirmed during a free discovery consultation.",
  },
  {
    question: "What is AI automation for a business?",
    answer:
      "AI automation replaces repetitive manual work — customer support replies, lead follow-up, booking, data entry — with AI agents and automated workflows that run continuously. Ultivance builds these using AI agents and workflow automation starting from ₦300,000.",
  },
  {
    question: "Does Ultivance Technologies build mobile apps?",
    answer:
      "Yes. Ultivance builds Android, iOS, and cross-platform mobile apps for startups, schools, healthcare providers, and enterprises, starting from ₦800,000 depending on features and platforms.",
  },
  {
    question: "Who is Ultivance Technologies' AI automation and app development for?",
    answer:
      "Ultivance works with businesses, schools, healthcare providers, NGOs, churches, and government agencies across Nigeria and Africa that want to replace manual, repetitive processes with websites, apps, and AI-driven systems.",
  },
  {
    question: "Is Ultivance Technologies a registered company?",
    answer:
      "Yes, Ultivance Technologies is a CAC-registered (Corporate Affairs Commission, Nigeria) AI-powered digital transformation company.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICES_FAQ.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
