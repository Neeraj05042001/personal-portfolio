import { kv } from "@vercel/kv";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const existing = cookieStore.get("visitor_id");

  if (existing) {
    return Response.json({
      count: Number(existing.value),
      returning: true,
    });
  }

  const count = await kv.incr("visitor_count");
  cookieStore.set("visitor_id", count.toString(), {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    sameSite: "lax",
  });

  return Response.json({
    count,
    returning: false,
  });
}
