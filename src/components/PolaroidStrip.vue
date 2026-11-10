<script setup>
// About 页顶部：倾斜宝丽来卡片扇形排列 + 轻浮动动画。
const props = defineProps({
  items: { type: Array, required: true }, // [{ emoji, label, gradient }]
})

const rotations = [-10, -6, -2, 3, 7, 11]
</script>

<template>
  <div class="strip" v-reveal>
    <figure
      v-for="(item, i) in props.items.slice(0, 6)"
      :key="item.title || item.label"
      class="polaroid"
      :style="{ '--r': rotations[i % rotations.length] + 'deg', '--d': i * 0.45 + 's' }"
    >
      <div class="cover" :style="{ background: item.gradient }">
        <span class="emoji">{{ item.emoji }}</span>
      </div>
      <figcaption>{{ item.title || item.label }}</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.strip {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
}

.polaroid {
  margin: 0;
  background: var(--card);
  border: 1px solid var(--border-soft);
  padding: 8px 8px 10px;
  border-radius: 12px;
  box-shadow: var(--shadow-float);
  transform: rotate(var(--r));
  animation: bob 4s ease-in-out infinite alternate;
  animation-delay: var(--d);
  flex-shrink: 0;
}

.cover {
  width: 124px;
  height: 156px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.emoji {
  font-size: 42px;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.25));
}

figcaption {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: var(--text);
  letter-spacing: -0.1px;
}

@keyframes bob {
  from {
    translate: 0 -5px;
  }
  to {
    translate: 0 6px;
  }
}

@media (max-width: 640px) {
  .strip {
    gap: 10px;
  }
  .polaroid:nth-child(n + 5) {
    display: none;
  }
  .cover {
    width: 96px;
    height: 124px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .polaroid {
    animation: none;
  }
}
</style>
