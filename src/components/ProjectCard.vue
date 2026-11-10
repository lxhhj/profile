<script setup>
import { useI18n } from '../i18n'

const props = defineProps({
  project: { type: Object, required: true },
})

const { locale } = useI18n()
</script>

<template>
  <a class="card" :href="props.project.link" target="_blank" rel="noopener noreferrer">
    <div class="cover" :style="{ background: props.project.gradient }">
      <span class="emoji">{{ props.project.emoji }}</span>
    </div>
    <div class="body">
      <h3 class="title">{{ props.project.title }}</h3>
      <p class="desc">{{ props.project.desc[locale] }}</p>
      <div class="meta">
        <span class="tags">{{ props.project.tags.join(' · ') }}</span>
        <span class="arrow" aria-hidden="true">→</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--card);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.cover {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.emoji {
  font-size: 3rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

.body {
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.title {
  font-size: 1.02rem;
  font-weight: 600;
}

.desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  flex: 1;
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}

.tags {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.arrow {
  color: var(--text-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.card:hover .arrow {
  transform: translateX(3px);
  color: var(--text);
}
</style>
