<script setup>
// 丝绸质感 WebGL 背景：自写 shader，输出半透明白色丝带，
// 叠加在浅色底上呈灰波、深色底上呈灰光（配合 CSS grayscale 滤镜）。
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref(null)
let gl = null
let rafId = 0
let resizeObserver = null
const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float t = u_time * 0.35;
  vec2 p = uv * 3.0;
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    p += vec2(
      0.32 * sin(p.y * (1.6 + fi * 0.35) + t * (0.7 + fi * 0.13)),
      0.28 * cos(p.x * (1.3 + fi * 0.31) - t * (0.5 + fi * 0.11))
    );
    v += amp * sin(p.x * 2.1 + p.y * 1.7 + t + fi * 1.7);
    amp *= 0.55;
  }
  v = smoothstep(0.12, 0.88, v * 0.5 + 0.5);
  // 亮度决定丝带明暗：白底上呈灰波，黑底上呈灰光（同一画布适配双主题）
  float a = 0.10 + 0.55 * v;
  vec3 c = mix(vec3(0.22), vec3(1.0), v) * a;
  gl_FragColor = vec4(c, a);
}
`

function compile(glCtx, type, source) {
  const shader = glCtx.createShader(type)
  glCtx.shaderSource(shader, source)
  glCtx.compileShader(shader)
  if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
    throw new Error(glCtx.getShaderInfoLog(shader))
  }
  return shader
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas || !gl) return
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (!w || !h) return
  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(h * dpr)
  gl.viewport(0, 0, canvas.width, canvas.height)
}

onMounted(() => {
  const canvas = canvasRef.value
  gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: true })
  if (!gl) return

  const program = gl.createProgram()
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT))
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG))
  gl.linkProgram(program)
  gl.useProgram(program)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(program, 'a_pos')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(program, 'u_res')
  const uTime = gl.getUniformLocation(program, 'u_time')

  resize()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const start = performance.now()
  const render = (now) => {
    gl.uniform2f(uRes, canvas.width, canvas.height)
    gl.uniform1f(uTime, (now - start) / 1000)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    rafId = requestAnimationFrame(render)
  }
  rafId = requestAnimationFrame(render)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  resizeObserver?.disconnect()
})
</script>

<template>
  <canvas ref="canvasRef" class="silk" aria-hidden="true"></canvas>
</template>

<style scoped>
.silk {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: grayscale(1);
  opacity: 0.9;
}
</style>
