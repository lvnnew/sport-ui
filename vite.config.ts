import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 8080,
  },
  preview: {
    port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 8080,
  },
});
