# Sanity Webhook Setup for Dynamic Sitemap

This document explains how to configure Sanity webhooks to automatically update the sitemap whenever blog content changes.

## How It Works

1. **Automatic Revalidation**: The sitemap automatically regenerates every hour (set via `revalidate = 3600` in `app/sitemap.ts`)
2. **On-Demand Revalidation**: When content changes in Sanity, a webhook triggers immediate sitemap revalidation

## Setup Instructions

### 1. Set Up Environment Variable

Add the following to your `.env.local` file and Vercel environment variables:

```bash
REVALIDATION_TOKEN=your-super-secret-token-here
```

**Important**: Generate a strong, random token. You can use this command:
```bash
openssl rand -base64 32
```

### 2. Add Environment Variable to Vercel

1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add `REVALIDATION_TOKEN` with the same value for all environments (Production, Preview, Development)
4. Redeploy if needed

### 3. Configure Webhook in Sanity Studio

1. Log in to your Sanity Studio
2. Go to **Settings → Webhooks** (or visit: https://www.sanity.io/manage/personal/project/YOUR_PROJECT_ID/api/webhooks)
3. Click **Create Webhook**
4. Fill in the following details:

   - **Name**: `RelocateMe Sitemap Revalidation`
   - **URL**: `https://www.relocatemegcc.com/api/revalidate`
   - **Dataset**: `production`
   - **HTTP Method**: `POST`
   - **HTTP Headers**:
     - Key: `x-revalidate-token`
     - Value: [Your REVALIDATION_TOKEN value]

5. **Trigger on**:
   - Select **Create**, **Update**, and **Delete**
   - Add filter for document types:
     ```groq
     _type == "blogPost" || _type == "category"
     ```

6. **Projection** (optional, to send extra data):
   ```groq
   {
     _type,
     _id,
     "slug": slug.current,
     "categorySlug": category->slug.current,
     _action
   }
   ```

7. Click **Save**

### 4. Test the Webhook

#### Option 1: Test in Sanity Studio
1. In Sanity Studio, make a small change to a blog post (e.g., update the title)
2. Publish the changes
3. Go back to **Settings → Webhooks**
4. Click on your webhook and check the **Deliveries** tab
5. You should see a successful delivery (200 status)

#### Option 2: Manual Test via URL
Visit this URL in your browser (replace with your actual token):
```
https://www.relocatemegcc.com/api/revalidate?token=your-super-secret-token-here
```

You should see:
```json
{
  "revalidated": true,
  "now": 1234567890,
  "message": "Manual revalidation successful"
}
```

### 5. Verify Sitemap Updates

1. Visit: https://www.relocatemegcc.com/sitemap.xml
2. Make a change to a blog post in Sanity
3. Wait a few seconds for the webhook to process
4. Refresh the sitemap URL
5. The `<lastmod>` date should be updated

## What Gets Revalidated

When the webhook is triggered:

- ✅ **Sitemap** (`/sitemap.xml`) - Always revalidated
- ✅ **Insights Page** (`/insights`) - Always revalidated
- ✅ **Specific Blog Post** - Revalidated if it's a blog post update
- ✅ **All Blog Content** - Tagged content revalidated if categories change

## Troubleshooting

### Webhook Returns 401 Unauthorized
- Check that the `x-revalidate-token` header is set correctly in Sanity
- Verify the token matches your `REVALIDATION_TOKEN` environment variable
- Ensure you've redeployed after adding the environment variable

### Webhook Returns 500 Error
- Check Vercel function logs for error details
- Verify the webhook payload structure matches expectations

### Sitemap Not Updating
- Check that the webhook is being triggered (view Deliveries in Sanity)
- Verify the webhook is returning 200 status
- Clear your browser cache
- Wait for the CDN cache to expire (usually a few minutes)

## Security Notes

- ✅ The endpoint is protected with a secret token
- ✅ Only requests with the correct `x-revalidate-token` header are processed
- ✅ The token should never be committed to version control
- ✅ Use a strong, random token (at least 32 characters)

## Additional Resources

- [Next.js Revalidation Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data)
- [Sanity Webhooks Documentation](https://www.sanity.io/docs/webhooks)
- [On-Demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation)
