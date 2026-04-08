<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const site = config.public

useSeoMeta({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} · ${site.siteName}` : (site.siteName as string),
  description: site.siteDescription as string,
  ogSiteName: site.siteName as string,
  ogType: 'website',
  ogLocale: 'zh_CN',
  ogImage: '/og-default.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

useHead({
  meta: [{ name: 'theme-color', content: '#0f172a' }],
})
</script>
