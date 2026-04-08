<script setup lang="ts">
const route = useRoute()
const q = computed(() => (route.query.q as string) || '')

const { data } = await useFetch(
  () => `/api/search?q=${encodeURIComponent(q.value)}`,
  { watch: [q] },
)

const results = computed(() => data.value?.results ?? [])

const title = '站内搜索 · 出海周刊'
const description =
  '按标题、摘要与标签搜索出海周刊（Chuhai Weekly）站内的文章与专题段落。'

const canonical = useCanonicalUrl('/search')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonical,
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))
</script>

<template>
  <div class="mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 lg:px-14">
    <h1 class="font-display text-3xl font-bold text-slate-900">站内搜索</h1>
    <p class="mt-3 text-slate-600">
      输入关键词匹配标题、摘要与标签。搜索 URL 可被收录为发现路径：
      <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
        /search?q=
      </code>
    </p>

    <div v-if="!q" class="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
      在顶部搜索框输入关键词，或带上查询参数访问本页。
    </div>

    <div v-else class="mt-10 space-y-6">
      <p class="text-sm text-slate-600">
        关键词「<span class="font-semibold text-slate-900">{{ q }}</span>」共
        {{ results.length }} 条结果
      </p>
      <div v-if="results.length === 0" class="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
        没有匹配文章。试试更短的关键词，或浏览频道聚合页。
      </div>
      <div v-else class="grid gap-4">
        <article
          v-for="r in results"
          :key="r.slug"
          class="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
        >
          <NuxtLink
            class="font-display text-lg font-semibold text-slate-900 hover:text-sky-800"
            :to="`/article/${r.slug}`"
          >
            {{ r.title }}
          </NuxtLink>
          <p class="mt-2 text-sm text-slate-600">{{ r.description }}</p>
          <div class="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
            <NuxtLink
              class="font-medium text-sky-700 hover:underline"
              :to="`/category/${r.categorySlug}`"
            >
              查看频道
            </NuxtLink>
            <span>{{ r.publishedAt }}</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
