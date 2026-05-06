# Personality Brand Operating System Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a cinematic dark mode portfolio site for Itay Gozalzani that feels like a personal internet home for a software developer, storyteller, creator, and community builder.

**Architecture:** Scaffold a Next.js App Router site with static content-driven pages, reusable navigation, shared section/page data, and a restrained motion system. Keep the first screen as the actual portfolio home, not a marketing landing page, with each requested homepage phrase acting as a navigable world-entry.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, lucide-react icons, Framer Motion, Vitest, React Testing Library.

---

## Spec Snapshot

**Theme:** Personality Brand Operating System

**Identity:** Itay Gozalzani, Chicago -> Little Rock, software developer. storyteller. community builder.

**Brand Position:** Software Developer I @ SPP | LinkedIn Maxxing

**Vibe:** Calm, modern, minimal, cinematic, creator-focused, community-driven, slightly futuristic.

**Design Direction:** Dark mode, clean typography, subtle motion, simple navigation, electric blue and emerald accents, subtle gold highlights.

**Homepage Entries:** life in a nutshell, strangers I interviewed, famous humans, experiments, outside the 9-5, brain dump, find me online, let's talk.

**Pages:** `/life`, `/strangers`, `/famous-humans`, `/experiments`, `/outside-9-5`, `/brain-dump`, `/find-me-online`, `/lets-talk`.

---

## File Structure

- Create: `package.json` for scripts and dependencies.
- Create: `next.config.ts` for Next.js configuration.
- Create: `tsconfig.json` for TypeScript configuration.
- Create: `postcss.config.mjs` for Tailwind processing.
- Create: `tailwind.config.ts` for theme tokens and content scanning.
- Create: `vitest.config.ts` for component and data tests.
- Create: `vitest.setup.ts` for Testing Library DOM matchers.
- Create: `app/layout.tsx` for metadata, global shell, and font setup.
- Create: `app/page.tsx` for the cinematic homepage.
- Create: `app/globals.css` for dark theme tokens, base styles, and subtle motion utilities.
- Create: `app/[slug]/page.tsx` for all static portfolio pages.
- Create: `components/site-header.tsx` for primary navigation.
- Create: `components/site-footer.tsx` for identity and online/contact exits.
- Create: `components/home-orbit.tsx` for the homepage entry grid.
- Create: `components/page-panel.tsx` for repeated interior page layout.
- Create: `lib/site-content.ts` for all identity, navigation, homepage, and page copy.
- Create: `tests/site-content.test.ts` to lock required pages and copy.
- Create: `tests/home.test.tsx` to verify the homepage renders the core identity and entries.
- Create: `tests/page-routes.test.tsx` to verify every requested page can render from shared content.
- Create: `README.md` with local development and design intent.

---

## Content Model

Use this exact route map in `lib/site-content.ts`:

```ts
export const pages = [
  { slug: "life", title: "life in a nutshell", accent: "blue" },
  { slug: "strangers", title: "strangers I interviewed", accent: "emerald" },
  { slug: "famous-humans", title: "famous humans", accent: "gold" },
  { slug: "experiments", title: "experiments", accent: "blue" },
  { slug: "outside-9-5", title: "outside the 9-5", accent: "emerald" },
  { slug: "brain-dump", title: "brain dump", accent: "gold" },
  { slug: "find-me-online", title: "find me online", accent: "blue" },
  { slug: "lets-talk", title: "let's talk", accent: "emerald" },
] as const;
```

Use short, intentional placeholder copy that sounds like a living portfolio and can be replaced later:

- `life in a nutshell`: "A moving map of the places, people, and obsessions shaping the work."
- `strangers I interviewed`: "Conversations with people I met through curiosity first."
- `famous humans`: "Notes from proximity to people building unusually visible lives."
- `experiments`: "Small software, media, and community bets shipped in public."
- `outside the 9-5`: "The after-hours layer: events, ideas, friendships, and creative reps."
- `brain dump`: "Loose thoughts before they become posts, projects, or better questions."
- `find me online`: "The public trail across LinkedIn, GitHub, and the rest of the internet."
- `let's talk`: "A low-friction doorway for collaborators, friends, and interesting strangers."

---

## Task 1: Scaffold Next.js Project Files

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "itay-portfolio-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "lucide-react": "^0.468.0",
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-config-next": "^15.1.3",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Create `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create Tailwind and PostCSS config**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#070A12",
        ink: "#E8EEF8",
        muted: "#8E9BB0",
        electric: "#39A7FF",
        emerald: "#34D399",
        gold: "#D9B45F"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
```

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

- [ ] **Step 5: Create Vitest config**

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"]
  },
  resolve: {
    alias: {
      "@": new URL(".", import.meta.url).pathname
    }
  }
});
```

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`

Expected: Dependencies install and `package-lock.json` is created.

- [ ] **Step 7: Commit scaffold**

```bash
git add package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs tailwind.config.ts vitest.config.ts vitest.setup.ts
git commit -m "chore: scaffold portfolio app"
```

---

## Task 2: Add Site Content Contract

**Files:**
- Create: `lib/site-content.ts`
- Create: `tests/site-content.test.ts`

- [ ] **Step 1: Write failing content tests**

```ts
import { identity, pages } from "@/lib/site-content";

describe("site content", () => {
  it("keeps the requested identity language", () => {
    expect(identity.name).toBe("Itay Gozalzani");
    expect(identity.route).toBe("Chicago -> Little Rock");
    expect(identity.roles).toEqual([
      "software developer",
      "storyteller",
      "community builder"
    ]);
    expect(identity.position).toBe("Software Developer I @ SPP | LinkedIn Maxxing");
  });

  it("includes every requested page in order", () => {
    expect(pages.map((page) => page.title)).toEqual([
      "life in a nutshell",
      "strangers I interviewed",
      "famous humans",
      "experiments",
      "outside the 9-5",
      "brain dump",
      "find me online",
      "let's talk"
    ]);
  });

  it("uses stable slugs for every page", () => {
    expect(pages.map((page) => page.slug)).toEqual([
      "life",
      "strangers",
      "famous-humans",
      "experiments",
      "outside-9-5",
      "brain-dump",
      "find-me-online",
      "lets-talk"
    ]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/site-content.test.ts`

Expected: FAIL because `lib/site-content.ts` does not exist.

- [ ] **Step 3: Create `lib/site-content.ts`**

```ts
export type Accent = "blue" | "emerald" | "gold";

export type PortfolioPage = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  accent: Accent;
};

export const identity = {
  name: "Itay Gozalzani",
  route: "Chicago -> Little Rock",
  roles: ["software developer", "storyteller", "community builder"],
  position: "Software Developer I @ SPP | LinkedIn Maxxing",
  promise:
    "A personal internet home for software, stories, community, and public curiosity."
} as const;

export const pages: PortfolioPage[] = [
  {
    slug: "life",
    title: "life in a nutshell",
    kicker: "origin map",
    description: "A moving map of the places, people, and obsessions shaping the work.",
    accent: "blue"
  },
  {
    slug: "strangers",
    title: "strangers I interviewed",
    kicker: "curiosity archive",
    description: "Conversations with people I met through curiosity first.",
    accent: "emerald"
  },
  {
    slug: "famous-humans",
    title: "famous humans",
    kicker: "proximity notes",
    description: "Notes from proximity to people building unusually visible lives.",
    accent: "gold"
  },
  {
    slug: "experiments",
    title: "experiments",
    kicker: "public lab",
    description: "Small software, media, and community bets shipped in public.",
    accent: "blue"
  },
  {
    slug: "outside-9-5",
    title: "outside the 9-5",
    kicker: "after hours",
    description: "The after-hours layer: events, ideas, friendships, and creative reps.",
    accent: "emerald"
  },
  {
    slug: "brain-dump",
    title: "brain dump",
    kicker: "raw signal",
    description: "Loose thoughts before they become posts, projects, or better questions.",
    accent: "gold"
  },
  {
    slug: "find-me-online",
    title: "find me online",
    kicker: "public trail",
    description: "The public trail across LinkedIn, GitHub, and the rest of the internet.",
    accent: "blue"
  },
  {
    slug: "lets-talk",
    title: "let's talk",
    kicker: "open channel",
    description: "A low-friction doorway for collaborators, friends, and interesting strangers.",
    accent: "emerald"
  }
];

export function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- tests/site-content.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit content contract**

```bash
git add lib/site-content.ts tests/site-content.test.ts
git commit -m "feat: define portfolio content model"
```

---

## Task 3: Build Global Shell and Theme

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `components/site-header.tsx`
- Create: `components/site-footer.tsx`

- [ ] **Step 1: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Itay Gozalzani | Personality Brand Operating System",
  description:
    "The digital world of Itay Gozalzani: software developer, storyteller, and community builder."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Add `geist` dependency**

Modify `package.json` dependencies:

```json
"geist": "^1.3.1"
```

Run: `npm install`

Expected: `geist` is added to `package-lock.json`.

- [ ] **Step 3: Create `components/site-header.tsx`**

```tsx
import Link from "next/link";
import { Compass, MessageCircle } from "lucide-react";
import { pages } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-ink">
          <Compass className="h-4 w-4 text-electric" aria-hidden="true" />
          Itay OS
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-4 md:flex">
          {pages.slice(0, 6).map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="text-xs text-muted transition hover:text-ink">
              {page.title}
            </Link>
          ))}
        </nav>
        <Link
          href="/lets-talk"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald/40 text-emerald transition hover:border-emerald hover:bg-emerald/10"
          aria-label="Let's talk"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Create `components/site-footer.tsx`**

```tsx
import Link from "next/link";
import { identity } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>{identity.name} / {identity.route}</p>
        <div className="flex gap-4">
          <Link href="/find-me-online" className="transition hover:text-ink">find me online</Link>
          <Link href="/lets-talk" className="transition hover:text-ink">let's talk</Link>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  background: #070a12;
  color: #e8eef8;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(circle at 20% 10%, rgba(57, 167, 255, 0.16), transparent 34rem),
    radial-gradient(circle at 82% 22%, rgba(52, 211, 153, 0.11), transparent 30rem),
    linear-gradient(180deg, #070a12 0%, #090d16 44%, #070a12 100%);
  color: #e8eef8;
}

a {
  text-decoration: none;
}

::selection {
  background: rgba(57, 167, 255, 0.35);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 6: Run build**

Run: `npm run build`

Expected: FAIL because `app/page.tsx` does not exist yet. This confirms the shell compiles far enough to request a homepage.

- [ ] **Step 7: Commit shell**

```bash
git add app/layout.tsx app/globals.css components/site-header.tsx components/site-footer.tsx package.json package-lock.json
git commit -m "feat: add cinematic site shell"
```

---

## Task 4: Build Cinematic Homepage

**Files:**
- Create: `app/page.tsx`
- Create: `components/home-orbit.tsx`
- Create: `tests/home.test.tsx`

- [ ] **Step 1: Write failing homepage test**

```tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("homepage", () => {
  it("renders the identity and all homepage entries", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Itay Gozalzani" })).toBeInTheDocument();
    expect(screen.getByText("Chicago -> Little Rock")).toBeInTheDocument();
    expect(screen.getByText("software developer. storyteller. community builder.")).toBeInTheDocument();
    expect(screen.getByText("Software Developer I @ SPP | LinkedIn Maxxing")).toBeInTheDocument();

    for (const label of [
      "life in a nutshell",
      "strangers I interviewed",
      "famous humans",
      "experiments",
      "outside the 9-5",
      "brain dump",
      "find me online",
      "let's talk"
    ]) {
      expect(screen.getByRole("link", { name: new RegExp(label, "i") })).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/home.test.tsx`

Expected: FAIL because `app/page.tsx` does not exist.

- [ ] **Step 3: Create `components/home-orbit.tsx`**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioPage } from "@/lib/site-content";

const accentClasses = {
  blue: "border-electric/35 text-electric hover:bg-electric/10",
  emerald: "border-emerald/35 text-emerald hover:bg-emerald/10",
  gold: "border-gold/35 text-gold hover:bg-gold/10"
};

export function HomeOrbit({ pages }: { pages: PortfolioPage[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {pages.map((page, index) => (
        <motion.div
          key={page.slug}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.045, duration: 0.45, ease: "easeOut" }}
        >
          <Link
            href={`/${page.slug}`}
            className={`group flex min-h-36 flex-col justify-between rounded-lg border bg-white/[0.025] p-4 transition ${accentClasses[page.accent]}`}
          >
            <span className="text-xs uppercase tracking-[0.24em] text-muted">{page.kicker}</span>
            <span className="mt-8 flex items-end justify-between gap-4 text-lg font-medium text-ink">
              {page.title}
              <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `app/page.tsx`**

```tsx
import { HomeOrbit } from "@/components/home-orbit";
import { identity, pages } from "@/lib/site-content";

export default function Home() {
  return (
    <main className="px-5">
      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center gap-12 py-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-gold">{identity.position}</p>
          <h1 className="text-5xl font-semibold leading-none text-ink md:text-7xl">
            {identity.name}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{identity.route}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald" />
            <span>{identity.roles.join(". ")}.</span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            {identity.promise}
          </p>
        </div>
        <HomeOrbit pages={pages} />
      </section>
    </main>
  );
}
```

- [ ] **Step 5: Run homepage test**

Run: `npm test -- tests/home.test.tsx`

Expected: PASS.

- [ ] **Step 6: Run build**

Run: `npm run build`

Expected: FAIL because interior route handling is not implemented yet.

- [ ] **Step 7: Commit homepage**

```bash
git add app/page.tsx components/home-orbit.tsx tests/home.test.tsx
git commit -m "feat: build personality operating system homepage"
```

---

## Task 5: Build Interior Portfolio Pages

**Files:**
- Create: `app/[slug]/page.tsx`
- Create: `components/page-panel.tsx`
- Create: `tests/page-routes.test.tsx`

- [ ] **Step 1: Write failing route tests**

```tsx
import { render, screen } from "@testing-library/react";
import Page, { generateStaticParams } from "@/app/[slug]/page";
import { pages } from "@/lib/site-content";

describe("portfolio pages", () => {
  it("generates one route per requested page", () => {
    expect(generateStaticParams()).toEqual(
      pages.map((page) => ({ slug: page.slug }))
    );
  });

  it("renders each page title and description", () => {
    for (const contentPage of pages) {
      render(<Page params={{ slug: contentPage.slug }} />);
      expect(screen.getByRole("heading", { name: contentPage.title })).toBeInTheDocument();
      expect(screen.getByText(contentPage.description)).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/page-routes.test.tsx`

Expected: FAIL because `app/[slug]/page.tsx` does not exist.

- [ ] **Step 3: Create `components/page-panel.tsx`**

```tsx
import type { PortfolioPage } from "@/lib/site-content";

const accentText = {
  blue: "text-electric",
  emerald: "text-emerald",
  gold: "text-gold"
};

export function PagePanel({ page }: { page: PortfolioPage }) {
  return (
    <article className="mx-auto flex min-h-[calc(100vh-153px)] max-w-6xl flex-col justify-center px-5 py-16">
      <p className={`text-sm uppercase tracking-[0.28em] ${accentText[page.accent]}`}>
        {page.kicker}
      </p>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-ink md:text-7xl">
        {page.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        {page.description}
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <section className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
          <h2 className="text-sm font-medium text-ink">signal</h2>
          <p className="mt-3 text-sm leading-6 text-muted">What this part of the world is collecting, clarifying, and sharing.</p>
        </section>
        <section className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
          <h2 className="text-sm font-medium text-ink">archive</h2>
          <p className="mt-3 text-sm leading-6 text-muted">A future home for links, posts, clips, projects, interviews, and notes.</p>
        </section>
        <section className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
          <h2 className="text-sm font-medium text-ink">next</h2>
          <p className="mt-3 text-sm leading-6 text-muted">The next small public artifact that makes this section more alive.</p>
        </section>
      </div>
    </article>
  );
}
```

- [ ] **Step 4: Create `app/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import { PagePanel } from "@/components/page-panel";
import { getPageBySlug, pages } from "@/lib/site-content";

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <PagePanel page={page} />;
}
```

- [ ] **Step 5: Run route tests**

Run: `npm test -- tests/page-routes.test.tsx`

Expected: PASS.

- [ ] **Step 6: Run full test suite**

Run: `npm test`

Expected: PASS for all content, homepage, and route tests.

- [ ] **Step 7: Commit pages**

```bash
git add app/[slug]/page.tsx components/page-panel.tsx tests/page-routes.test.tsx
git commit -m "feat: add portfolio world pages"
```

---

## Task 6: Polish Responsive Visual System

**Files:**
- Modify: `app/globals.css`
- Modify: `app/page.tsx`
- Modify: `components/home-orbit.tsx`
- Modify: `components/page-panel.tsx`
- Modify: `components/site-header.tsx`

- [ ] **Step 1: Add mobile navigation fallback**

Modify `components/site-header.tsx` to keep the desktop nav and add a compact mobile route:

```tsx
<Link
  href="/find-me-online"
  className="text-xs text-muted transition hover:text-ink md:hidden"
>
  online
</Link>
```

Place it between the hidden desktop `nav` and the `/lets-talk` icon link.

- [ ] **Step 2: Tighten responsive homepage type**

Modify the homepage `h1` class in `app/page.tsx`:

```tsx
className="text-5xl font-semibold leading-none text-ink sm:text-6xl md:text-7xl"
```

- [ ] **Step 3: Add subtle cinematic texture without decorative blobs**

Append this to `app/globals.css`:

```css
body::before {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: -1;
  content: "";
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), transparent 76%);
}
```

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: PASS.

- [ ] **Step 5: Run production build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 6: Commit polish**

```bash
git add app/globals.css app/page.tsx components/home-orbit.tsx components/page-panel.tsx components/site-header.tsx
git commit -m "style: polish responsive cinematic portfolio"
```

---

## Task 7: Add README and Final Verification

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md`**

```md
# Itay Gozalzani Portfolio

A cinematic dark mode personal internet home for Itay Gozalzani: software developer, storyteller, community builder.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm test
npm run build
```

## Site Map

- `/` - Personality Brand Operating System homepage
- `/life` - life in a nutshell
- `/strangers` - strangers I interviewed
- `/famous-humans` - famous humans
- `/experiments` - experiments
- `/outside-9-5` - outside the 9-5
- `/brain-dump` - brain dump
- `/find-me-online` - find me online
- `/lets-talk` - let's talk
```

- [ ] **Step 2: Run all verification**

Run: `npm test`

Expected: PASS.

Run: `npm run build`

Expected: PASS.

- [ ] **Step 3: Start dev server for visual review**

Run: `npm run dev`

Expected: Next.js starts on `http://localhost:3000` or the next available port.

- [ ] **Step 4: Browser-check key screens**

Open these routes:

```text
http://localhost:3000/
http://localhost:3000/life
http://localhost:3000/strangers
http://localhost:3000/famous-humans
http://localhost:3000/experiments
http://localhost:3000/outside-9-5
http://localhost:3000/brain-dump
http://localhost:3000/find-me-online
http://localhost:3000/lets-talk
```

Expected:

- Homepage shows "Itay Gozalzani" as the first-viewport signal.
- Homepage includes "Software Developer I @ SPP | LinkedIn Maxxing".
- Homepage includes "Chicago -> Little Rock".
- Homepage includes "software developer. storyteller. community builder."
- All eight homepage entries are visible and clickable.
- Interior pages show their title, kicker, and description.
- No text overlaps on a mobile viewport around 390px wide.
- The palette reads dark, cinematic, electric blue, emerald, and gold, not one-note purple, beige, brown, or slate.

- [ ] **Step 5: Commit docs**

```bash
git add README.md
git commit -m "docs: document portfolio app"
```

---

## Implementation Notes

- Keep copy lower-case where the user supplied lower-case labels. The casual casing is part of the personality system.
- Use `Chicago -> Little Rock` in code for ASCII compatibility, even though the brand note can be verbally described as Chicago to Little Rock.
- Do not add a generic "Projects / About / Contact" portfolio nav. The requested section names are the site's information architecture.
- Do not create an oversized marketing hero that explains the site. The homepage should immediately feel like Itay's digital world.
- Avoid stock imagery for this version. The cinematic feeling should come from layout, contrast, motion, rhythm, and focused copy.
- Use cards only for repeated entry/page panels. Do not wrap the entire page in a card.
- Keep motion subtle and optional through `prefers-reduced-motion`.

---

## Self-Review Checklist

- [ ] Theme appears in the plan: Personality Brand Operating System.
- [ ] Identity appears in the plan: Itay Gozalzani.
- [ ] Location appears in the plan: Chicago -> Little Rock.
- [ ] Role line appears in the plan: software developer. storyteller. community builder.
- [ ] Brand position appears in the plan: Software Developer I @ SPP | LinkedIn Maxxing.
- [ ] All eight homepage labels appear as links.
- [ ] All eight pages have routes.
- [ ] Design direction includes dark mode, clean typography, subtle motion, simple navigation, electric blue, emerald, and gold.
- [ ] Verification includes tests, production build, and browser review.
