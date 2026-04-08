import categoryEntities from '../../data/category-entities.json'
import { articles } from '../../data/articles'
import { getArticleSeoExtra } from '../../data/article-seo-extras'
import type { Article, CategoryEntity } from '../../types/content'

export function getCategoryEntities(): CategoryEntity[] {
  return categoryEntities as CategoryEntity[]
}

export function getArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug)
}

export function getRelatedArticles(
  article: Article,
  limit = 6,
): Article[] {
  const same = articles.filter(
    (a) => a.categorySlug === article.categorySlug && a.slug !== article.slug,
  )
  const rest = articles.filter(
    (a) => a.categorySlug !== article.categorySlug && a.slug !== article.slug,
  )
  return [...same, ...rest].slice(0, limit)
}

export function searchArticles(q: string): Article[] {
  const s = q.trim().toLowerCase()
  if (!s) return []
  return articles.filter((a) => {
    const hay = `${a.title} ${a.description} ${a.tags.join(' ')} ${a.heroExcerpt}`.toLowerCase()
    return hay.includes(s)
  })
}

export function getCategoryBySlug(slug: string): CategoryEntity | undefined {
  return getCategoryEntities().find((c) => c.slug === slug)
}

export function getArticlePayload(slug: string) {
  const article = getArticleBySlug(slug)
  if (!article) return null
  const category = getCategoryBySlug(article.categorySlug)
  const related = getRelatedArticles(article)
  const seoExtra = getArticleSeoExtra(slug)
  return { article, category, related, seoExtra }
}
