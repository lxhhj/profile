<script setup>
import { featuredProjects } from '../data/projects'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import ProjectCard from '../components/ProjectCard.vue'
import SilkBackground from '../components/SilkBackground.vue'
import logo from '../assets/logo.jpg'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero：满屏丝绸背景 + 左文右图 -->
    <section class="hero">
      <SilkBackground />
      <div class="container-wide hero-grid">
        <div class="hero-text" v-reveal>
          <p class="greeting">{{ t('hero.greeting') }}</p>
          <h1 class="hero-title">{{ t('hero.title') }}</h1>
          <p class="intro">{{ t('hero.intro') }}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" :href="`mailto:${profile.email}`">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m2 7 10 6L22 7" />
              </svg>
              {{ t('hero.contact') }}
            </a>
            <router-link class="btn btn-ghost" to="/projects">
              {{ t('hero.seeWork') }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="hero-photo" v-reveal>
          <img :src="logo" alt="avatar" />
        </div>
      </div>
    </section>

    <!-- 精选项目 -->
    <section class="projects" v-reveal>
      <div class="container-wide">
        <h2 class="projects-title">{{ t('home.projectsTitle') }}</h2>
        <p class="projects-sub">{{ t('home.projectsSubtitle') }}</p>
        <div class="grid">
          <ProjectCard v-for="p in featuredProjects" :key="p.title" :project="p" />
        </div>
        <div class="view-all">
          <router-link class="btn btn-ghost" to="/projects">
            {{ t('home.viewAll') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  /* 外壳上下各 8px 外边距，减去后 Hero 精确占满第一屏 */
  min-height: calc(100vh - 16px);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 70px;
}

@media (min-width: 900px) {
  .hero-grid {
    grid-template-columns: 1.05fr 0.95fr;
  }
}

.greeting {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.3px;
  margin-bottom: 14px;
}

.hero-title {
  font-size: clamp(40px, 6vw, 58.4px);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.05;
  margin-bottom: 16px;
  max-width: 560px;
}

.intro {
  font-size: 22px;
  line-height: 1.4;
  color: var(--text-muted);
  max-width: 445px;
  margin-bottom: 26px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-photo {
  justify-self: center;
  width: min(420px, 100%);
}

.hero-photo img {
  width: 100%;
  aspect-ratio: 1 / 1.02;
  object-fit: cover;
  border-radius: 28px;
  border: 10px solid var(--card);
  box-shadow: var(--shadow-card), var(--shadow-float);
}

.projects {
  padding: 60px 0 30px;
}

.projects-title {
  text-align: center;
  font-size: clamp(36px, 5vw, 48px);
  font-weight: 500;
  letter-spacing: -1.2px;
  margin-bottom: 14px;
}

.projects-sub {
  text-align: center;
  font-size: 19px;
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 46px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

.view-all {
  display: flex;
  justify-content: center;
  margin-top: 38px;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
