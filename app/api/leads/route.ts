import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClientOrNull } from "@/lib/supabase";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  if (record.count >= RATE_LIMIT) return true;
  record.count++;
  return false;
}

function sanitize(str: string): string {
  return str.trim().replace(/[<>]/g, "").slice(0, 200);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseClientOrNull();
    if (!supabase) {
      return NextResponse.json(
        { error: "Service unavailable. Missing server configuration." },
        { status: 503 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, company, email, agentStack, repoUrl } = body;

    if (!firstName || !lastName || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof company !== "string" ||
      typeof email !== "string"
    ) {
      return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const { error } = await supabase.from("wyatt_early_access").insert({
      first_name: sanitize(firstName),
      last_name: sanitize(lastName),
      company: sanitize(company),
      email: email.trim().toLowerCase().slice(0, 254),
      agent_stack: agentStack ? sanitize(agentStack) : null,
      repo_url: repoUrl ? sanitize(repoUrl).slice(0, 500) : null,
      ip,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json({ error: "Failed to save lead." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
