import { NextResponse } from 'next/server';
import { channels } from '../../../lib/seed';

export async function GET() {
  // simple stub returning seeded channels
  return NextResponse.json({ ok: true, channels });
}
