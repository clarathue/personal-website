import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'serve-static-subpages',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/hr' || req.url === '/hr/') {
            req.url = '/hr/index.html';
          }
          next();
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add history fallback for client-side routing
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
}));
