import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@graph': path.resolve(__dirname, './src/__generated__/graph.ts'),
    },
  },
  server: {
    //port: process.env.PORT || 5100,
    host: 'localhost',
    open: true,
    proxy: {
      '/graphql': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
      '/file': 'http://localhost:3000',
    },
  },
});
