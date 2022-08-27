import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // outDir: "heap-process-bar", // default: dist/
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "HeapProcessBar",
      fileName: (format) => `heap-process-bar.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
