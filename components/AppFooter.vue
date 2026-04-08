<script setup lang="ts">
const config = useRuntimeConfig()
const year = new Date().getFullYear()

const { data: categories } = await useFetch('/api/nav/categories', {
  key: 'nav-categories',
})
</script>

<template>
  <footer class="border-t border-slate-200 bg-white">
    <div
      class="mx-auto grid w-full max-w-[88rem] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:px-14"
    >
      <div class="space-y-4">
        <SiteBrand variant="on-light" />
        <p class="text-sm leading-relaxed text-slate-600">
          面向卖家与品牌方：平台运营、独立站增长、物流履约、支付风控与合规税务。中立、可检索、可复盘。
        </p>
      </div>
      <div>
        <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">
          频道
        </div>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="c in categories" :key="c.slug">
            <NuxtLink
              class="text-slate-700 hover:text-sky-700"
              :to="`/category/${c.slug}`"
            >
              {{ c.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">
          站内
        </div>
        <ul class="mt-4 space-y-2 text-sm text-slate-700">
          <li>
            <NuxtLink class="hover:text-sky-700" to="/search">站内搜索</NuxtLink>
          </li>
          <li>
            <a class="hover:text-sky-700" href="/sitemap.xml">Sitemap</a>
          </li>
          <li>
            <a class="hover:text-sky-700" href="/robots.txt">robots.txt</a>
          </li>
        </ul>
      </div>
      <div>
        <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">
          说明
        </div>
        <p class="mt-4 text-sm leading-relaxed text-slate-600">
          税务、法律与平台规则会随时变化；涉及重大决策前请咨询持牌顾问并以官方政策为准。
        </p>
      </div>
    </div>
    <div class="border-t border-slate-200 bg-slate-50">
      <div
        class="mx-auto flex w-full max-w-[88rem] flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14"
      >
        <span>© {{ year }} {{ config.public.siteName }} · 内容用于学习与信息整理</span>
        <span class="text-slate-400">本站非任何电商平台的官方站点</span>
      </div>
    </div>
  </footer>
</template>
