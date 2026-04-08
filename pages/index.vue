<script setup lang="ts">
const config = useRuntimeConfig()
const canonical = useCanonicalUrl('/')

const title = '出海周刊 · 平台运营、独立站、物流与合规'
const description =
  '系统化的跨境电商内容站：覆盖亚马逊等平台运营、Shopify 独立站、跨境物流、支付风控、欧盟税务与市场趋势。每篇文章附可执行清单与结构化检索。'

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

const { data: categories } = await useFetch('/api/nav/categories', {
  key: 'nav-categories',
})
const { data: articleList } = await useFetch<
  {
    slug: string
    title: string
    description: string
    categorySlug: string
    publishedAt: string
    updatedAt: string
    readMinutes: number
    tags: string[]
  }[]
>('/api/articles', { key: 'all-articles' })

const sorted = computed(() =>
  [...(articleList.value ?? [])].sort(
    (a, b) => (a.updatedAt < b.updatedAt ? 1 : -1),
  ),
)

const featured = computed(() => sorted.value.slice(0, 4))
const rest = computed(() => sorted.value.slice(4, 12))
const origin = useSiteOrigin()

useJsonLd([
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.public.siteName,
    url: origin.value,
    description: config.public.siteDescription,
    inLanguage: 'zh-CN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin.value}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.public.siteName,
    url: origin.value,
    logo: `${origin.value}/og-default.png`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '内容频道',
    itemListElement: (categories.value ?? []).map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${origin.value}/category/${c.slug}`,
      name: c.label,
    })),
  },
])
</script>

<template>
  <div>
    <section
      class="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      aria-label="首页头条"
    >
      <div
        class="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div
          class="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-500/30 blur-3xl"
        />
        <div
          class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        />
      </div>
      <div class="relative mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div class="max-w-3xl">
          <p
            class="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-white/10"
          >
            内容驱动 · SEO 友好 · 结构化数据
          </p>
          <h1
            class="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            面向卖家与品牌的
            <span class="text-sky-300">跨境出海知识库</span>
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-slate-300">
            从平台运营到独立站、从物流履约到合规税务，用长文、清单与可检索结构，帮助你把「经验」变成「可复盘的流程」。
          </p>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLink
              to="/search"
              class="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400"
            >
              站内搜索
            </NuxtLink>
            <NuxtLink
              v-if="categories?.[0]"
              :to="`/category/${categories[0].slug}`"
              class="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              浏览频道
            </NuxtLink>
          </div>
        </div>
        <div
          class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            v-for="c in categories?.slice(0, 4)"
            :key="c.slug"
            class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div class="text-xs font-medium text-sky-200/90">频道</div>
            <NuxtLink
              :to="`/category/${c.slug}`"
              class="mt-2 block font-display text-lg font-semibold text-white hover:text-sky-200"
            >
              {{ c.label }}
            </NuxtLink>
            <p class="mt-2 line-clamp-2 text-sm text-slate-400">
              {{ c.description }}
            </p>
            <div class="mt-4 text-xs text-slate-500">{{ c.count }} 篇更新</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:px-14">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="font-display text-2xl font-bold text-slate-900">
            编辑推荐
          </h2>
          <p class="mt-2 text-slate-600">
            近期更新的深度稿件与可执行清单，适合固定复盘与团队共读。
          </p>
        </div>
        <NuxtLink
          class="text-sm font-semibold text-sky-700 hover:text-sky-900"
          to="/search"
        >
          查看全部 →
        </NuxtLink>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <ArticleCard
          v-for="a in featured"
          :key="a.slug"
          :title="a.title"
          :description="a.description"
          :slug="a.slug"
          :category-slug="a.categorySlug"
          :published-at="a.publishedAt"
          :read-minutes="a.readMinutes"
          :tags="a.tags"
        />
      </div>
    </section>

    <section class="border-y border-slate-200 bg-slate-50">
      <div class="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:px-14">
        <div class="grid gap-10 lg:grid-cols-3">
          <div class="lg:col-span-1">
            <h2 class="font-display text-2xl font-bold text-slate-900">
              六大频道
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">
              每个频道都有独立落地页、导语与运营段落（GSC
              定向维护位），并链向该主题下的全部文章。
            </p>
          </div>
          <div class="lg:col-span-2">
            <div class="flex flex-wrap gap-2">
              <NuxtLink
                v-for="c in categories"
                :key="`chip-${c.slug}`"
                :to="`/category/${c.slug}`"
                class="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-sky-50 hover:ring-sky-200"
              >
                {{ c.label }}
                <span class="ml-1 text-xs text-slate-400">({{ c.count }})</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:px-14">
      <h2 class="font-display text-2xl font-bold text-slate-900">最新更新</h2>
      <p class="mt-2 text-slate-600">
        更多文章持续扩充；你也可以用站内搜索按关键词定位。
      </p>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          v-for="a in rest"
          :key="`r-${a.slug}`"
          :title="a.title"
          :description="a.description"
          :slug="a.slug"
          :category-slug="a.categorySlug"
          :published-at="a.publishedAt"
          :read-minutes="a.readMinutes"
          :tags="a.tags"
        />
      </div>
    </section>
  </div>
</template>
