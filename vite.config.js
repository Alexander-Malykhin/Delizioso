import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@scss': path.resolve(__dirname, 'src/scss'),
        '@scss/settings': path.resolve(__dirname, 'src/scss/settings'),
        '@UI': path.resolve(__dirname, 'src/UI'),
    }
  }
})
