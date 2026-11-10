<script setup>
import { ref, computed } from 'vue'
import { experience, education } from '../data/experience'
import { whatIDo, stack } from '../data/skills'
import { useI18n } from '../i18n'

const { t, locale } = useI18n()

const showAll = ref(false)
const visibleExperience = computed(() =>
  showAll.value ? experience : experience.filter((item) => !item.hidden),
)
const hiddenCount = computed(() => experience.filter((item) => item.hidden).length)
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container">
        <h1 class="heading" v-reveal>{{ t('about.title') }}</h1>
        <p class="para" v-reveal v-html="t('about.p1')"></p>
        <p class="para" v-reveal v-html="t('about.p2')"></p>
        <p class="para" v-reveal v-html="t('about.p3')"></p>
      </div>
    </section>

    <section class="section" v-reveal>
      <div class="container">
        <h2 class="section-title">{{ t('about.experience') }}</h2>
        <ul class="timeline">
          <li v-for="item in visibleExperience" :key="item.name.en" class="timeline-item">
            <span class="avatar" :style="{ background: item.gradient }">{{ item.logo }}</span>
            <div class="item-main">
              <span class="item-name">{{ item.name[locale] }}</span>
              <span class="item-role">{{ item.role[locale] }} · {{ item.period }}</span>
            </div>
          </li>
        </ul>
        <button v-if="hiddenCount" class="toggle" type="button" @click="showAll = !showAll">
          {{ showAll ? t('about.showLess') : `${t('about.showMore')} (${hiddenCount})` }}
        </button>
      </div>
    </section>

    <section class="section" v-reveal>
      <div class="container">
        <h2 class="section-title">{{ t('about.education') }}</h2>
        <ul class="timeline">
          <li v-for="item in education" :key="item.name.en" class="timeline-item">
            <span class="avatar" :style="{ background: item.gradient }">{{ item.logo }}</span>
            <div class="item-main">
              <span class="item-name">{{ item.name[locale] }}</span>
              <span class="item-role">{{ item.major[locale] }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" v-reveal>
      <div class="container">
        <h2 class="section-title">{{ t('about.whatido') }}</h2>
        <div class="chip-grid">
          <span v-for="item in whatIDo[locale]" :key="item" class="chip">{{ item }}</span>
        </div>
      </div>
    </section>

    <section class="section" v-reveal>
      <div class="container">
        <h2 class="section-title">{{ t('about.stack') }}</h2>
        <div class="chip-grid">
          <span v-for="item in stack" :key="item.label" class="chip">
            <img
              v-if="item.icon"
              :src="`https://cdn.simpleicons.org/${item.icon}`"
              :alt="item.label"
              loading="lazy"
            />
            {{ item.label }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-head {
  padding: 64px 0 8px;
}

.heading {
  font-size: clamp(1.8rem, 4.5vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}

.para {
  color: var(--text-muted);
  margin-bottom: 14px;
  max-width: 640px;
}

.para :deep(strong) {
  color: var(--text);
  font-weight: 600;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--card);
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  flex-shrink: 0;
}

.item-main {
  display: flex;
  flex-direction: column;
  line-height: 1.45;
}

.item-name {
  font-weight: 600;
  font-size: 0.97rem;
}

.item-role {
  color: var(--text-muted);
  font-size: 0.86rem;
}

.toggle {
  margin-top: 14px;
  border: none;
  background: none;
  color: var(--text-muted);
  font-size: 0.88rem;
  padding: 4px 0;
}

.toggle:hover {
  color: var(--text);
}

.chip-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 640px) {
  .page-head {
    padding: 44px 0 8px;
  }
}
</style>
