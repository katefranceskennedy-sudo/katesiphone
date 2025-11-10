import { NextResponse } from 'next/server';
import { channels, blocksByChannel } from '../../../../lib/seed';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const channel = channels.find((c) => c.slug === slug);
  if (!channel) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  const blocks = blocksByChannel[slug] || [];
  return NextResponse.json({ ok: true, channel: { ...channel, blocks } });
}
