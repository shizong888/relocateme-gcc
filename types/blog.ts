import { PortableTextBlock } from '@portabletext/types'

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  body: PortableTextBlock[]
  publishedAt: string
  featured: boolean
  category: string
  categorySlug: string
  author: string
  image: string
  readTime?: string // Calculated on frontend
}

export interface BlogPostListItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  featured: boolean
  category: string
  categorySlug: string
  author: string
  image: string
  readTime: string
}
