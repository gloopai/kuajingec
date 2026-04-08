<script setup lang="ts">
defineProps<{
  items: { name: string; to?: string }[]
}>()
</script>

<template>
  <nav
    class="text-sm text-slate-500"
    aria-label="面包屑"
  >
    <ol class="flex flex-wrap items-center gap-2">
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-2">
        <span v-if="i > 0" class="text-slate-300" aria-hidden="true">/</span>
        <NuxtLink
          v-if="item.to && i < items.length - 1"
          :to="item.to"
          class="hover:text-sky-700"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="font-medium text-slate-800">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>
