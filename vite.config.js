import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/api": {
    //     target: "https://cleanuri.com/",
    //     changeOrigin: true,
    //     rewrite: (path) => {
    //       console.log("Rewriting path:", path);
    //       return path.replace(/^\/api/, "/api");
    //     },
    //   },
    // },
  },
  base: "/url-shortening-page/",
});
