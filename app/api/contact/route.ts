import { NextResponse } from 'next/server';

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
};

// Very small in-memory rate limiter for development. NOT for production.
const RATE_LIMIT_WINDOW = 1000 * 60; // 60s
const RATE_LIMIT_MAX = 5; // max requests per window per ip
const ipMap = new Map<string, number[]>();

function getIp(req: Request) {
  // In Node runtime this isn't available; Next.js may set headers
  // We'll try to read x-forwarded-for or fallback to 'unknown'
  const forwarded = (req.headers.get('x-forwarded-for') || '').split(',').map(s => s.trim()).filter(Boolean)[0];
  return forwarded || req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;
    const { name = '', email = '', message = '', honeypot = '' } = body || {};

    // Spam/honeypot
    if (honeypot) return NextResponse.json({ ok: false, error: 'spam' }, { status: 400 });

    // Basic validation
    if (!email || !message) return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });

    // Rate limiting (dev simple implementation)
    const ip = getIp(req);
    const now = Date.now();
    const hits = ipMap.get(ip) || [];
    const recent = hits.filter(t => t > now - RATE_LIMIT_WINDOW);
    if (recent.length >= RATE_LIMIT_MAX) {
      return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
    }
    recent.push(now);
    ipMap.set(ip, recent);

    // Prepare to send via SendGrid (preferred) or fallback to error
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@yourdomain.com';
    const TO_EMAIL = process.env.CONTACT_RECEIVER || 'katefranceskennedy@gmail.com';

    if (!SENDGRID_API_KEY) {
      console.error('Missing SENDGRID_API_KEY env var');
      return NextResponse.json({ ok: false, error: 'server_config' }, { status: 500 });
    }

    const subject = `Contact form: ${name || 'Visitor'}`;
    const plain = `From: ${name} <${email}>\n\n${message}`;

    const payload = {
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: FROM_EMAIL, name: 'Website' },
      subject,
      content: [{ type: 'text/plain', value: plain }],
    };

    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error('SendGrid error', r.status, text);
      return NextResponse.json({ ok: false, error: 'email_failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact route error', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
