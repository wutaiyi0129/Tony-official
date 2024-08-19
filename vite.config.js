import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  registerType: "autoUpdate",
  includeAssets: ["**/*"],
  devOptions: {
    enabled: true,
  },
  workbox: {
    maximumFileSizeToCacheInBytes: 500000000,
    globPatterns: ["**/*"],
    runtimeCaching: [
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith("/video/");
        },
        handler: "CacheFirst",
        options: {
          cacheName: "tony-cache",
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  manifest: {
    name: "Tony部落格",
    short_name: "Tony部落格",
    description: "Tony部落格",
    icons: [
      {
        src: "logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  base: "/",
  plugins: [react(), VitePWA(manifest)],
});