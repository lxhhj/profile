<script setup>
// 联系按钮：点击后文字翻转显示邮箱，同时复制到剪贴板，几秒后自动翻回。
import { onBeforeUnmount, ref } from 'vue'
import { profile } from '../data/profile'

const props = defineProps({
  label: { type: String, required: true },
})

const revealed = ref(false)
let timer = null

function reveal() {
  // 静默复制邮箱（非安全上下文下可能失败，忽略）
  try {
    navigator.clipboard?.writeText(profile.email).catch(() => {})
  } catch (e) {
    /* noop */
  }
  revealed.value = true
  clearTimeout(timer)
  timer = setTimeout(() => {
    revealed.value = false
  }, 3500)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <button class="btn btn-primary contact-btn" type="button" aria-label="Show email" @click="reveal">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 10 6L22 7" />
    </svg>
    <!-- 显式 duration：不依赖 transitionend 事件（后台标签页等环境不会触发） -->
    <Transition name="flip" mode="out-in" :duration="{ enter: 220, leave: 240 }">
      <span :key="revealed ? 'mail' : 'label'" class="swap-txt" :class="{ mail: revealed }">
        {{ revealed ? profile.email : props.label }}
      </span>
    </Transition>
  </button>
</template>

<style scoped>
.contact-btn {
  white-space: nowrap;
}

.swap-txt {
  display: inline-flex;
  align-items: center;
}

.swap-txt.mail {
  letter-spacing: 0;
  font-weight: 500;
}

.flip-enter-active,
.flip-leave-active {
  transition: opacity 0.22s ease, filter 0.22s ease;
}

.flip-enter-from,
.flip-leave-to {
  opacity: 0;
  filter: blur(6px);
}
</style>
