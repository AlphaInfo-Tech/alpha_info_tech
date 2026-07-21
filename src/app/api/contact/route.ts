import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  // Honeypot field: real users never fill this in, bots often do.
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = parsed.data;
  const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("GOOGLE_SHEET_SCRIPT_URL is not configured.");
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email us directly." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to log contact submission to Google Sheet:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email us directly." },
      { status: 500 }
    );
  }
}
