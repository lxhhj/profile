<script setup>
import FloatingNav from './components/FloatingNav.vue'
import ConnectSection from './components/ConnectSection.vue'
</script>

<template>
  <div class="shell">
    <FloatingNav />
    <main>
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
