import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    // Las pruebas de la app corren en jsdom. Las de la API (server/__tests__) declaran
    // "// @vitest-environment node" en su primera linea.
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.ts', 'server/**/*.{test,spec}.js'],
  },
})
