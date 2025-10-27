import { client } from './sanity'
import { BlogPost, BlogPostListItem } from '@/types/blog'
import { calculateReadTime } from './readTime'

/**
 * Fetch all blog posts for the insights page
 */
export async function getAllBlogPosts(): Promise<BlogPostListItem[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(`
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        body,
        publishedAt,
        featured,
        "category": category->title,
        "categorySlug": category->slug.current,
        "author": author->name,
        "image": mainImage.asset->url
      }
    `)

    console.log('Fetched posts from Sanity:', posts.length)

    // Add calculated read time to each post
    return posts.map(post => ({
      ...post,
      readTime: calculateReadTime(post.body)
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Fetch a single blog post by category and slug
 */
export async function getBlogPost(category: string, slug: string): Promise<BlogPost | null> {
  const post = await client.fetch<BlogPost | null>(`
    *[_type == "blogPost" && category->slug.current == $category && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      featured,
      "category": category->title,
      "categorySlug": category->slug.current,
      "author": author->name,
      "image": mainImage.asset->url
    }
  `, { category, slug })

  if (!post) return null

  // Add calculated read time
  return {
    ...post,
    readTime: calculateReadTime(post.body)
  }
}

/**
 * Fetch blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPostListItem[]> {
  const posts = await client.fetch<BlogPost[]>(`
    *[_type == "blogPost" && category->slug.current == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      featured,
      "category": category->title,
      "categorySlug": category->slug.current,
      "author": author->name,
      "image": mainImage.asset->url
    }
  `, { category })

  return posts.map(post => ({
    ...post,
    readTime: calculateReadTime(post.body)
  }))
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const categories = await client.fetch<Array<{ title: string }>>(`
    *[_type == "category"] {
      title
    }
  `)

  return categories.map(cat => cat.title)
}
