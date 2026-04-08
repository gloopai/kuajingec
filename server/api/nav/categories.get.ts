import { getArticles, getCategoryEntities } from '../../utils/content'

export default defineEventHandler(() => {
  const entities = getCategoryEntities()
  const articles = getArticles()
  return entities.map((c) => ({
    slug: c.slug,
    label: c.title,
    description: c.description,
    count: articles.filter((a) => a.categorySlug === c.slug).length,
    updatedAt: c.updatedAt,
  }))
})
