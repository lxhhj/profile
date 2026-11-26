<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import FloatingNav from './components/FloatingNav.vue'
import ConnectSection from './components/ConnectSection.vue'
import { useI18n } from './i18n'
import { profile } from './data/profile'

const { t, locale } = useI18n()
const route = useRoute()

// 页面标题与模块联动：模块名-身份-个人产品空间
const MODULE_KEY = { home: 'nav.home', projects: 'nav.projects', about: 'nav.about' }

watchEffect(() => {
  const moduleName = t(MODULE_KEY[route.name] || 'nav.home')
  const parts = [moduleName, profile.titlePersona[locale.value], t('site.space')]
  document.title = parts.join('-')
})
</script>

<template>
  <a class="skip-link" href="#main">{{ t('nav.skip') }}</a>
  <div class="shell">
    <FloatingNav />
    <main id="main">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <ConnectSection />
    <div class="footer-space" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.footer-space {
  height: 64px;
}
</style>
