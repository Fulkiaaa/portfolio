import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project-neumorphism-2k25/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
