import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "data", replacement: "/src/data" },
      { find: "pages", replacement: "/src/pages" },
      { find: "store", replacement: "/src/store" },
      { find: "svgs", replacement: "/src/svgs" },
      { find: "zodSchemas", replacement: "/src/zodSchemas" },
    ],
  },
  server: {
    host: true,
  },
  plugins: [react(), svgr({ include: "**/*.svg?react", })],
})
