import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  darkMode: "class",
  content: ["./index.html", "./src/**/.{js,ts,jsx,tsx}"],
  theme: {
    extended: {},
  },
  plugins: [react(), tailwindcss()],

  build: {
    target: "esnext",
    minify: "terser",

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 100,
  },
});
