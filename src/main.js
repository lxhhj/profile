import { createApp } from 'vue'
import Lenis from 'lenis'
import App from './App.vue'
import router from './router'
import './composables/useTheme'
import './styles/main.css'

// Lenis 平滑滚动（与参考站一致的滚动手感）；尊重系统"减少动态效果"偏好
const lenis =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? null
    : new Lenis({ lerp: 0.1, autoRaf: true })
if (lenis) lenis.on('scroll', () => {})

const app = createApp(App)

// v-reveal: fade-in-on-scroll directive
// 用 data 属性而非 class，避免 Vue 重渲染时抹掉指令加的可见状态
app.directive('reveal', {
  mounted(el) {
    el.dataset.reveal = 'pending'
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = 'visible'
            io.disconnect()
          }
        }
      },
      { threshold: 0.08 },
    )
    io.observe(el)
  },
})

app.use(router)
app.mount('#app')
