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
        handler: "NetworkFirst",
        options: {
          
          cacheableResponse: {
            statuses: [0, 200],
          },
          cacheName: 'dynamic-cache',
          networkTimeoutSeconds: 10, // 設置網絡請求超時時間
          expiration: {
            maxEntries: 50, // 最多快取 50 個項目
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 天後過期
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