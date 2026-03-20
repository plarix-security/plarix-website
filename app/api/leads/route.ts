import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface Lead {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  timestamp: string;
  ip: string;
}

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

// Sanitize string input - remove potential XSS vectors
function sanitize(str: string): string {
  return str
    .trim()
    .replace(/[<>]/g, "") // Remove angle brackets
    .slice(0, 200); // Limit length
}

// Basic email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function getLeads(): Promise<Lead[]> {
  try {
    const content = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function saveLeads(leads: Lead[]) {
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting and logging
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, company, email } = body;

    // Validate required fields exist
    if (!firstName || !lastName || !company || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate types
    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof company !== "string" ||
      typeof email !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid field types" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const newLead: Lead = {
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      company: sanitize(company),
      email: email.trim().toLowerCase().slice(0, 254),
      timestamp: new Date().toISOString(),
      ip: ip,
    };

    const leads = await getLeads();
    leads.push(newLead);
    await saveLeads(leads);

    return NextResponse.json(
      { success: true, message: "Thank you for your interest!" },
      { status: 200 }
    );
  } catch {
    // Don't expose error details to client
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// No GET endpoint - leads data is private
