import {PortableTextBlock} from '@portabletext/types'

/**
 * Calculate estimated read time based on word count
 * Average reading speed: 200-250 words per minute
 * We use 200 wpm for a conservative estimate
 */
export function calculateReadTime(body: PortableTextBlock[]): string {
  if (!body || body.length === 0) {
    return '1 min read'
  }

  // Extract text from Portable Text blocks
  const text = body
    .map((block) => {
      if (block._type === 'block' && block.children) {
        return block.children
          .map((child: any) => child.text || '')
          .join(' ')
      }
      return ''
    })
    .join(' ')

  // Count words
  const wordCount = text.trim().split(/\s+/).length

  // Calculate minutes (using 200 words per minute)
  const minutes = Math.ceil(wordCount / 200)

  return `${minutes} min read`
}

/**
 * Alternative: Calculate read time from HTML content
 */
export function calculateReadTimeFromHTML(html: string): string {
  if (!html) {
    return '1 min read'
  }

  // Strip HTML tags and count words
  const text = html.replace(/<[^>]*>/g, ' ')
  const wordCount = text.trim().split(/\s+/).length

  // Calculate minutes (using 200 words per minute)
  const minutes = Math.ceil(wordCount / 200)

  return `${minutes} min read`
}
