import { describe, expect, it } from "vitest";
import { getPageBySlug, identity, pages } from "@/content/siteContent";

describe("portfolio content contract", () => {
  it("keeps Itay's requested identity language", () => {
    expect(identity.name).toBe("Itay Gozalzani");
    expect(identity.location).toBe("Chicago -> Little Rock");
    expect(identity.roleLine).toBe("software developer. storyteller. community builder.");
    expect(identity.position).toBe("Software Developer I @ SPP | LinkedIn Maxxing");
    expect(identity.movieLine).toBe("my life is a movie");
    expect(identity.welcomeLine).toBe("welcome to my personality brand");
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

  it("uses stable Astro route slugs", () => {
    expect(pages.map((page) => page.slug)).toEqual([
      "life",
      "strangers-i-interviewed",
      "famous-humans",
      "experiments",
      "outside-the-9-5",
      "brain-dump",
      "find-me-online",
      "lets-talk"
    ]);
  });

  it("can look up each portfolio page by slug", () => {
    for (const page of pages) {
      expect(getPageBySlug(page.slug)).toEqual(page);
    }
  });

  it("keeps each page ready for future content without filling it now", () => {
    for (const page of pages) {
      expect(page.status).toBe("blank");
      expect(page.futureContent).toEqual(["timeline cards", "featured story cards", "links"]);
    }
  });
});
