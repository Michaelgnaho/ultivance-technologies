import type { Metadata } from "next";

export const siteConfig = {
  name: "Ultivance Technologies",
  description:
    "Ultivance Technologies is a CAC-registered website development, AI automation, and app development company in Lagos, Nigeria. We design and build websites, mobile apps, custom software, and AI agents for businesses, schools, healthcare providers, NGOs, and government agencies across Africa.",
  url: "https://ultivancetechnologies.com.ng",
  ogImage: "/og-image.png",
  creator: "@ultivancetech",
  authors: [
    {
      name: "Ultivance Technologies",
      url: "https://ultivancetechnologies.com.ng",
    },
  ],
  keywords: [
    "website development",
    "website development Nigeria",
    "website development company Lagos",
    "web development company Nigeria",
    "app development",
    "app dev Nigeria",
    "mobile app development company Nigeria",
    "AI automation",
    "AI automation Nigeria",
    "AI automation for business",
    "AI agents Nigeria",
    "digital transformation company Africa",
    "custom software development Nigeria",
    "Ultivance Technologies",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  // icon.svg and apple-icon.svg in /app are auto-detected by Next.js's
  // file-based metadata convention, so no manual `icons` override is
  // needed here — the previous entries pointed at favicon-16x16.png and
  // apple-icon.png, neither of which exists in /public, which meant
  // Google (and browsers/social crawlers) were hitting 404s for them.
  manifest: "/site.webmanifest",
  // TODO: add Google Search Console + Bing Webmaster verification once
  // both properties are set up, e.g.:
  // verification: { google: "...", other: { "msvalidate.01": "..." } },
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
    },
    twitter: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
