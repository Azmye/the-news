import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    proxy: {
      "/api": {
        target: "https://newsapi.org/v2", // Target API server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite path
      },
    },
  },
});
