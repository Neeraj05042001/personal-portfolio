export const runtime = "nodejs";

import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const existing = cookieStore.get("visitor_id");

  if (existing) {
    return NextResponse.json({
      count: Number(existing.value),
      returning: true,
    });
  }

  const count = await kv.incr("visitor_count");

  const response = NextResponse.json({
    count,
    returning: false,
  });

  response.cookies.set("visitor_id", count.toString(), {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}
