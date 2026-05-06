export type Accent = "blue" | "emerald" | "gold";

export type PortfolioPage = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  accent: Accent;
  status: "blank";
  futureContent: string[];
};

export const identity = {
  name: "Itay Gozalzani",
  location: "Chicago -> Little Rock",
  roleLine: "software developer. storyteller. community builder.",
  position: "Software Developer I @ SPP | LinkedIn Maxxing",
  movieLine: "my life is a movie",
  welcomeLine: "welcome to my personality brand",
  promise:
    "The opening scene of a personal internet home for software, stories, community, ambition, and curiosity."
} as const;

export const futureContent = ["timeline cards", "featured story cards", "links"];

export const pages: PortfolioPage[] = [
  {
    slug: "life",
    title: "life in a nutshell",
    kicker: "origin map",
    description: "",
    accent: "blue",
    status: "blank",
    futureContent
  },
  {
    slug: "strangers-i-interviewed",
    title: "strangers I interviewed",
    kicker: "curiosity archive",
    description: "",
    accent: "emerald",
    status: "blank",
    futureContent
  },
  {
    slug: "famous-humans",
    title: "famous humans",
    kicker: "proximity notes",
    description: "",
    accent: "gold",
    status: "blank",
    futureContent
  },
  {
    slug: "experiments",
    title: "experiments",
    kicker: "public lab",
    description: "",
    accent: "blue",
    status: "blank",
    futureContent
  },
  {
    slug: "outside-the-9-5",
    title: "outside the 9-5",
    kicker: "after hours",
    description: "",
    accent: "emerald",
    status: "blank",
    futureContent
  },
  {
    slug: "brain-dump",
    title: "brain dump",
    kicker: "raw signal",
    description: "",
    accent: "gold",
    status: "blank",
    futureContent
  },
  {
    slug: "find-me-online",
    title: "find me online",
    kicker: "public trail",
    description: "",
    accent: "blue",
    status: "blank",
    futureContent
  },
  {
    slug: "lets-talk",
    title: "let's talk",
    kicker: "open channel",
    description: "",
    accent: "emerald",
    status: "blank",
    futureContent
  }
];

export function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}
