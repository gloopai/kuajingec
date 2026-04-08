<script setup lang="ts">
defineProps<{
  title: string
  description: string
  slug: string
  categorySlug: string
  publishedAt?: string
  readMinutes?: number
  tags?: string[]
}>()

const labelMap: Record<string, string> = {
  'platform-ops': '平台与运营',
  'dtc-brand': '独立站与品牌',
  logistics: '跨境物流',
  'payments-risk': '支付与风控',
  'compliance-tax': '合规与税务',
  'market-insight': '市场与趋势',
}
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition hover:border-sky-200 hover:shadow-card"
  >
    <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
      <NuxtLink
        :to="`/category/${categorySlug}`"
        class="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-700 ring-1 ring-slate-200/80 hover:bg-sky-50 hover:text-sky-800"
      >
        {{ labelMap[categorySlug] ?? '专栏' }}
      </NuxtLink>
      <span v-if="publishedAt">{{ publishedAt }}</span>
      <span v-if="readMinutes">约 {{ readMinutes }} 分钟</span>
    </div>
    <h2 class="mt-4 font-display text-lg font-semibold text-slate-900">
      <NuxtLink :to="`/article/${slug}`" class="hover:text-sky-800">
        {{ title }}
      </NuxtLink>
    </h2>
    <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
      {{ description }}
    </p>
    <div v-if="tags?.length" class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="t in tags.slice(0, 4)"
        :key="t"
        class="rounded-md bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600 ring-1 ring-slate-100"
      >
        {{ t }}
      </span>
    </div>
    <div class="mt-5">
      <NuxtLink
        class="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-900"
        :to="`/article/${slug}`"
      >
        阅读全文
        <span aria-hidden="true" class="transition group-hover:translate-x-0.5">→</span>
      </NuxtLink>
    </div>
  </article>
</template>
