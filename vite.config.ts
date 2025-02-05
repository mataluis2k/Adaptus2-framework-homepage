import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Updated to match the correct repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});