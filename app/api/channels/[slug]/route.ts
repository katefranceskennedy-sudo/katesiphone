import { NextResponse } from 'next/server';
import { channels, blocksByChannel } from '../../../../lib/seed';

interface RouteParams {
  params: { slug: string };
}

// Use a permissive context type to avoid mismatches with the generated Next types
export async function GET(_req: Request, context: any) {
  const { slug } = context?.params || {};
  const channel = channels.find(c => c.slug === slug);
  if (!channel) {
    return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  }
  const blocks = blocksByChannel[slug] || [];
  return NextResponse.json({ ok: true, channel: { ...channel, blocks } });
}
