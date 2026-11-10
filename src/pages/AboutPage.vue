<script setup>
import { ref, computed } from 'vue'
import { experience, education } from '../data/experience'
import { whatIDo, stackPills } from '../data/skills'
import { projects } from '../data/projects'
import { useI18n } from '../i18n'
import SilkBackground from '../components/SilkBackground.vue'
import PolaroidStrip from '../components/PolaroidStrip.vue'
import StackPhysics from '../components/StackPhysics.vue'

const { t, locale } = useI18n()

// chip 随机贴纸抖动量（按索引确定，保证中英切换时布局稳定）
function chipJitter(i) {
  const h1 = Math.sin(i * 127.1 + 1.3) * 43758.5453
  const h2 = Math.sin(i * 269.5 + 2.7) * 12345.6789
  const h3 = Math.sin(i * 419.2 + 4.1) * 9876.54321
  const r1 = h1 - Math.floor(h1)
  const r2 = h2 - Math.floor(h2)
  const r3 = h3 - Math.floor(h3)
  return {
    '--jr': `${((r1 - 0.5) * 5).toFixed(2)}deg`,
    '--jx': `${((r2 - 0.5) * 6).toFixed(1)}px`,
    '--jy': `${((r3 - 0.5) * 5).toFixed(1)}px`,
    '--dur': `${(3.5 + r1 * 2.5).toFixed(2)}s`,
    '--del': `${(-r2 * 3).toFixed(2)}s`,
  }
}

// 经历折叠：收起时显示前 3 条并渐隐最后一条
const showAll = ref(false)
const collapsedList = experience.filter((item) => !item.hidden)
const fullList = [...collapsedList, ...experience.filter((item) => item.hidden)]
const expList = computed(() => (showAll.value ? fullList : collapsedList))
const hiddenCount = computed(() => experience.filter((item) => item.hidden).length)

// 宝丽来卡片：取前 5 个项目做占位
const polaroids = projects.slice(0, 5).map((p) => ({
  emoji: p.emoji,
  title: p.title,
  gradient: p.gradient,
}))
</script>

<template>
  <div>
    <!-- 顶部：丝绸背景 + 宝丽来卡片 -->
    <section class="top">
      <SilkBackground />
      <div class="strip-wrap">
        <PolaroidStrip :items="polaroids" />
      </div>
    </section>

    <!-- 介绍卡片 -->
    <section class="intro-outer">
      <div class="container-narrow" v-reveal>
        <div class="intro-card">
          <h2 class="intro-title">
            {{ t('about.titlePrefix') }}<span class="name-underline">{{ locale === 'zh' ? '刘坤' : 'Liu Kun' }}</span>{{ locale === 'zh' ? '。' : '.' }}
          </h2>
          <p class="para" v-html="t('about.p1')"></p>
          <p class="para" v-html="t('about.p2')"></p>
          <p class="para" v-html="t('about.p3')"></p>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="block">
      <div class="container-narrow" v-reveal>
        <h3 class="section-label">{{ t('about.experience') }}</h3>
        <div class="soft-panel exp-panel" :class="{ collapsed: !showAll }">
          <div v-for="item in expList" :key="item.name.en" class="exp-row">
            <span class="avatar" :style="{ background: item.gradient }">{{ item.logo }}</span>
            <div class="row-main">
              <div class="row-name">{{ item.name[locale] }}</div>
              <div class="row-meta">{{ item.role[locale] }} <span class="dot">·</span> {{ item.period }}</div>
            </div>
          </div>
          <button v-if="hiddenCount" class="more-btn" type="button" @click="showAll = !showAll">
            {{
              showAll
                ? t('about.showLess')
                : locale === 'zh'
                  ? `再展示 ${hiddenCount} 条`
                  : `Show ${hiddenCount} more`
            }}
            <svg :class="{ flip: showAll }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- 教育背景 -->
    <section class="block">
      <div class="container-narrow" v-reveal>
        <h3 class="section-label">{{ t('about.education') }}</h3>
        <div class="soft-panel">
          <div v-for="item in education" :key="item.name.en" class="exp-row">
            <span class="avatar edu" :style="{ background: item.gradient }">{{ item.logo }}</span>
            <div class="row-main">
              <div class="row-name">{{ item.name[locale] }}</div>
              <div class="row-meta">{{ item.major[locale] }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 我能做什么 -->
    <section class="block">
      <div class="container-narrow" v-reveal>
        <h3 class="section-label">{{ t('about.whatido') }}</h3>
        <div class="soft-panel wi-panel">
          <span
            v-for="(item, i) in whatIDo[locale]"
            :key="item"
            class="wchip"
            :class="i % 2 === 0 ? 'solid' : 'outline'"
            :style="chipJitter(i)"
          >{{ item }}</span>
        </div>
      </div>
    </section>

    <!-- 技术栈：物理下落 -->
    <section class="block">
      <div class="container-narrow" v-reveal>
        <h3 class="section-label">{{ t('about.stack') }}</h3>
        <StackPhysics :pills="stackPills" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.top {
  position: relative;
  padding: 150px 0 60px;
  overflow: hidden;
}

.strip-wrap {
  position: relative;
  z-index: 1;
}

.intro-outer {
  padding: 20px 0 10px;
}

.intro-card {
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--card);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  padding: 40px 32px;
}

@media (min-width: 640px) {
  .intro-card {
    padding: 48px 44px;
  }
}

.intro-title {
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 24px;
}

.name-underline {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 6px;
  text-decoration-color: color-mix(in srgb, var(--text) 45%, transparent);
}

.para {
  font-size: 16.5px;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.para:last-child {
  margin-bottom: 0;
}

.para :deep(strong) {
  color: var(--text);
  font-weight: 700;
}

.block {
  padding: 26px 0 6px;
}

.exp-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
}

.exp-panel.collapsed {
  max-height: 178px;
  overflow: hidden;
}

.exp-panel.collapsed::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 90px;
  background: linear-gradient(to bottom, transparent, var(--bg-soft) 85%);
  pointer-events: none;
}

.exp-row {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--card);
  border-radius: 16px;
  padding: 12px 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  flex-shrink: 0;
}

.avatar.edu {
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
}

.row-name {
  font-size: 16.5px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.35;
}

.row-meta {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.4;
}

.dot {
  margin: 0 3px;
}

.more-btn {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: var(--bg-soft);
  padding: 6px 12px;
  border-radius: 10px;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
}

.more-btn svg {
  transition: transform 0.2s ease;
}

.more-btn svg.flip {
  transform: rotate(180deg);
}

.wi-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 22px 18px;
}

.wchip {
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 15px;
  letter-spacing: -0.1px;
  transform: translate(var(--jx), var(--jy)) rotate(var(--jr));
  animation: chip-drift var(--dur) ease-in-out var(--del) infinite alternate;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* 悬停：摆正 + 弹簧放大（与原站一致） */
.wchip:hover {
  animation: none;
  transform: translate(var(--jx), var(--jy)) rotate(0deg) scale(1.035);
  position: relative;
  z-index: 2;
}

/* 静止时的缓慢漂移 */
@keyframes chip-drift {
  from {
    transform: translate(var(--jx), var(--jy)) rotate(calc(var(--jr) - 0.45deg));
  }
  to {
    transform: translate(var(--jx), var(--jy)) rotate(calc(var(--jr) + 0.45deg));
  }
}

.wchip.solid {
  background: var(--chip-solid);
}

.wchip.outline {
  background: var(--card);
  border: 1px solid var(--border);
}
</style>
