import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [sveltekit()],
    envPrefix: "SOLACE",
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
        globals: true,
        environment: "jsdom",
    },
    server: {
        port: 3000,
        host: "0.0.0.0",
    },
});
