<script setup>
import FloatingNav from './components/FloatingNav.vue'
import ConnectSection from './components/ConnectSection.vue'
import { useI18n } from './i18n'

const { t } = useI18n()
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
