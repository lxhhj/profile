import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

// 首次访问（无本地记录）跟随系统偏好；之后以用户手动选择为准
function preferred() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(preferred())

watchEffect(() => {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, theme.value)
  }
  return { theme, isDark: theme, toggleTheme }
}
