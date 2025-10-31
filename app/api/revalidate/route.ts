import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret token to protect the revalidation endpoint
// Set this in your environment variables
const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN || 'your-secret-token'

/**
 * Webhook endpoint for Sanity to trigger revalidation
 *
 * Usage in Sanity Studio:
 * 1. Go to Settings → Webhooks
 * 2. Create new webhook with URL: https://www.relocatemegcc.com/api/revalidate
 * 3. Add secret token as header: x-revalidate-token: your-secret-token
 * 4. Select events: Create, Update, Delete for blogPost and category types
 * 5. Save and test the webhook
 */
export async function POST(request: NextRequest) {
  try {
    // Verify the request is coming from Sanity with the correct token
    const token = request.headers.get('x-revalidate-token')

    if (token !== REVALIDATION_TOKEN) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      )
    }

    // Parse the webhook payload
    const body = await request.json()

    // Log the webhook event for debugging
    console.log('Revalidation webhook triggered:', {
      type: body._type,
      id: body._id,
      action: body._action || 'unknown'
    })

    // Revalidate the sitemap
    revalidatePath('/sitemap.xml')

    // Revalidate the insights page
    revalidatePath('/insights')

    // If it's a specific blog post, revalidate that page too
    if (body._type === 'blogPost' && body.slug?.current && body.categorySlug) {
      const blogPath = `/insights/${body.categorySlug}/${body.slug.current}`
      revalidatePath(blogPath)
      console.log('Revalidated blog post:', blogPath)
    }

    // If categories changed, revalidate the insights page
    if (body._type === 'category') {
      revalidatePath('/insights', 'page')
      console.log('Revalidated insights page due to category change')
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Successfully revalidated'
    })
  } catch (error) {
    console.error('Error in revalidation webhook:', error)
    return NextResponse.json(
      {
        message: 'Error revalidating',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint for manual testing
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  if (token !== REVALIDATION_TOKEN) {
    return NextResponse.json(
      { message: 'Invalid token' },
      { status: 401 }
    )
  }

  try {
    revalidatePath('/sitemap.xml')
    revalidatePath('/insights')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Manual revalidation successful'
    })
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error revalidating',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
