import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()], // Enable React support
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map @/ to src/
    },
  },
  server: {
    port: 3000, // Set the development server port
    open: true, // Open the browser automatically
  },
  build: {
    outDir: 'dist', // Set the output directory for the build
    sourcemap: true, // Generate source maps for debugging
  },
});