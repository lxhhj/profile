import { createApp } from 'vue'
import Lenis from 'lenis'
import App from './App.vue'
import router from './router'
import './composables/useTheme'
import './styles/main.css'

// Lenis 平滑滚动（与参考站一致的滚动手感）
const lenis = new Lenis({ lerp: 0.1, autoRaf: true })
lenis.on('scroll', () => {})

const app = createApp(App)

// v-reveal: fade-in-on-scroll directive
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
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
