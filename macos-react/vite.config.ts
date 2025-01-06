import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/macos-react/macos-react",
  plugins: [vitePluginSvgr(), react()],
  server: {
    port: 3000,
  },
});
