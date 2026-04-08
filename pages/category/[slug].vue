<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data, error } = await useFetch(`/api/nav/category/${slug}`)

if (error.value || !data.value) {
  throw createError({ statusCode: 404, message: '分类不存在' })
}

const entity = data.value.entity
const items = data.value.items

const config = useRuntimeConfig()
const origin = useSiteOrigin()
const canonical = computed(() => `${origin.value}/category/${slug}`)

useSeoMeta({
  title: `${entity.title} · 频道`,
  description: entity.description,
  ogTitle: `${entity.title} · ${config.public.siteName}`,
  ogDescription: entity.description,
  ogUrl: canonical,
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))

useJsonLd([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: origin.value,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: entity.title,
        item: `${origin.value}/category/${entity.slug}`,
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: entity.title,
    itemListElement: items.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${origin.value}/article/${a.slug}`,
      name: a.title,
    })),
  },
])
</script>

<template>
  <div class="border-b border-slate-200 bg-white">
    <div class="mx-auto w-full max-w-[88rem] px-5 py-10 sm:px-8 lg:px-14">
      <BreadcrumbBar
        :items="[
          { name: '首页', to: '/' },
          { name: entity.title },
        ]"
      />
      <h1
        class="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
      >
        {{ entity.title }}
      </h1>
      <p class="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
        {{ entity.intro }}
      </p>
    </div>
  </div>

  <div class="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 lg:px-14">
    <section class="grid gap-10 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h2 class="font-display text-xl font-semibold text-slate-900">
          本频道文章
        </h2>
        <div class="mt-8 grid gap-6 sm:grid-cols-2">
          <ArticleCard
            v-for="a in items"
            :key="a.slug"
            :title="a.title"
            :description="a.description"
            :slug="a.slug"
            :category-slug="slug"
            :published-at="a.publishedAt"
            :read-minutes="a.readMinutes"
            :tags="a.tags"
          />
        </div>
      </div>
      <aside class="space-y-8">
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 class="text-sm font-semibold text-slate-900">
            检索意图段落（可运营维护）
          </h3>
          <p class="mt-2 text-xs text-slate-500">
            对应手册中的 gscBlocks：用于承接长尾问句与站内信息增益。
          </p>
          <div class="mt-6 space-y-6">
            <div v-for="(b, i) in entity.gscBlocks" :key="i">
              <h4 class="text-sm font-semibold text-slate-800">
                {{ b.heading }}
              </h4>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                {{ b.body }}
              </p>
            </div>
          </div>
        </div>
        <div class="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
          <h3 class="text-sm font-semibold text-slate-900">站内导航</h3>
          <p class="mt-2 text-sm text-slate-600">
            不确定从哪开始？试试
            <NuxtLink class="font-semibold text-sky-800" to="/search">
              站内搜索
            </NuxtLink>
            ，或回到
            <NuxtLink class="font-semibold text-sky-800" to="/">首页</NuxtLink>
            选择频道。
          </p>
        </div>
      </aside>
    </section>
  </div>
</template>
