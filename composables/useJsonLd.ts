export function useJsonLd(data: object | object[]) {
  const list = Array.isArray(data) ? data : [data]
  useHead({
    script: [
      {
        key: 'site-jsonld',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(list),
      },
    ],
  })
}
