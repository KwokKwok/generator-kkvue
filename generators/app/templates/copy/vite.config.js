import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  plugins: [vue(), createSvgSpritePlugin()]
})
