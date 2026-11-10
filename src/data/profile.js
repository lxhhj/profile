// 个人信息 —— 改这里即可替换全站的姓名、邮箱、社交链接
export const profile = {
  name: { en: 'Liu Kun', zh: '刘坤' },
  email: 'liukun6356@gmail.com',
  github: 'https://github.com/liukun6356',
  x: 'https://x.com/',
  githubStars: '60+', // GitHub star 展示数字，可自行修改
}

// 社交徽章（页脚 / 联系区展示）
export const socials = [
  { type: 'github', label: 'GitHub', meta: `★60+`, href: profile.github },
  { type: 'email', label: 'Email', meta: '', href: `mailto:${profile.email}` },
  { type: 'x', label: 'X / Twitter', meta: '', href: profile.x },
]
