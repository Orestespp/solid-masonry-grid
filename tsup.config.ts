import { defineConfig } from 'tsup';

export default defineConfig({
    // ... tus opciones anteriores ...
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: 'dist',
    treeshake: true,
    external: ['solid-js', 'solid-js/web', 'solid-js/store'],
    outExtension({ format }) {
        return {
            js: format === 'esm' ? '.js' : '.cjs',
        };
    },

    // 💡 SOLUCIÓN CLAVE: Añadir configuración de Babel
    // Esto asegura que el JSX se compile para Solid, no para React.
    esbuildOptions(options) {
        // Elimina estas líneas que forzaban el runtime clásico (h/Fragment)
        // options.jsxFactory = 'h'; 
        // options.jsxFragment = 'Fragment';

        // Añade la configuración para el runtime automático de Solid:
        options.jsx = 'automatic';
        options.jsxImportSource = 'solid-js';
    },
});