export type WorkItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: readonly string[];
  image: string;
  href: string;
};

/**
 * Case studies carried over from the founder's former portfolio. Each entry
 * keeps a dedicated `image` slot (see `WorksGrid`) so a project can be
 * reshot or swapped for a proper case-study cover without touching layout.
 */
export const WORKS: readonly WorkItem[] = [
  {
    slug: "gods-favourite-hospital",
    name: "God's Favourite Hospital",
    category: "Healthcare",
    description:
      "A front-end site for a Lagos-based private hospital covering emergency care, maternity, paediatrics, surgery, lab, and pharmacy services \u2014 built to lead with trust and compassionate care.",
    tags: ["Next.js", "Tailwind CSS", "SCSS"],
    image: "/works/gods-favourite-hospital.webp",
    href: "https://www.godsfavouritehospital.com/",
  },
  {
    slug: "holfort-media",
    name: "Holfort Media",
    category: "Digital Agency",
    description:
      "A responsive site for a full-service digital media agency covering brand strategy, social management, content, influencer marketing, and paid ads.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/works/holfort-media.webp",
    href: "https://www.holfortmedia.com.ng/",
  },
  {
    slug: "motrac-global-resources",
    name: "MOTRAC Global Resources",
    category: "Consulting",
    description:
      "A site for a hybrid consultancy and human-capital development firm spanning ICT solutions, business development, policy consulting, and media services.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/works/motrac-global-resources.webp",
    href: "https://motrac-frontend.vercel.app/",
  },
  {
    slug: "next-trix",
    name: "Next-Trix",
    category: "Digital Services",
    description:
      "A front-end app for a digital solutions studio, built to showcase services that drive growth, engage customers, and elevate a brand's presence online.",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "/works/next-trix.webp",
    href: "https://next-trix.vercel.app/",
  },
  {
    slug: "green-janitors",
    name: "Green Janitors",
    category: "NGO",
    description:
      "A front-end app for a youth-led environmental collective standing guard for the planet's future, from protesting atomic testing to combating climate change and pollution.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/works/green-janitors.webp",
    href: "https://green-janitor1.vercel.app/",
  },
  {
    slug: "adunni-foundation",
    name: "Adunni Save a Girl Child Foundation",
    category: "NGO",
    description:
      "A front-end app for an NGO dedicated to nurturing and empowering young girls to achieve their dreams and build brighter futures.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/works/adunni-foundation.webp",
    href: "https://www.adunni-save-a-girl-foundation.com.ng/",
  },
  {
    slug: "ecss",
    name: "ECSS",
    category: "Coaching",
    description:
      "A personalized coaching website built to help clients achieve a healthier work-life balance.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/works/ecss.webp",
    href: "https://ecss-nu.vercel.app/",
  },
  {
    slug: "hitask-app",
    name: "HiTask App",
    category: "Productivity",
    description:
      "A full front-end task management app with user authentication, a dashboard, and several supporting pages.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    image: "/works/hitask-app.webp",
    href: "https://hi-tasks.com.ng/",
  },
  {
    slug: "corporate-website",
    name: "Corporate Website",
    category: "Demo",
    description:
      "A demo front-end for a company offering web development services, built to show a clean, conversion-focused corporate layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/works/corporate-website.webp",
    href: "https://corporate-website-doxw.vercel.app/",
  },
  {
    slug: "mag-bank",
    name: "MAG Bank",
    category: "Finance",
    description:
      "A finance-sector front-end concept exploring a modern banking product experience.",
    tags: ["Next.js", "SCSS", "Node.js"],
    image: "/works/mag-bank.webp",
    href: "https://mag-bank-1.vercel.app/",
  },
  {
    slug: "tindog-app",
    name: "Tindog App",
    category: "Demo",
    description:
      "A playful landing page concept for a service around buying and caring for dogs, built with Bootstrap.",
    tags: ["Bootstrap", "HTML", "CSS"],
    image: "/works/tindog-app.webp",
    href: "https://michaelgnaho.github.io/tindog_web/",
  },
] as const;
