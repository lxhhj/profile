// 项目列表 —— 在这里增删改项目卡片（占位内容，替换成你自己的项目）
// title: 项目名（卡片头部） headline: 一句话简介（卡片大标题，与原站格式一致）
// link 可替换为你的项目地址（GitHub / 演示站）
export const projects = [
  {
    title: 'TaskFlow',
    emoji: '✅',
    tags: ['Vue', 'Node.js', 'Realtime'],
    link: '#',
    gradient: 'linear-gradient(135deg, #5b7cfa, #9b59f6)',
    headline: {
      en: 'A team workspace that keeps everyone in sync.',
      zh: '让团队始终保持同频的协作工作区。',
    },
    desc: {
      en: 'Kanban boards, realtime sync, and smart reminders that keep a small team moving without another meeting.',
      zh: '看板、实时同步与智能提醒，让小团队不必再开会也能高效推进。',
    },
  },
  {
    title: 'ShopHub',
    emoji: '🛍️',
    tags: ['Vue', 'Element Plus', 'REST API'],
    link: '#',
    gradient: 'linear-gradient(135deg, #f2709c, #ff9472)',
    headline: {
      en: 'Run your whole shop from one clean dashboard.',
      zh: '在一个清爽的后台里打理整家店铺。',
    },
    desc: {
      en: 'Products, orders, and data insights in a single admin dashboard, built for speed on busy sale days.',
      zh: '商品、订单与数据看板集于一身，为繁忙的大促日而生。',
    },
  },
  {
    title: 'ChatEase',
    emoji: '🤖',
    tags: ['AI', 'LLM', 'Vue'],
    link: '#',
    gradient: 'linear-gradient(135deg, #0ba360, #3cba92)',
    headline: {
      en: 'An AI companion that chats the way you think.',
      zh: '一个按你的思路来对话的 AI 伙伴。',
    },
    desc: {
      en: 'Streaming responses, custom personas, and local history — a chat assistant that stays out of your way.',
      zh: '流式响应、自定义角色与本地历史，安静可靠的对话助手。',
    },
  },
  {
    title: 'DataLens',
    emoji: '📊',
    tags: ['Charts', 'ECharts'],
    link: '#',
    gradient: 'linear-gradient(135deg, #4776e6, #8e54e9)',
    headline: {
      en: 'Turn raw spreadsheets into living dashboards.',
      zh: '把原始表格变成会说话的仪表盘。',
    },
    desc: {
      en: 'Drop in a spreadsheet and get interactive charts, filters, and shareable views in seconds.',
      zh: '导入表格，几秒钟得到可交互的图表、筛选与可分享的视图。',
    },
  },
  {
    title: 'MiniBlog',
    emoji: '✍️',
    tags: ['Vite', 'Markdown'],
    link: '#',
    gradient: 'linear-gradient(135deg, #fc5c7d, #6a82fb)',
    headline: {
      en: 'Publish ideas with a blog that stays out of the way.',
      zh: '用一辆不打扰你的小博客发布想法。',
    },
    desc: {
      en: 'A lightweight Markdown blog engine with instant search and a reading experience that comes first.',
      zh: '轻量级 Markdown 博客引擎，秒级搜索，阅读体验优先。',
    },
  },
  {
    title: 'WeatherNow',
    emoji: '⛅',
    tags: ['API', 'PWA'],
    link: '#',
    gradient: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    headline: {
      en: 'Know the weather before you even look outside.',
      zh: '不用看窗外，就知道外面的天气。',
    },
    desc: {
      en: 'An installable weather app with hourly forecasts, clean visuals, and offline support.',
      zh: '支持安装的天气应用，逐小时预报、清爽界面、离线可用。',
    },
  },
  {
    title: 'CodePet',
    emoji: '🐣',
    tags: ['Electron', 'Fun'],
    link: '#',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    headline: {
      en: 'A tiny desktop buddy that watches your commits.',
      zh: '一只盯着你提交记录的桌面小伙伴。',
    },
    desc: {
      en: 'It lives in your menu bar, reacts to your commit streak, and nudges you when you forget to rest.',
      zh: '住在菜单栏里，为你的连续提交欢呼，也在你忘了休息时提醒你。',
    },
  },
  {
    title: 'RouteMate',
    emoji: '🗺️',
    tags: ['Vue', 'Maps API'],
    link: '#',
    gradient: 'linear-gradient(135deg, #43cea2, #185a9d)',
    headline: {
      en: 'City trips with stops that reorder themselves.',
      zh: '行程站点会自动重排的城市旅行规划。',
    },
    desc: {
      en: 'Plan a day out and let the route re-sort as you add places, times, and moods.',
      zh: '添加地点、时间与心情，路线自动为你重排优化。',
    },
  },
  {
    title: 'NoteNest',
    emoji: '📓',
    tags: ['Markdown', 'Local-first'],
    link: '#',
    gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)',
    headline: {
      en: 'A nested notebook built for fast capture.',
      zh: '为快速记录而生的层级笔记本。',
    },
    desc: {
      en: 'Local-first notes with nested pages, instant search, and zero sign-in required.',
      zh: '本地优先、页面层级、秒级搜索，而且完全不需要登录。',
    },
  },
  {
    title: 'FitLoop',
    emoji: '💪',
    tags: ['PWA', 'Charts'],
    link: '#',
    gradient: 'linear-gradient(135deg, #ff512f, #dd2476)',
    headline: {
      en: 'Daily workout loops with zero friction.',
      zh: '零负担的每日锻炼循环。',
    },
    desc: {
      en: 'Build a routine, check it off anywhere, and watch your streaks and stats grow offline-first.',
      zh: '建立习惯、随处打卡，离线优先地见证你的坚持与数据。',
    },
  },
]

// 首页展示前 4 个（与原站密度一致）
export const featuredProjects = projects.slice(0, 4)
