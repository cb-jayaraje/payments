import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const ASSET_URL = process.env.ASSET_URL || '';


// https://vitejs.dev/config/
export default defineConfig({
  base: `${ASSET_URL}/dist`,
  plugins: [vue()]
})
