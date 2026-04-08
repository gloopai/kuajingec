import { getArticlesByCategory, getCategoryBySlug } from '../../../utils/content'

export default defineEventHandler((event) => {
  const slug = event.context.params?.slug
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
  const entity = getCategoryBySlug(slug)
  if (!entity) {
    throw createError({ statusCode: 404, message: 'Category not found' })
  }
  const items = getArticlesByCategory(slug).map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    publishedAt: a.publishedAt,
    readMinutes: a.readMinutes,
    tags: a.tags,
  }))
  return { entity, items }
})
