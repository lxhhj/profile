import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initTheme } from './composables/useTheme'
import './styles/main.css'

initTheme()

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
