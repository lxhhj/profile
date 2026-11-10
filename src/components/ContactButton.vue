<script setup>
// 联系按钮：hover 切换显示邮箱，旁边弹出复制按钮；点击复制地址。
// 鼠标移开（或键盘焦点离开）后翻回 Contact。
import { onBeforeUnmount, ref } from 'vue'
import { profile } from '../data/profile'

const props = defineProps({
  label: { type: String, required: true },
})

const revealed = ref(false)
const copied = ref(false)
let timer = null

function show() {
  clearTimeout(timer)
  revealed.value = true
}

function hide() {
  // 复制成功的反馈展示期间不立即收起
  if (copied.value) {
    timer = setTimeout(() => {
      revealed.value = false
      copied.value = false
    }, 1200)
    return
  }
  revealed.value = false
}

async function copy() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      copied.value = false
      revealed.value = false
    }, 1400)
  } catch (e) {
    /* 剪贴板不可用时静默忽略 */
  }
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <span class="contact-wrap" @mouseenter="show" @mouseleave="hide" @focusin="show" @focusout="hide">
    <button
      class="btn btn-primary contact-btn"
      type="button"
      aria-label="Show email"
      :title="revealed ? profile.email : ''"
      @click="copy"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 6L22 7" />
      </svg>
      <Transition name="flip" mode="out-in" :duration="{ enter: 220, leave: 240 }">
        <span :key="revealed ? 'mail' : 'label'" class="swap-txt">{{ revealed ? profile.email : props.label }}</span>
      </Transition>
    </button>

    <Transition name="pop">
      <button
        v-if="revealed"
        class="copy-btn"
        type="button"
        :aria-label="copied ? 'Copied' : 'Copy email'"
        :title="copied ? '已复制' : '复制邮箱'"
        @click.stop="copy"
      >
        <!-- 复制成功显示对勾 -->
        <svg v-if="copied" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="12" height="12" rx="2.5" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
    </Transition>
  </span>
</template>

<style scoped>
.contact-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.contact-btn {
  white-space: nowrap;
}

.swap-txt {
  display: inline-flex;
  align-items: center;
}

/* 复制按钮：跟在主按钮后面弹出 */
.copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--border-soft);
  background: var(--card);
  color: var(--text);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
  transition: background 0.15s ease, transform 0.15s ease;
}

.copy-btn:hover {
  transform: translateY(-1px);
}

/* 弹出动画 */
.pop-enter-active {
  transition: opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1), transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.6) translateX(-8px);
}

/* 文字模糊翻转 */
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
