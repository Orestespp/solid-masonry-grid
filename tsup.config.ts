import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    target: "esnext",
    jsx: "preserve", // ⬅️ deja que Solid controle el JSX
    esbuildOptions(options) {
        // ✅ Asegura que SolidJS maneje JSX correctamente
        options.jsxImportSource = "solid-js";
        options.jsx = "automatic";
    },
});
