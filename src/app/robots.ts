import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://sctbricks.com',
    sitemap: 'https://sctbricks.com/sitemap.xml',

  }
}
