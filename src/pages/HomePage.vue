<script setup>
import { profile } from '../data/profile'
import { featuredProjects } from '../data/projects'
import { useI18n } from '../i18n'
import ProjectCard from '../components/ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <p class="greeting" v-reveal>{{ t('hero.greeting') }}</p>
        <h1 class="hero-title" v-reveal>{{ t('hero.title') }}</h1>
        <p class="intro" v-reveal>{{ t('hero.intro') }}</p>
        <div class="hero-actions" v-reveal>
          <a class="btn btn-primary" :href="`mailto:${profile.email}`">{{ t('hero.contact') }}</a>
          <router-link class="btn btn-ghost" to="/projects">{{ t('hero.seeWork') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Featured projects -->
    <section class="section" v-reveal>
      <div class="container">
        <h2 class="section-title">{{ t('home.projectsTitle') }}</h2>
        <p class="subtitle">{{ t('home.projectsSubtitle') }}</p>
        <div class="grid">
          <ProjectCard v-for="p in featuredProjects" :key="p.title" :project="p" />
        </div>
        <div class="view-all">
          <router-link to="/projects">{{ t('home.viewAll') }} →</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 88px 0 56px;
}

.greeting {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.hero-title {
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 18px;
  max-width: 640px;
}

.intro {
  color: var(--text-muted);
  max-width: 560px;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: -12px 0 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.view-all {
  margin-top: 20px;
  font-size: 0.95rem;
}

.view-all a {
  color: var(--text-muted);
  transition: color 0.15s ease;
}

.view-all a:hover {
  color: var(--text);
}

@media (max-width: 640px) {
  .hero {
    padding: 60px 0 44px;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
