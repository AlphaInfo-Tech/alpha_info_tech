import { NextResponse } from "next/server";
import { z } from "zod";

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().transform((v) => v || null);

const requestSchema = z.object({
  full_name: z.string().trim().min(2).max(100),
  // Normalised on the client to 10 digits; checked again here.
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.union([z.literal(""), z.string().trim().email().max(200)]).optional().transform((v) => v || null),
  user_type: z.enum(["service_centre", "office", "individual", "other"]),
  organisation: optionalText(150),
  district: optionalText(80),
  forms_per_day: z.enum(["", "1-10", "11-50", "51+"]).optional().transform((v) => v || null),
  message: optionalText(1000),
  ui_language: z.enum(["en", "ta"]),
  consent: z.literal(true),
  // Honeypot field: real users never fill this in, bots often do.
  website: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const { website, ...row } = parsed.data;
  if (website) {
    // Pretend it worked so bots don't retry.
    return NextResponse.json({ ok: true });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("SUPABASE_URL or SUPABASE_ANON_KEY is not configured.");
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  try {
    const res = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/access_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    if (res.status === 409) {
      return NextResponse.json({ error: "duplicate" }, { status: 409 });
    }
    if (!res.ok) {
      throw new Error(`Supabase responded with ${res.status}: ${await res.text()}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save access request to Supabase:", error);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
