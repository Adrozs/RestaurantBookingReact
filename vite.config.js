import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression({algorithm: 'brotliCompress'})],

  build: {
    minify: 'terser', // Use Terser for more aggressive minification
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs
        drop_debugger: true, // Removes debuggers
      },
    },
  },
})