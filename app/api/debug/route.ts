import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const p = path.join(process.cwd(), "public", "logo.png");
  const exists = fs.existsSync(p);
  let size: number | null = null;
  try {
    if (exists) size = fs.statSync(p).size;
  } catch (e) {
    // ignore
  }

  return NextResponse.json({
    ok: true,
    serverTime: new Date().toISOString(),
    logo: {
      path: "/logo.png",
      exists,
      size,
    },
  });
}
