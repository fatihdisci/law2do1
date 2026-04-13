import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

async function getLeads(): Promise<Array<{ name: string; email: string; source: string; timestamp: string }>> {
  try {
    const data = await fs.readFile(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveLeads(leads: Array<{ name: string; email: string; source: string; timestamp: string }>) {
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

// POST — Yeni lead kaydet
export async function POST(req: NextRequest) {
  try {
    const { name, email, source } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Geçersiz e-posta' }, { status: 400 });
    }

    const lead = {
      name: name || '',
      email,
      source: source || 'prompt-rehberi',
      timestamp: new Date().toISOString(),
    };

    const leads = await getLeads();
    leads.push(lead);
    await saveLeads(leads);

    console.log('[LEAD]', lead);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}

// GET — Tüm lead'leri listele (admin için)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get('key');

  // Basit API key koruması
  if (key !== 'law2do-admin-2026') {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  const leads = await getLeads();

  return NextResponse.json({
    total: leads.length,
    leads: leads.reverse(), // En yeniler üstte
  });
}
