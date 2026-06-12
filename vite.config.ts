import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Säkerställer att inga sourcemaps med eval genereras
    minify: 'terser', // Använder Terser för renare komprimering om tillgängligt
    terserOptions: {
      compress: {
        eval: false // Förbjuder uttryckligen eval-optimeringar
      }
    }
  }
})