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
    maximumFileSizeToCacheInBytes: 50000000,
    globPatterns: ["**/*"],
    runtimeCaching: [
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith("/");
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
        src: "/Tony-official-main/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/Tony-official-main/",
    start_url: "/Tony-official-main/",
    orientation: "portrait",
  },
};

export default defineConfig({
  base: "/Tony-official-main/",
  plugins: [react(), VitePWA(manifest)],
});