import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src/components', 'src/hooks'],
            outDir: 'dist',
            tsconfigPath: './tsconfig.app.json'
        })
    ],
    base: '/ok-shaun-components/',
    build: {
        lib: {
            name: 'okShaunComponents',
            fileName: (format) => `ok-shaun-components.${format}.js`,
            entry: './lib/main.ts',
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
