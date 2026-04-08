import { searchArticles } from '../utils/content'

export default defineEventHandler((event) => {
  const q = getQuery(event).q?.toString() ?? ''
  const results = searchArticles(q).map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    categorySlug: a.categorySlug,
    publishedAt: a.publishedAt,
  }))
  return { q, results }
})
