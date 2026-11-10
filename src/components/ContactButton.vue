<script setup>
// 联系按钮：hover 时整个按钮替换为"邮箱 + 复制图标"，点击复制（✓ 反馈），
// 鼠标移开（或键盘焦点离开）后换回 Contact。
import { ref } from 'vue'
import { profile } from '../data/profile'

const props = defineProps({
  label: { type: String, required: true },
})

const revealed = ref(false)
const copied = ref(false)

function show() {
  revealed.value = true
}

// 复制成功的对勾不自动收回，等鼠标离开（blur）时随整体一起缩回
function hide() {
  revealed.value = false
  copied.value = false
}

async function copy() {
  try {
    await navigator.clipboard.writeText(profile.email)
  } catch (e) {
    /* 剪贴板不可用时静默忽略 */
  }
  copied.value = true
}
</script>

<template>
  <span class="contact-wrap" @mouseenter="show" @mouseleave="hide" @focusin="show" @focusout="hide">
    <button
      class="btn btn-primary contact-btn"
      type="button"
      :aria-label="revealed ? 'Copy email' : 'Show email'"
      :title="revealed ? '点击复制邮箱' : ''"
      @click="copy"
    >
      <!-- 图标：信封 / 复制 / 对勾 -->
      <Transition name="flip" mode="out-in" :duration="{ enter: 220, leave: 240 }">
        <svg v-if="copied" key="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <svg v-else-if="revealed" key="copy" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="12" height="12" rx="2.5" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg v-else key="mail" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="m2 7 10 6L22 7" />
        </svg>
      </Transition>

      <!-- 文字：只随 revealed 切换（复制后图标已表达状态，不显示"已复制"字样） -->
      <Transition name="flip" mode="out-in" :duration="{ enter: 220, leave: 240 }">
        <span :key="revealed ? 'mail' : 'label'" class="swap-txt">
          {{ revealed ? profile.email : props.label }}
        </span>
      </Transition>
    </button>
  </span>
</template>

<style scoped>
.contact-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.contact-btn {
  white-space: nowrap;
}

.swap-txt {
  display: inline-flex;
  align-items: center;
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
