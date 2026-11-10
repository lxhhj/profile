<script setup>
import { projects } from '../data/projects'
import { useI18n } from '../i18n'
import ProjectCard from '../components/ProjectCard.vue'
import SilkBackground from '../components/SilkBackground.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- 大标题 + 丝绸背景 -->
    <section class="head">
      <SilkBackground />
      <div class="head-inner" v-reveal>
        <h1 class="heading">{{ t('projects.heading') }}</h1>
        <p class="sub">{{ t('projects.subtitle') }}</p>
      </div>
    </section>

    <!-- 全部项目 -->
    <section class="list">
      <div class="container-wide" v-reveal>
        <div class="grid">
          <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.head {
  position: relative;
  padding: 220px 0 90px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.head-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
}

.heading {
  font-size: clamp(44px, 7vw, 64px);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.05;
  margin-bottom: 18px;
}

.sub {
  font-size: 19px;
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 520px;
  margin: 0 auto;
}

.list {
  padding: 30px 0 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

@media (max-width: 760px) {
  .head {
    padding: 150px 0 60px;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
