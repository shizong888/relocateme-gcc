import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, countryCode, pageName, formName } = body;

    // Get client information
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown';
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || request.url;

    // Parse user agent for browser info
    const getBrowserInfo = (ua: string) => {
      const match = ua.match(/(Chrome|Safari|Firefox|Edge)\/[\d.]+/g);
      return match ? match.join(' ') : ua;
    };

    const browserInfo = getBrowserInfo(userAgent);
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });

    // Create email HTML matching the screenshot format
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              background: #ffffff;
              border: 1px solid #e0e0e0;
              border-top: none;
              padding: 30px;
            }
            .field {
              margin-bottom: 15px;
              display: flex;
              border-bottom: 1px solid #f0f0f0;
              padding-bottom: 10px;
            }
            .field-label {
              font-weight: 600;
              min-width: 150px;
              color: #333;
            }
            .field-value {
              color: #555;
              word-break: break-word;
            }
            .field-value a {
              color: #4A90E2;
              text-decoration: none;
            }
            .section-title {
              font-weight: 600;
              margin-top: 20px;
              margin-bottom: 10px;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="header">Contact Us</div>
          <div class="content">
            <div class="field">
              <div class="field-label">Page Name:</div>
              <div class="field-value">${pageName || 'Home Page'}</div>
            </div>
            <div class="field">
              <div class="field-label">Form Name:</div>
              <div class="field-value">${formName || 'Contact Us Popup'}</div>
            </div>

            <div class="field">
              <div class="field-label">UTM Source:</div>
              <div class="field-value"></div>
            </div>
            <div class="field">
              <div class="field-label">UTM Medium:</div>
              <div class="field-value"></div>
            </div>
            <div class="field">
              <div class="field-label">UTM Campaign:</div>
              <div class="field-value"></div>
            </div>

            <div class="field">
              <div class="field-label">Full Name:</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email:</div>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Phone No:</div>
              <div class="field-value">${countryCode}${phone}</div>
            </div>
            <div class="field">
              <div class="field-label">Message:</div>
              <div class="field-value"></div>
            </div>

            <div class="field">
              <div class="field-label">Client IP:</div>
              <div class="field-value">${clientIP}</div>
            </div>
            <div class="field">
              <div class="field-label">Client Software:</div>
              <div class="field-value">${browserInfo}</div>
            </div>

            <div class="field">
              <div class="field-label">Page Link:</div>
              <div class="field-value"><a href="${referer}">${referer}</a></div>
            </div>

            <div class="field">
              <div class="field-label">Dated:</div>
              <div class="field-value">${currentDate}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'victoria@relocatemegcc.com',
      subject: `New Contact Form Submission - ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
