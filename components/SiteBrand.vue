<script setup lang="ts">
import logoMarkSrc from '~/assets/brand/logo-mark.svg?url'

withDefaults(
  defineProps<{
    variant?: 'on-dark' | 'on-light'
    showTagline?: boolean
    size?: 'default' | 'compact'
  }>(),
  {
    variant: 'on-dark',
    showTagline: true,
    size: 'default',
  },
)
</script>

<template>
  <NuxtLink
    to="/"
    class="group flex items-center gap-2.5 sm:gap-3"
    :aria-label="showTagline ? '出海周刊 Chuhai Weekly 首页' : '出海周刊 首页'"
  >
    <img
      :src="logoMarkSrc"
      alt=""
      width="40"
      height="40"
      :class="[
        'shrink-0 transition duration-200 group-hover:brightness-110',
        size === 'compact' ? 'h-8 w-8' : 'h-9 w-9 sm:h-10 sm:w-10',
      ]"
      fetchpriority="high"
      decoding="async"
    />
    <span class="flex min-w-0 flex-col leading-tight">
      <span
        class="font-display font-semibold tracking-tight"
        :class="[
          size === 'compact' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl',
          variant === 'on-dark' ? 'text-white' : 'text-slate-900',
        ]"
      >
        出海周刊
      </span>
      <span
        v-if="showTagline"
        class="font-medium uppercase tracking-[0.2em] text-sky-500"
        :class="[
          size === 'compact' ? 'text-[9px] sm:text-[10px]' : 'text-[10px] sm:text-[11px]',
          variant === 'on-dark' ? 'text-sky-400/95' : 'text-sky-600',
        ]"
      >
        Chuhai Weekly
      </span>
    </span>
  </NuxtLink>
</template>
