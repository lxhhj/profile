// 个人信息 —— 改这里即可替换全站的姓名、邮箱、社交链接
export const profile = {
  name: { en: 'Liu Kun', zh: '刘坤' },
  // 页面标题用身份（浏览器标签页：模块名-身份-个人产品空间）
  titlePersona: { en: 'lxhhj', zh: '柳晓黑胡椒' },
  email: 'liukun6356@gmail.com',
  github: 'https://github.com/lxhhj',
  x: 'https://x.com/',
  douyin: '#',
  githubStars: '60+', // GitHub star 展示数字，可自行修改
}

// 社交徽章（联系卡右侧图标，meta 为红色角标数字，留空则不显示）
export const socials = [
  { type: 'email', label: 'Email', meta: '', href: `mailto:${profile.email}` },
  { type: 'github', label: 'GitHub', meta: `★${profile.githubStars}`, href: profile.github },
  { type: 'x', label: 'X / Twitter', meta: '1', href: profile.x },
  { type: 'douyin', label: '抖音', meta: '1,163', href: profile.douyin },
]
