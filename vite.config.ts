import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {checker} from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      enableBuild: true,
    }),
  ],
  server: {
    port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 8080,
  },
  preview: {
    port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 8080,
  },
});
