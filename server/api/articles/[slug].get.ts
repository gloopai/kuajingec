import { getArticlePayload } from '../../utils/content'

export default defineEventHandler((event) => {
  const slug = event.context.params?.slug
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
  const payload = getArticlePayload(slug)
  if (!payload) {
    throw createError({ statusCode: 404, message: 'Article not found' })
  }
  return payload
})
