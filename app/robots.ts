import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/_business-setup-saudi/', // Hidden page
      ],
    },
    sitemap: 'https://www.relocatemegcc.com/sitemap.xml',
  }
}
