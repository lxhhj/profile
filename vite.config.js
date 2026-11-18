import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// base 必须与站点服务的根路径一致：
// - GitHub Pages 默认地址（lxhhj.github.io/profile/）时为 '/profile/'
// - 绑定自定义域名（lxhh.pw）后站点从根路径服务，改为 '/'
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
