<script setup>
import { profile } from '../data/profile'
import { useI18n } from '../i18n'

const { t, locale } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="socials">
        <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="social">GitHub</a>
        <a :href="`mailto:${profile.email}`" class="social">Email</a>
        <a :href="profile.x" target="_blank" rel="noopener noreferrer" class="social">X</a>
      </div>
      <p class="note">
        © {{ year }} {{ locale === 'zh' ? profile.name.zh : profile.name.en }} · {{ t('footer.made') }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0 36px;
  margin-top: 24px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.socials {
  display: flex;
  gap: 18px;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.social:hover {
  color: var(--text);
}

.note {
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>
