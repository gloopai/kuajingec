import { CHUHAI_WEEKLY_ORIGIN } from '~/shared/site-public'

export function useSiteOrigin(): ComputedRef<string> {
  const config = useRuntimeConfig()
  return computed(() => {
    try {
      return new URL(config.public.siteUrl as string).origin
    } catch {
      return CHUHAI_WEEKLY_ORIGIN
    }
  })
}

export function useCanonicalUrl(path?: string): ComputedRef<string> {
  const route = useRoute()
  const origin = useSiteOrigin()
  return computed(() => {
    const p = path ?? route.path
    const norm = p.startsWith('/') ? p : `/${p}`
    return `${origin.value}${norm}`
  })
}
