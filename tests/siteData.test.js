import { describe, expect, it } from "vitest";
import {
  awards,
  identity,
  interviews,
  navigation,
  socialLinks,
  writingFilters
} from "@/data/siteData";

describe("site data", () => {
  it("keeps the requested title and tagline", () => {
    expect(identity.name).toBe("Itay Gozalzani");
    expect(identity.title).toBe("Personality Brand");
    expect(identity.heroText).toBe("Welcome to my personality brand page");
    expect(identity.tagline).toBe("Software developer. Storyteller. Community builder.");
    expect(identity.location).toBe("Chicago to Little Rock.");
  });

  it("includes every requested section", () => {
    expect(navigation.map((item) => item.label)).toEqual([
      "Start Here",
      "My Life",
      "My Interviews",
      "My Awards",
      "My Brain",
      "Poems",
      "Social Links"
    ]);
  });

  it("models interviews with fields that can be filled later", () => {
    expect(interviews[0]).toEqual(
      expect.objectContaining({
        person: expect.any(String),
        date: expect.any(String),
        location: expect.any(String),
        lesson: expect.any(String),
        link: expect.any(String),
        category: expect.any(String)
      })
    );
  });

  it("keeps social stats humble and accurate to the spec", () => {
    expect(socialLinks.map((item) => [item.platform, item.stat, item.href])).toEqual([
      ["LinkedIn", "2,800 followers", "https://www.linkedin.com/in/itay-gozalzani/"],
      ["TikTok", "320 followers, highest views 200k", "https://www.tiktok.com/@tyty.the.guy"],
      ["Instagram", "850 followers, highest views 101k", "https://www.instagram.com/tyty.the.guy"],
      ["X", "0 followers", "https://x.com/tyty_the_guy"],
      ["YouTube", "58 subscribers", "https://youtube.com/@tyty-the-guy"]
    ]);
  });

  it("has starter data for filterable writing and awards", () => {
    expect(writingFilters).toEqual(["All", "Essay", "LinkedIn", "Reflection", "Idea"]);
    expect(awards.length).toBeGreaterThan(0);
  });

  it("includes the requested achievement facts and features FUSE", () => {
    expect(awards.map((award) => award.title)).toEqual([
      "Team Moai: Synchrony Annual Hackathon Winner",
      "Graduated with highest honors",
      "Master of Computer Science",
      "IGNITE Engagement and Events Chair",
      "SPP FUSE Vice-Chair",
      "St. Jude half marathon fundraiser",
      "2025 SPP Stacy Duckett Award"
    ]);

    const fuse = awards.find((award) => award.title === "SPP FUSE Vice-Chair");
    expect(fuse).toEqual(
      expect.objectContaining({
        year: "March 2026 - present",
        featured: true,
        description: expect.stringContaining("promoting financial awareness")
      })
    );
  });
});
