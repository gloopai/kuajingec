import { CHUHAI_WEEKLY_ORIGIN } from '../../shared/site-public'

export default defineEventHandler((event) => {
  const origin = CHUHAI_WEEKLY_ORIGIN
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ]
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return lines.join('\n')
})
