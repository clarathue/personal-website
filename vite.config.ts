import { defineConfig, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Stand des Builds als <meta name="build-sha">, damit der Smoke nach dem Deploy
// warten kann, bis GitHub Pages genau diesen Stand ausliefert.
const BUILD_SHA = process.env.GITHUB_SHA ?? "local";

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
      name: 'build-sha-meta',
      transformIndexHtml: () => [
        { tag: 'meta', attrs: { name: 'build-sha', content: BUILD_SHA }, injectTo: 'head' as const },
      ],
    },
    {
      name: 'serve-static-subpages',
      configureServer(server: ViteDevServer) {
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
  },
}));
