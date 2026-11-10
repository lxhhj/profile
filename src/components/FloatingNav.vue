<script setup>
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale, toggleLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="nav-wrap">
    <nav class="pill" aria-label="Primary">
      <router-link to="/" exact-active-class="active">{{ t('nav.home') }}</router-link>
      <router-link to="/projects" exact-active-class="active">{{ t('nav.projects') }}</router-link>
      <router-link to="/about" exact-active-class="active">{{ t('nav.about') }}</router-link>
      <span class="divider" aria-hidden="true"></span>
      <button class="lang" type="button" @click="toggleLocale">
        {{ locale === 'en' ? '中文' : 'EN' }}
      </button>
      <button class="theme" type="button" @click="toggleTheme" :title="isDark ? 'Light mode' : 'Dark mode'">
        <svg v-if="isDark" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrap {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.pill {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 50px;
  padding: 0 10px;
  border-radius: 999px;
  background: var(--nav-bg);
  border: 1px solid var(--nav-border);
  box-shadow: var(--shadow-nav);
  backdrop-filter: blur(14px) saturate(1.4);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
}

.pill a,
.lang {
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 15px;
  color: var(--text-muted);
  background: transparent;
  border: none;
  transition: color 0.15s ease, background 0.15s ease;
  white-space: nowrap;
}

.pill a:hover,
.lang:hover {
  color: var(--text);
}

.pill a.active {
  background: var(--nav-active);
  color: var(--text);
  font-weight: 500;
}

.divider {
  width: 1px;
  height: 20px;
  background: var(--nav-border);
  margin: 0 8px;
}

.theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-left: 4px;
  border-radius: 999px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  transition: color 0.15s ease, background 0.15s ease;
}

.theme:hover {
  background: var(--nav-active);
  color: var(--text);
}

@media (max-width: 480px) {
  .pill {
    height: 44px;
    padding: 0 6px;
  }
  .pill a,
  .lang {
    padding: 6px 10px;
    font-size: 13.5px;
  }
  .divider {
    margin: 0 4px;
  }
  .theme {
    width: 30px;
    height: 30px;
  }
}
</style>
