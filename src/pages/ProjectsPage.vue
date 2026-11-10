<script setup>
import { projects } from '../data/projects'
import { useI18n } from '../i18n'
import ProjectCard from '../components/ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container">
        <h1 class="heading" v-reveal>{{ t('projects.heading') }}</h1>
        <p class="sub" v-reveal>{{ t('projects.subtitle') }}</p>
      </div>
    </section>

    <section class="section" v-reveal>
      <div class="container">
        <div class="grid">
          <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
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
  margin-bottom: 10px;
}

.sub {
  color: var(--text-muted);
  max-width: 560px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

@media (max-width: 640px) {
  .page-head {
    padding: 44px 0 8px;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
