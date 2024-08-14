import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://swbf2.events",
    integrations: [
        AstroPWA({
            workbox: {
                globPatterns: ["**/*.{jpg,png,html,json,css,js}"],
            },
            manifest: {
                name: "EA Star Wars Battlefront II Community Event Calendar",
                short_name: "SWBF2 Events",
                description:
                    "A calendar of current and upcoming events in EA Star Wars Battlefront II (2017).",
                theme_color: "#25282C",
                background_color: "#25282C",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icons: [
                    {
                        src: "./images/touch/icon192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "./images/touch/icon512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
    ],
});
