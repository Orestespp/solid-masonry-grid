import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    esbuildOptions(options) {
        // Usa el transformador JSX de Solid
        options.jsx = 'transform';
        options.jsxFactory = 'h';
        options.jsxFragment = 'Fragment';
        options.jsxImportSource = 'solid-js';
    },
});
