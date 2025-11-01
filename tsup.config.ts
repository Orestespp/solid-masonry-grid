import { defineConfig } from 'tsup';

export default defineConfig({
    // Archivos de entrada para tu librería
    entry: ['src/index.ts'], // o 'src/**/*.ts' si tienes múltiples entradas

    // Formatos a generar: ESM para librerías modernas, CJS para compatibilidad
    format: ['esm', 'cjs'],

    // Genera los archivos de declaración de tipos (.d.ts)
    dts: true,

    // Limpia el directorio de salida antes de cada build
    clean: true,

    // Directorio de salida para los bundles
    outDir: 'dist',

    // Hace el "tree-shaking" para eliminar código no usado
    treeshake: true,

    // Especifica las librerías que deben considerarse externas (no incluidas en el bundle)
    // ¡Es CRUCIAL para Solid!
    external: ['solid-js', 'solid-js/web', 'solid-js/store'],

    // Configuración para permitir la extensión .js para los módulos ESM
    outExtension({ format }) {
        return {
            js: format === 'esm' ? '.js' : '.cjs', // Usa .js para ESM, .cjs para CJS
        };
    },
});