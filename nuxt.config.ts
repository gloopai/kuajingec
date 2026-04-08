import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const siteUrl =
  process.env.NUXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'http://localhost:3000'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl,
      siteName: '跨境电商观察',
      siteDescription:
        '面向卖家与品牌的跨境电商内容站：平台运营、独立站、物流、支付合规与市场洞察，系统化梳理可执行策略与中立工具信息。',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
  },
})
