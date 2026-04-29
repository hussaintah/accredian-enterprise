import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo purposes.
// In production: replace with a database (Postgres, MongoDB, Supabase, etc.)
const leads: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, interest } = body;

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'name, email, and company are required.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      teamSize: teamSize || null,
      interest: interest || null,
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    // Log for debugging (remove in production)
    console.log('[Lead Captured]', lead);

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully.', id: lead.id },
      { status: 201 }
    );
  } catch (err) {
    console.error('[Lead API Error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

// GET endpoint to view captured leads (protect with auth in production)
export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
