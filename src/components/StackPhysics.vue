<script setup>
// 技术栈物理下落堆叠：matter-js 驱动 DOM 药丸，支持掉落堆积、
// 鼠标/触摸抓取拖拽、碰撞与抛掷，可重播。
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Matter from 'matter-js'

const props = defineProps({
  pills: { type: Array, required: true }, // [{ slug, label, color, dark? }]
})

const wrapRef = ref(null)
const pillRefs = ref([])

let engine = null
let mouseConstraint = null
let rafId = 0
let resizeObserver = null
let intersectionObserver = null
let onScreen = true

function build() {
  const wrap = wrapRef.value
  if (!wrap) return
  const w = wrap.clientWidth
  const h = wrap.clientHeight
  if (!w || !h) return

  // 清理旧的
  if (engine) {
    Matter.World.clear(engine.world)
    Matter.Engine.clear(engine)
  }
  cancelAnimationFrame(rafId)

  engine = Matter.Engine.create({ enableSleeping: true })
  engine.gravity.y = 1.2

  const wallOpts = { isStatic: true }
  const floor = Matter.Bodies.rectangle(w / 2, h + 40, w * 2, 80, wallOpts)
  const left = Matter.Bodies.rectangle(-40, h / 2, 80, h * 4, wallOpts)
  const right = Matter.Bodies.rectangle(w + 40, h / 2, 80, h * 4, wallOpts)
  Matter.World.add(engine.world, [floor, left, right])

  // 鼠标 / 触摸抓取拖拽
  const mouse = Matter.Mouse.create(wrap)
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: { stiffness: 0.2, damping: 0.08, render: { visible: false } },
  })
  Matter.World.add(engine.world, mouseConstraint)

  const bodies = []
  pillRefs.value.forEach((el, i) => {
    const pw = el ? el.offsetWidth : 100
    const ph = 40
    const x = 50 + Math.random() * Math.max(10, w - 100)
    const y = -60 - i * 10 - Math.random() * 300
    const body = Matter.Bodies.rectangle(x, y, pw, ph, {
      restitution: 0.1,
      friction: 0.6,
      angle: (Math.random() - 0.5) * 1.2,
      chamfer: { radius: 20 },
    })
    bodies.push({ body, el, pw, ph })
    Matter.World.add(engine.world, body)
  })

  const loop = () => {
    // 离开视口时跳过计算，回到视口继续
    if (onScreen) {
      Matter.Engine.update(engine, 1000 / 60)
      for (const { body, el, pw, ph } of bodies) {
        el.style.transform =
          `translate(${body.position.x - pw / 2}px, ${body.position.y - ph / 2}px) rotate(${body.angle}rad)`
      }
    }
    rafId = requestAnimationFrame(loop)
  }
  rafId = requestAnimationFrame(loop)
}

function replay() {
  build()
}

onMounted(() => {
  build()
  resizeObserver = new ResizeObserver(() => build())
  resizeObserver.observe(wrapRef.value)
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      onScreen = entries[0]?.isIntersecting ?? true
    },
    { threshold: 0 },
  )
  intersectionObserver.observe(wrapRef.value)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  if (engine) {
    Matter.World.clear(engine.world)
    Matter.Engine.clear(engine)
  }
})
</script>

<template>
  <div ref="wrapRef" class="stack-wrap">
    <div
      v-for="(p, i) in props.pills"
      :key="p.label"
      :ref="(el) => (pillRefs[i] = el)"
      class="stack-pill"
      :style="{ background: p.color, color: p.dark ? '#1a1a1a' : '#ffffff' }"
    >
      <img :src="`https://cdn.simpleicons.org/${p.slug}/${p.dark ? '1a1a1a' : 'ffffff'}`" alt="" />
      {{ p.label }}
    </div>
    <button class="replay" type="button" title="Replay" aria-label="Replay" @click="replay">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12a9 9 0 1 1-2.64-6.36" />
        <path d="M21 3v6h-6" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.stack-wrap {
  position: relative;
  height: 330px;
  border: 1px solid var(--border-soft);
  border-radius: 24px;
  background: var(--bg-soft);
  overflow: hidden;
  /* 容器内禁用页面滚动干扰与文字选择，保证拖拽手感 */
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.stack-pill {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  will-change: transform;
  cursor: grab;
}

.stack-pill:active {
  cursor: grabbing;
}

.stack-pill img {
  width: 18px;
  height: 18px;
  pointer-events: none;
}

.replay {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--border-soft);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  color: var(--text-muted);
  transition: color 0.15s ease, transform 0.15s ease;
}

.replay:hover {
  color: var(--text);
  transform: rotate(40deg);
}
</style>
