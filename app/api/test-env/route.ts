import { NextRequest, NextResponse } from 'next/server'

// TEMPORARY endpoint to debug environment variables
// DELETE this file after debugging
export async function GET(request: NextRequest) {
  const envKeys = Object.keys(process.env).filter(key =>
    key.includes('REVALIDATION') ||
    key.includes('RESEND') ||
    key.startsWith('NEXT_')
  )

  return NextResponse.json({
    message: 'Environment variable debug info',
    availableKeys: envKeys,
    revalidationTokenExists: 'REVALIDATION_TOKEN' in process.env,
    revalidationTokenValue: process.env.REVALIDATION_TOKEN ? '[REDACTED - EXISTS]' : 'NOT SET',
    revalidationTokenLength: process.env.REVALIDATION_TOKEN?.length || 0,
    resendKeyExists: 'RESEND_API_KEY' in process.env,
    resendKeyLength: process.env.RESEND_API_KEY?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  })
}
