import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.tsx"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    external: ["solid-js"], // no incluir solid-js en tu bundle
    esbuildOptions(options) {
        options.jsx = "preserve"; // <- importante
        options.jsxImportSource = "solid-js"; // solo para tipos, no para runtime
    },
});
