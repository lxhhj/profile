// 项目列表 —— 在这里增删改项目卡片
// link 可替换为你的项目地址（GitHub / 演示站）
export const projects = [
  {
    title: 'TaskFlow',
    emoji: '✅',
    tags: ['Vue · Node.js · Realtime'],
    link: '#',
    gradient: 'linear-gradient(135deg, #5b7cfa, #9b59f6)',
    desc: {
      en: 'A team task collaboration tool with realtime sync, Kanban boards, and smart reminders.',
      zh: '支持实时同步、看板与智能提醒的团队任务协作工具。',
    },
  },
  {
    title: 'ShopHub',
    emoji: '🛍️',
    tags: ['Vue · Element Plus · REST API'],
    link: '#',
    gradient: 'linear-gradient(135deg, #f2709c, #ff9472)',
    desc: {
      en: 'An e-commerce admin dashboard covering products, orders, and data insights.',
      zh: '覆盖商品、订单与数据看板的电商后台管理系统。',
    },
  },
  {
    title: 'ChatEase',
    emoji: '🤖',
    tags: ['AI · LLM · Vue'],
    link: '#',
    gradient: 'linear-gradient(135deg, #0ba360, #3cba92)',
    desc: {
      en: 'An AI chat assistant with streaming responses and custom personas.',
      zh: '支持流式响应与自定义角色的 AI 对话助手。',
    },
  },
  {
    title: 'DataLens',
    emoji: '📊',
    tags: ['Charts · ECharts'],
    link: '#',
    gradient: 'linear-gradient(135deg, #4776e6, #8e54e9)',
    desc: {
      en: 'A data visualization platform that turns spreadsheets into live dashboards.',
      zh: '把表格数据变成可交互图表的数据可视化平台。',
    },
  },
  {
    title: 'MiniBlog',
    emoji: '✍️',
    tags: ['Vite · Markdown'],
    link: '#',
    gradient: 'linear-gradient(135deg, #fc5c7d, #6a82fb)',
    desc: {
      en: 'A lightweight Markdown blog engine with instant search.',
      zh: '轻量级 Markdown 博客引擎，支持秒级搜索。',
    },
  },
  {
    title: 'WeatherNow',
    emoji: '⛅',
    tags: ['API · PWA'],
    link: '#',
    gradient: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    desc: {
      en: 'An installable weather PWA with hourly forecasts and clean visuals.',
      zh: '支持安装、逐小时预报的天气 PWA 应用。',
    },
  },
]

// 首页展示前 4 个
export const featuredProjects = projects.slice(0, 4)
