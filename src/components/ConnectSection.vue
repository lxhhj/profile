<script setup>
import { socials } from '../data/profile'
import { useI18n } from '../i18n'
import SilkBackground from './SilkBackground.vue'
import ContactButton from './ContactButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="connect-outer" v-reveal>
    <div class="container-wide">
      <div class="connect-card">
        <SilkBackground />
        <div class="content">
          <div class="left">
            <h2 class="title">{{ t('connect.heading') }}</h2>
            <p class="text">{{ t('connect.text') }}</p>
            <div class="actions">
              <ContactButton :label="t('connect.contact')" />
              <router-link class="btn btn-ghost" to="/projects">
                {{ t('connect.seeProjects') }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </router-link>
            </div>
          </div>

          <div class="social-panel">
            <div class="icons">
              <a
                v-for="s in socials"
                :key="s.type"
                class="social-btn"
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="s.label"
                :title="s.label"
              >
                <span v-if="s.meta" class="badge">{{ s.meta }}</span>
                <!-- 邮件 -->
                <svg v-if="s.type === 'email'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m2 7 10 6L22 7" />
                </svg>
                <!-- GitHub -->
                <svg v-else-if="s.type === 'github'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                <!-- X -->
                <svg v-else-if="s.type === 'x'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
                </svg>
                <!-- 抖音占位（音符） -->
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </a>
            </div>
            <p class="caption">Built with Vue</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.connect-outer {
  padding: 40px 0 16px;
}

.connect-card {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--card);
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 36px 24px;
}

@media (min-width: 900px) {
  .content {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 40px;
    padding: 44px 40px;
  }
}

.title {
  font-size: clamp(34px, 5vw, 48px);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 18px;
}

.text {
  font-size: 19px;
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 400px;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-panel {
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  background: color-mix(in srgb, var(--card) 82%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
  padding: 48px 24px;
  min-height: 260px;
}

.icons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}

.social-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--card);
  border: 1px solid var(--border-soft);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
  color: var(--text);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.badge {
  position: absolute;
  top: -11px;
  right: -12px;
  background: var(--badge);
  color: #fff;
  font-size: 10.5px;
  font-weight: 700;
  line-height: 1;
  padding: 3px 7px;
  border-radius: 999px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.caption {
  font-size: 13px;
  color: var(--text-muted);
}
</style>
