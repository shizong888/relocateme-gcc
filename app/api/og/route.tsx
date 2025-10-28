import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'RelocateMe GCC';
    const imageUrl = searchParams.get('image');

    // Fetch the logo
    const logoUrl = new URL('/relocateme-logo.png', request.url).toString();

    // Fetch the background image if provided
    let backgroundImage = null;
    if (imageUrl) {
      try {
        const imageResponse = await fetch(imageUrl);
        const imageArrayBuffer = await imageResponse.arrayBuffer();
        backgroundImage = imageArrayBuffer;
      } catch (e) {
        console.error('Failed to fetch background image:', e);
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Background Image */}
          {backgroundImage && imageUrl && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
              }}
            >
              <img
                src={imageUrl}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}

          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: backgroundImage ? 'rgba(0, 0, 0, 0.5)' : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              display: 'flex',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              zIndex: 10,
            }}
          >
            {/* Logo */}
            <img
              src={logoUrl}
              alt="RelocateMe"
              width="400"
              height="85"
              style={{
                marginBottom: 40,
                filter: 'brightness(0) invert(1)',
              }}
            />

            {/* Title */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 300,
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.2,
                maxWidth: '90%',
              }}
            >
              {title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
