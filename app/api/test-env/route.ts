import { NextRequest, NextResponse } from 'next/server'

// TEMPORARY endpoint to debug environment variables
// DELETE this file after debugging
export async function GET(request: NextRequest) {
  const envKeys = Object.keys(process.env).filter(key =>
    key.includes('WEBHOOK') ||
    key.includes('REVALIDATION') ||
    key.includes('RESEND') ||
    key.startsWith('NEXT_')
  )

  return NextResponse.json({
    message: 'Environment variable debug info',
    availableKeys: envKeys,
    webhookTokenExists: 'WEBHOOK_TOKEN' in process.env,
    webhookTokenValue: process.env.WEBHOOK_TOKEN ? '[REDACTED - EXISTS]' : 'NOT SET',
    webhookTokenLength: process.env.WEBHOOK_TOKEN?.length || 0,
    revalidationTokenExists: 'REVALIDATION_TOKEN' in process.env,
    revalidationTokenLength: process.env.REVALIDATION_TOKEN?.length || 0,
    resendKeyExists: 'RESEND_API_KEY' in process.env,
    resendKeyLength: process.env.RESEND_API_KEY?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  })
}
