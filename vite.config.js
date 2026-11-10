import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// base 需与仓库名一致，GitHub Pages 站点地址为 https://lxhhj.github.io/profile/
export default defineConfig({
  base: '/profile/',
  plugins: [vue()],
})
