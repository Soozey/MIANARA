import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const manualChunks = (id) => {
  if (!id.includes('node_modules')) return undefined
  if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'react'
  if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
  if (id.includes('@tiptap') || id.includes('prosemirror')) return 'editor'
  return 'vendor'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
