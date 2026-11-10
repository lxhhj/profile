import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

const theme = ref(localStorage.getItem(STORAGE_KEY) || 'light')

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
