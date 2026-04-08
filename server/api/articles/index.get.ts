import { getArticles } from '../../utils/content'

export default defineEventHandler(() => {
  return getArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    categorySlug: a.categorySlug,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt,
    readMinutes: a.readMinutes,
    tags: a.tags,
  }))
})
