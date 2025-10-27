import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'skvbt2vt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

async function test() {
  try {
    console.log('Testing Sanity connection...')
    
    const posts = await client.fetch(`
      *[_type == "blogPost" && defined(mainImage)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        featured,
        "category": category->title,
        "categorySlug": category->slug.current,
        "author": author->name,
        "image": mainImage.asset->url
      }
    `)
    
    console.log('Posts found:', posts.length)
    console.log('Posts:', JSON.stringify(posts, null, 2))
  } catch (error) {
    console.error('Error:', error)
  }
}

test()
