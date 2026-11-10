import { reactive, computed } from 'vue'

const STORAGE_KEY = 'portfolio-locale'

const state = reactive({ locale: localStorage.getItem(STORAGE_KEY) || 'en' })

function setDocLang() {
  document.documentElement.lang = state.locale === 'zh' ? 'zh-CN' : 'en'
}
setDocLang()

export const messages = {
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About' },
    hero: {
      greeting: "Hey 👋, I'm Liu Kun",
      title: 'Full-stack engineer & product builder',
      intro:
        'I love building useful products that solve real problems — from clean, delightful interfaces to the reliable systems behind them.',
      contact: 'Contact',
      seeWork: 'See my work',
    },
    home: {
      projectsTitle: 'My projects',
      projectsSubtitle: 'A few things I have built across web, tools, and AI.',
      viewAll: 'View all projects',
    },
    projects: {
      heading: 'Selected work',
      subtitle: 'Products and side projects I have built to solve real problems.',
    },
    about: {
      title: "Hello! I'm Liu Kun.",
      p1: 'A <strong>full-stack engineer</strong> who enjoys turning ideas into useful, well-crafted software. I care about the whole product — from product thinking and system design down to hands-on engineering.',
      p2: 'Over the years I have built <strong>web platforms, backend services, data tools, and mobile apps</strong>. The domains change, but the approach stays the same: find a real problem, simplify it, and keep building until it works.',
      p3: 'I love making things. My goal is to <strong>make everyday life a little easier through products that just work</strong> — and to keep learning along the way.',
      experience: 'Experience',
      education: 'Education',
      whatido: 'What I do',
      stack: 'Stack',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    connect: {
      heading: "Let's connect",
      text: "I'm always open to new opportunities, creative ideas, or a friendly chat about building things. Feel free to reach out!",
      contact: 'Contact',
      seeProjects: 'See projects',
    },
    footer: { made: 'Built with Vue 3 + Vite' },
  },
  zh: {
    nav: { home: '首页', projects: '项目', about: '关于' },
    hero: {
      greeting: '你好 👋，我是刘坤',
      title: '全栈工程师 & 产品构建者',
      intro: '热爱构建真正解决实际问题的产品 —— 从清爽易用的界面，到背后稳定可靠的系统。',
      contact: '联系我',
      seeWork: '看看我的作品',
    },
    home: {
      projectsTitle: '我的项目',
      projectsSubtitle: '一些我在 Web、工具和 AI 领域做过的东西。',
      viewAll: '查看全部项目',
    },
    projects: {
      heading: '精选作品',
      subtitle: '为解决实际问题而做的产品与练手项目。',
    },
    about: {
      title: '你好！我是刘坤。',
      p1: '一名喜欢把想法变成实用、精工软件的<strong>全栈工程师</strong>。我关注产品的整体 —— 从产品思考、系统设计，到动手写代码。',
      p2: '这些年我做过<strong>Web 平台、后端服务、数据工具和移动应用</strong>。领域在变，但方法始终不变：找到真实的问题，把它简化，然后持续构建直到可用。',
      p3: '我热爱创造。我的目标是<strong>用能真正跑起来的产品，让日常生活更轻松一点</strong> —— 同时在路上不断学习。',
      experience: '工作经历',
      education: '教育背景',
      whatido: '我能做什么',
      stack: '技术栈',
      showMore: '展开更多',
      showLess: '收起',
    },
    connect: {
      heading: '保持联系',
      text: '欢迎交流新机会、新想法，或者聊聊任何关于造东西的话题。随时联系我！',
      contact: '联系我',
      seeProjects: '看看项目',
    },
    footer: { made: '使用 Vue 3 + Vite 构建' },
  },
}

export function useI18n() {
  const t = (path) => path.split('.').reduce((obj, key) => obj?.[key], messages[state.locale]) ?? path

  const locale = computed({
    get: () => state.locale,
    set: (value) => {
      state.locale = value
      localStorage.setItem(STORAGE_KEY, value)
      setDocLang()
    },
  })

  const toggleLocale = () => {
    locale.value = state.locale === 'en' ? 'zh' : 'en'
  }

  return { t, locale, toggleLocale }
}
