import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),
  output: "static",
  site: "https://itay-portfolio-project.vercel.app"
});
