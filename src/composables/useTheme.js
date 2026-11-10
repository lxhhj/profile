const STORAGE_KEY = 'portfolio-theme'

function preferred() {
  return localStorage.getItem(STORAGE_KEY) || 'light'
}

function apply(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function initTheme() {
  apply(preferred())
}

export function useTheme() {
  const theme = preferred()
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, next)
    apply(next)
    window.location.reload()
  }
  return { toggleTheme, isDark: theme === 'dark' }
}
