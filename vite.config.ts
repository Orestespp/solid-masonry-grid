// vite.config.ts
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: "esnext",
        lib: {
            entry: "src/index.ts",
            name: "SolidMasonryGrid",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["solid-js"],
        },
    },
});
