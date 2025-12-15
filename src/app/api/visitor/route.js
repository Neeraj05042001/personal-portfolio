import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await kv.get('visitor_count') || 0;
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const count = await kv.incr('visitor_count');
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to increment count' }, { status: 500 });
  }
}