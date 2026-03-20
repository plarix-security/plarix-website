import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface Lead {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  timestamp: string;
}

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

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
    const body = await request.json();
    const { firstName, lastName, company, email } = body;

    if (!firstName || !lastName || !company || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newLead: Lead = {
      firstName,
      lastName,
      company,
      email,
      timestamp: new Date().toISOString(),
    };

    const leads = await getLeads();
    leads.push(newLead);
    await saveLeads(leads);

    return NextResponse.json(
      { success: true, message: "Lead saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ leads, count: leads.length }, { status: 200 });
  } catch (error) {
    console.error("Error reading leads:", error);
    return NextResponse.json(
      { error: "Failed to read leads" },
      { status: 500 }
    );
  }
}
