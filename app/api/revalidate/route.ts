import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

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
    // Get environment variable - try multiple possible names
    const expectedToken = process.env.SECRET_TOKEN || process.env.NEXT_PUBLIC_WEBHOOK_TOKEN || process.env.WEBHOOK_TOKEN || 'your-secret-token'

    // Verify the request is coming from Sanity with the correct token
    const token = request.headers.get('x-revalidate-token')

    // Debug logging
    console.log('Webhook received:', {
      hasToken: !!token,
      tokenLength: token?.length,
      hasEnvToken: !!expectedToken,
      envTokenLength: expectedToken?.length,
      tokensMatch: token === expectedToken,
      isDefaultToken: expectedToken === 'your-secret-token'
    })

    if (token !== expectedToken) {
      console.error('Token mismatch - rejecting request')
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

// Optional: GET endpoint for manual testing and debugging
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')
  const debug = request.nextUrl.searchParams.get('debug')
  const expectedToken = process.env.SECRET_TOKEN || process.env.NEXT_PUBLIC_WEBHOOK_TOKEN || process.env.WEBHOOK_TOKEN || 'your-secret-token'

  // Debug mode - shows if env var is set (without exposing the value)
  if (debug === 'true') {
    return NextResponse.json({
      envVarSet: !!(process.env.SECRET_TOKEN || process.env.NEXT_PUBLIC_WEBHOOK_TOKEN || process.env.WEBHOOK_TOKEN),
      envVarLength: (process.env.SECRET_TOKEN || process.env.NEXT_PUBLIC_WEBHOOK_TOKEN || process.env.WEBHOOK_TOKEN)?.length || 0,
      secretTokenExists: !!process.env.SECRET_TOKEN,
      nextPublicWebhookExists: !!process.env.NEXT_PUBLIC_WEBHOOK_TOKEN,
      webhookTokenExists: !!process.env.WEBHOOK_TOKEN,
      tokenProvided: !!token,
      tokenLength: token?.length || 0,
      defaultTokenBeingUsed: expectedToken === 'your-secret-token'
    })
  }

  if (token !== expectedToken) {
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
