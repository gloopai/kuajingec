<script setup lang="ts">
const q = ref('')
const route = useRoute()

const { data: categories } = await useFetch<
  {
    slug: string
    label: string
    count: number
  }[]
>('/api/nav/categories', { key: 'nav-categories' })

function submitSearch() {
  const query = q.value.trim()
  if (!query) return
  navigateTo({ path: '/search', query: { q: query } })
}

watch(
  () => route.query.q,
  (v) => {
    if (typeof v === 'string') q.value = v
  },
  { immediate: true },
)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md"
  >
    <div
      class="mx-auto flex w-full max-w-[88rem] flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-14"
    >
      <div class="flex items-center gap-10">
        <SiteBrand variant="on-dark" />
        <nav
          class="hidden items-center gap-1 text-sm font-medium text-slate-300 xl:flex"
          aria-label="主导航"
        >
          <NuxtLink
            v-for="c in categories?.slice(0, 6)"
            :key="c.slug"
            :to="`/category/${c.slug}`"
            class="rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white"
          >
            {{ c.label }}
          </NuxtLink>
        </nav>
      </div>
      <form
        class="flex w-full max-w-md items-center gap-2 sm:w-auto"
        role="search"
        @submit.prevent="submitSearch"
      >
        <label class="sr-only" for="site-search">站内搜索</label>
        <input
          id="site-search"
          v-model="q"
          type="search"
          name="q"
          placeholder="搜索文章、话题、平台…"
          class="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-sky-500/40 focus:border-sky-500/60 focus:ring-2"
          autocomplete="off"
        />
        <button
          type="submit"
          class="shrink-0 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
        >
          搜索
        </button>
      </form>
    </div>
    <div
      class="border-t border-slate-800/60 bg-slate-950/95 px-4 py-2 lg:hidden"
    >
      <div class="mx-auto flex w-full max-w-[88rem] gap-2 overflow-x-auto px-5 pb-1 lg:px-14">
        <NuxtLink
          v-for="c in categories"
          :key="`m-${c.slug}`"
          :to="`/category/${c.slug}`"
          class="whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/80 hover:text-white"
        >
          {{ c.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
