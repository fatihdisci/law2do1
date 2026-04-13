import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, source } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Geçersiz e-posta' }, { status: 400 });
    }

    // Lead bilgisini logla — ileride Resend, Brevo veya veritabanına bağlanacak
    console.log('[LEAD]', {
      name,
      email,
      source: source || 'prompt-rehberi',
      timestamp: new Date().toISOString(),
    });

    // TODO: E-posta otomasyonu eklemek için buraya Resend/Brevo entegrasyonu gelecek
    // Örnek Resend entegrasyonu:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Law2Do <noreply@law2do.com>',
    //   to: email,
    //   subject: 'AI Prompt Kütüphanesi Rehberiniz',
    //   html: `<p>Merhaba ${name},</p><p>Rehberinizi indirmek için: ...</p>`,
    //   attachments: [{ path: 'public/prompt-rehberi.pdf' }],
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
