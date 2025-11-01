import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    esbuildOptions(options) {
        // 👇 esta es la forma moderna y compatible
        options.jsx = 'preserve';
        options.jsxImportSource = 'solid-js';
    },
});
