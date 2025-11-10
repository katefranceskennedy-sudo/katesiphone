import { NextResponse } from 'next/server';
import { channels, blocksByChannel } from '../../../../lib/seed';

// Use a flexible context type to satisfy Next.js Route Handler typing across versions
export async function GET(req: Request, context: any) {
  const slug = context?.params?.slug as string;
  const channel = channels.find((c) => c.slug === slug);
  if (!channel) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  const blocks = blocksByChannel[slug] || [];
  return NextResponse.json({ ok: true, channel: { ...channel, blocks } });
}
