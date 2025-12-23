import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: true, // listen on all interfaces (required for mobile/ngrok)
    port: 5174,
    allowedHosts: true, // allow ngrok + any mobile host
  },

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg"],
      manifest: {
        name: "FrankenVIN",
        short_name: "FrankenVIN",
        description: "A car passport for Frankenstein builds (MVP mock).",
        theme_color: "#0b0b0f",
        background_color: "#0b0b0f",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "vite.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,woff2}"],
      },
    }),
  ],
});
