import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-build-time',
      transformIndexHtml(html) {
        const stamp = new Date().toISOString()
        return html.replace('</head>', `    <!-- saragungar build: ${stamp} -->\n  </head>`)
      },
    },
  ],
  build: {
    sourcemap: false,
    minify: 'esbuild',
  },
})