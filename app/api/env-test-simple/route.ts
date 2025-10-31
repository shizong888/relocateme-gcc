import { NextResponse } from 'next/server'

// Ultra-simple test - just dump ALL environment variables
export async function GET() {
  const allEnvKeys = Object.keys(process.env).sort()

  return NextResponse.json({
    message: 'ALL environment variables',
    totalCount: allEnvKeys.length,
    allKeys: allEnvKeys,
    // Specific checks
    hasWebhook: allEnvKeys.filter(k => k.toLowerCase().includes('webhook')),
    hasRevalidation: allEnvKeys.filter(k => k.toLowerCase().includes('revalidation')),
    hasResend: allEnvKeys.filter(k => k.toLowerCase().includes('resend')),
    // Check exact names
    exact: {
      WEBHOOK_TOKEN: 'WEBHOOK_TOKEN' in process.env,
      NEXT_PUBLIC_WEBHOOK_TOKEN: 'NEXT_PUBLIC_WEBHOOK_TOKEN' in process.env,
      REVALIDATION_TOKEN: 'REVALIDATION_TOKEN' in process.env,
      RESEND_API_KEY: 'RESEND_API_KEY' in process.env,
    }
  })
}
