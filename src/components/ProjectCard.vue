<script setup>
import { useI18n } from '../i18n'

const props = defineProps({
  project: { type: Object, required: true },
})

const { locale } = useI18n()
</script>

<template>
  <a class="card" :href="props.project.link" target="_blank" rel="noopener noreferrer">
    <div class="head">
      <span class="logo" :style="{ background: props.project.gradient }">{{ props.project.emoji }}</span>
      <span class="name">{{ props.project.title }}</span>
      <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </div>
    <div class="cover" :style="{ background: props.project.gradient }">
      <span class="emoji">{{ props.project.emoji }}</span>
    </div>
    <h3 class="title">{{ props.project.title }}</h3>
    <p class="desc">{{ props.project.desc[locale] }}</p>
    <div class="tags">{{ props.project.tags.join(' · ') }}</div>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--card);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.logo {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
}

.name {
  font-size: 15.5px;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.arrow {
  margin-left: auto;
  color: var(--text-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.card:hover .arrow {
  transform: translate(2px, -2px);
  color: var(--text);
}

.cover {
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 16px;
}

.emoji {
  font-size: 52px;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.25));
}

.title {
  font-size: 23px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 1.3;
  margin-bottom: 8px;
}

.desc {
  font-size: 15.5px;
  color: var(--text-muted);
  line-height: 1.55;
  margin-bottom: 16px;
  flex: 1;
}

.tags {
  font-size: 13px;
  color: var(--text-muted);
}
</style>
