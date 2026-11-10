<script setup>
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale, toggleLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <router-link to="/" class="brand">{{ locale === 'zh' ? profile.name.zh : profile.name.en }}</router-link>

      <nav class="links">
        <router-link to="/" exact-active-class="active">{{ t('nav.home') }}</router-link>
        <router-link to="/projects" exact-active-class="active">{{ t('nav.projects') }}</router-link>
        <router-link to="/about" exact-active-class="active">{{ t('nav.about') }}</router-link>
      </nav>

      <div class="actions">
        <button class="icon-btn lang" type="button" @click="toggleLocale" :title="locale === 'en' ? '切换到中文' : 'Switch to English'">
          {{ locale === 'en' ? '中文' : 'EN' }}
        </button>
        <button class="icon-btn" type="button" @click="toggleTheme" :title="isDark ? 'Light mode' : 'Dark mode'">
          <!-- sun / moon -->
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 60px;
}

.brand {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.links {
  display: flex;
  gap: 22px;
  font-size: 0.92rem;
  color: var(--text-muted);
}

.links a {
  transition: color 0.15s ease;
}

.links a:hover,
.links a.active {
  color: var(--text);
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-size: 0.82rem;
  transition: background 0.15s ease;
}

.icon-btn:hover {
  background: var(--chip-bg);
}

@media (max-width: 520px) {
  .links {
    gap: 14px;
    font-size: 0.88rem;
  }
}
</style>
