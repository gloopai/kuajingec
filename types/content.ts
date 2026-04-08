export interface CategoryEntity {
  canonicalKey: string
  slug: string
  updatedAt: string
  title: string
  description: string
  intro: string
  gscBlocks: { heading: string; body: string }[]
}

export interface ArticleSection {
  heading: string
  paragraphs: string[]
}

export interface Article {
  slug: string
  title: string
  description: string
  categorySlug: string
  publishedAt: string
  updatedAt: string
  readMinutes: number
  tags: string[]
  heroExcerpt: string
  sections: ArticleSection[]
  outboundLinks?: { label: string; url: string }[]
}

export interface ArticleSeoExtra {
  suitableFor: string[]
  notIdealFor: string[]
  compareHint: string
  checklistItems: string[]
  gscParagraphs: { heading: string; body: string }[]
}
