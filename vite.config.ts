import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: "./src/index.ts",
      name: "mreycode-utility",
     fileName: 'index'
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom"
        }
      }
    }
  },
  plugins: [
    react(), 
    dts({
      outDir: './dist/types',
      tsconfigPath: './tsconfig.json'
    })
  ],
})
