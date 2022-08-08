import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
  root: './src/',
  build: {
    outDir: '../',
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'main',
      // the proper extensions will be added
      fileName: 'main'
    },
  }
})