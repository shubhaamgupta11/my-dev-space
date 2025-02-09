// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: 'https://github.com/shubhaamgupta11/my-dev-space',
  output: 'static',
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});