<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section class="section connect" v-reveal>
    <div class="container">
      <h2 class="connect-title">{{ t('connect.heading') }}</h2>
      <p class="connect-text">{{ t('connect.text') }}</p>
      <div class="connect-actions">
        <a class="btn btn-primary" href="mailto:hello@example.com">{{ t('connect.contact') }}</a>
        <router-link class="btn btn-ghost" to="/projects">{{ t('connect.seeProjects') }}</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.connect-title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.connect-text {
  color: var(--text-muted);
  max-width: 520px;
  margin-bottom: 22px;
}

.connect-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
