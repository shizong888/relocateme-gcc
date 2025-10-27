import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: 'skvbt2vt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you want fresh data
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
