import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // it, describe, expect globally available
    environment: 'jsdom', // DOM support
    setupFiles: './vitest.setup.js',
  },
})
