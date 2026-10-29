import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { voice2Fill } from "@/lib/content";
import { isMobile, normPhone } from "@/lib/phone";

// Receives Razorpay webhooks for the Voice2Fill Payment Buttons and records
// each captured payment in `voice2fill_payments` for the admin to activate.
// Razorpay setup: Dashboard → Webhooks, URL /api/razorpay/webhook,
// event payment.captured, secret = RAZORPAY_WEBHOOK_SECRET.

type PaymentEntity = {
  id: string;
  amount: number;
  currency: string;
  method?: string;
  order_id?: string | null;
  contact?: string | null;
  email?: string | null;
  notes?: Record<string, unknown> | unknown[];
};

function validSignature(body: string, signature: string, secret: string) {
  const expected = createHmac("sha256", secret).update(body).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}

// The button's "Voice2Fill mobile number" field arrives in notes; the key is
// derived from the field label, so look for it loosely, then fall back to
// any mobile number in notes, then to the phone given at checkout.
function findVoice2FillPhone(payment: PaymentEntity) {
  const notes = payment.notes && !Array.isArray(payment.notes) ? payment.notes : {};
  const entries = Object.entries(notes).map(([k, v]) => [k.toLowerCase(), normPhone(String(v))] as const);
  const labelled = entries.find(([k, v]) => /voice2fill|mobile/.test(k) && isMobile(v));
  if (labelled) return labelled[1];
  const anyMobile = entries.find(([, v]) => isMobile(v));
  if (anyMobile) return anyMobile[1];
  const contact = normPhone(payment.contact ?? "");
  return isMobile(contact) ? contact : null;
}

export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret || !supabaseUrl || !serviceKey) {
    console.error("RAZORPAY_WEBHOOK_SECRET, SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not configured.");
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  // The signature covers the exact bytes Razorpay sent, so read the raw body.
  const body = await request.text();
  const signature = request.headers.get("x-razorpay-signature") ?? "";
  if (!validSignature(body, signature, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  let event: { event?: string; payload?: { payment?: { entity?: PaymentEntity } } };
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const payment = event.payload?.payment?.entity;
  if (event.event !== "payment.captured" || !payment) {
    return NextResponse.json({ ok: true, ignored: event.event ?? null });
  }

  const plan = voice2Fill.plans.find((p) => p.amountPaise > 0 && p.amountPaise === payment.amount);
  const row = {
    event_id: request.headers.get("x-razorpay-event-id") ?? `payment:${payment.id}`,
    payment_id: payment.id,
    order_id: payment.order_id ?? null,
    amount_paise: payment.amount,
    currency: payment.currency,
    method: payment.method ?? null,
    plan_key: payment.currency === "INR" ? plan?.key ?? null : null,
    voice2fill_phone: findVoice2FillPhone(payment),
    contact: payment.contact ?? null,
    email: payment.email ?? null,
    notes: payment.notes ?? {},
  };

  try {
    const res = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/voice2fill_payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    // 409: this event or payment is already recorded (Razorpay resends events).
    if (res.status === 409) {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    if (!res.ok) {
      throw new Error(`Supabase responded with ${res.status}: ${await res.text()}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    // A non-2xx reply makes Razorpay retry the webhook later.
    console.error("Failed to record Razorpay payment:", error);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
