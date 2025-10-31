import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

type BlogPostSitemap = {
  slug: { current: string }
  categorySlug: string
  publishedAt: string
  _updatedAt: string
}

const BASE_URL = 'https://www.relocatemegcc.com'

// Use ISR - regenerate sitemap every 60 seconds (or on-demand via webhook)
export const revalidate = 60

// Static pages with their update frequency and priority
const staticPages = [
  { url: '', changeFrequency: 'monthly' as const, priority: 1.0 },
  { url: '/about-us', changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/corporate-services', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/immigration', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/relocation', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/business-setup-uae', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/uae-golden-visa', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/saudi-arabia-visa-iqama', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/insights', changeFrequency: 'weekly' as const, priority: 0.8 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all blog posts from Sanity
  let blogPosts: BlogPostSitemap[] = []

  try {
    blogPosts = await client.fetch<BlogPostSitemap[]>(`
      *[_type == "blogPost"] {
        slug,
        "categorySlug": category->slug.current,
        publishedAt,
        _updatedAt
      }
    `)
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Generate static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ url, changeFrequency, priority }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  // Generate blog post pages
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/insights/${post.categorySlug}/${post.slug.current}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
