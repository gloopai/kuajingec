import {
  getArticles,
  getCategoryEntities,
} from '../utils/content'

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl as string
  let origin: string
  try {
    origin = new URL(siteUrl).origin
  } catch {
    origin = 'http://localhost:3000'
  }

  const staticPaths = ['/', '/search']
  const categories = getCategoryEntities()
  const articles = getArticles()

  const urls: { loc: string; lastmod: string }[] = []

  for (const p of staticPaths) {
    urls.push({
      loc: `${origin}${p}`,
      lastmod: new Date().toISOString().slice(0, 10),
    })
  }

  for (const c of categories) {
    const catArticles = articles.filter((a) => a.categorySlug === c.slug)
    const maxArticle = catArticles.reduce(
      (m, a) => (a.updatedAt > m ? a.updatedAt : m),
      c.updatedAt,
    )
    const lastmod =
      maxArticle > c.updatedAt ? maxArticle : c.updatedAt
    urls.push({
      loc: `${origin}/category/${c.slug}`,
      lastmod,
    })
  }

  for (const a of articles) {
    urls.push({
      loc: `${origin}/article/${a.slug}`,
      lastmod: a.updatedAt,
    })
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${esc(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return body
})
