<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data, error } = await useFetch(`/api/articles/${slug}`)

if (error.value || !data.value) {
  throw createError({ statusCode: 404, message: '文章不存在' })
}

const { article, category, related, seoExtra } = data.value
const config = useRuntimeConfig()
const origin = useSiteOrigin()

const canonical = computed(() => `${origin.value}/article/${slug}`)

useSeoMeta({
  title: article.title,
  description: article.description,
  ogTitle: article.title,
  ogDescription: article.description,
  ogUrl: canonical,
  ogType: 'article',
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))

const faqItems = [
  ...seoExtra.gscParagraphs.map((p) => ({
    '@type': 'Question' as const,
    name: p.heading,
    acceptedAnswer: {
      '@type': 'Answer',
      text: p.body,
    },
  })),
]

useJsonLd([
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: config.public.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: config.public.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${origin.value}/og-default.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${origin.value}/article/${slug}`,
    },
    inLanguage: 'zh-CN',
  },
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
        name: category?.title ?? '频道',
        item: `${origin.value}/category/${article.categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${origin.value}/article/${slug}`,
      },
    ],
  },
  ...(faqItems.length
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems,
        },
      ]
    : []),
])
</script>

<template>
  <article class="bg-slate-50/40">
    <header class="border-b border-slate-200/90 bg-white shadow-sm">
      <div
        class="mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 lg:px-14 lg:py-16"
      >
        <BreadcrumbBar
          :items="[
            { name: '首页', to: '/' },
            {
              name: category?.title ?? '频道',
              to: `/category/${article.categorySlug}`,
            },
            { name: article.title },
          ]"
        />
        <p class="mt-8 text-sm text-slate-500">
          更新 {{ article.updatedAt }} · 约 {{ article.readMinutes }} 分钟阅读
        </p>
        <h1
          class="mt-4 max-w-5xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
        >
          {{ article.title }}
        </h1>
        <p
          class="mt-8 max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed"
        >
          {{ article.heroExcerpt }}
        </p>
        <div class="mt-8 flex flex-wrap gap-2">
          <span
            v-for="t in article.tags"
            :key="t"
            class="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/80 sm:text-sm"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </header>

    <div
      class="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 lg:px-14 lg:py-16"
    >
      <div
        class="rounded-2xl border border-slate-200/80 bg-white px-6 py-10 shadow-card sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        <div class="max-w-none">
          <section
            v-for="(sec, si) in article.sections"
            :key="si"
            class="mb-14 last:mb-0"
          >
            <h2
              class="border-b border-slate-100 pb-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            >
              {{ sec.heading }}
            </h2>
            <p
              v-for="(para, pi) in sec.paragraphs"
              :key="pi"
              class="mt-6 text-[17px] leading-[1.85] text-slate-700 sm:text-lg sm:leading-[1.82]"
            >
              {{ para }}
            </p>
          </section>
        </div>

        <div
          v-if="article.outboundLinks?.length"
          class="mt-14 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-8"
        >
          <h2 class="text-base font-semibold text-slate-900">参考与官网</h2>
          <ul class="mt-4 space-y-3 text-base">
            <li v-for="(l, i) in article.outboundLinks" :key="i">
              <a
                :href="l.url"
                class="text-sky-800 underline-offset-4 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {{ l.label }}
              </a>
            </li>
          </ul>
        </div>

        <section
          class="mt-14 grid gap-6 border-t border-slate-200 pt-12 lg:grid-cols-2 lg:gap-8"
        >
          <div
            class="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8"
          >
            <h2 class="text-base font-semibold text-emerald-900">更适合</h2>
            <ul
              class="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-emerald-900/90 sm:text-base"
            >
              <li v-for="(s, i) in seoExtra.suitableFor" :key="i">{{ s }}</li>
            </ul>
          </div>
          <div
            class="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 sm:p-8"
          >
            <h2 class="text-base font-semibold text-amber-900">不太适合</h2>
            <ul
              class="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-amber-900/90 sm:text-base"
            >
              <li v-for="(s, i) in seoExtra.notIdealFor" :key="i">{{ s }}</li>
            </ul>
          </div>
        </section>

        <div
          class="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
        >
          <h2 class="text-base font-semibold text-slate-900">对比提示</h2>
          <p
            class="mt-4 text-[17px] leading-[1.8] text-slate-700 sm:text-lg sm:leading-relaxed"
          >
            {{ seoExtra.compareHint }}
          </p>
        </div>

        <div
          class="mt-8 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 sm:p-8"
        >
          <h2 class="text-base font-semibold text-slate-900">自检清单</h2>
          <ul class="mt-4 space-y-3 text-[17px] text-slate-800 sm:text-lg">
            <li
              v-for="(c, i) in seoExtra.checklistItems"
              :key="i"
              class="flex gap-3"
            >
              <span class="shrink-0 text-sky-600" aria-hidden="true">✓</span>
              <span>{{ c }}</span>
            </li>
          </ul>
        </div>
      </div>

      <section class="mt-16 border-t border-slate-200/90 pt-12">
        <h2 class="font-display text-2xl font-semibold text-slate-900">
          相关推荐
        </h2>
        <p class="mt-3 max-w-3xl text-base text-slate-600">
          同主题延伸阅读，形成稳定内链与可发现路径。
        </p>
        <div
          class="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          <ArticleCard
            v-for="a in related"
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
    </div>
  </article>
</template>
