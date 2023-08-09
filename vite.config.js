import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Library/',
  server: {
    port: 8080,
    host: true
  }
})