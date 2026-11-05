import { voice2Fill } from "@/lib/content";

// Plan limits come from the Voice2Fill database (`public.plans`, edited in
// Admin → Plans), so the website always shows what the extension enforces.
// The numbers in content.ts are used if the database can't be reached.

export type PlanLimits = (typeof voice2Fill.pricing.limits)["trial"];
export type PlanKey = keyof typeof voice2Fill.pricing.limits;
export type AllPlanLimits = Record<PlanKey, PlanLimits>;

type PlanRow = {
  name: string | null;
  minutes: number | null;
  voice_qrs: number | null;
  nonvoice_qrs: number | null;
  documents: number | null;
  computers: number | null;
};

// How often to read the plans again, in seconds.
const REVALIDATE = 300;

const fallback = voice2Fill.pricing.limits;
const planKeys = Object.keys(fallback) as PlanKey[];

const count = (value: number | null, fallbackValue: number) =>
  typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : fallbackValue;

export async function getPlanLimits(): Promise<AllPlanLimits> {
  const url = process.env.SUPABASE_URL;
  // Read on the server only. The service role key passes row-level security;
  // the anon key works only if `plans` has a public read policy.
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return fallback;

  try {
    const res = await fetch(
      `${url.replace(/\/$/, "")}/rest/v1/plans?select=name,minutes,voice_qrs,nonvoice_qrs,documents,computers`,
      {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        cache: "force-cache",
        next: { revalidate: REVALIDATE, tags: ["voice2fill-plans"] },
      },
    );
    if (!res.ok) throw new Error(`Supabase responded with ${res.status}: ${await res.text()}`);
    const rows = (await res.json()) as PlanRow[];
    if (rows.length === 0) {
      console.warn("Voice2Fill plans: no rows returned (check the key and row-level security). Using built-in limits.");
      return fallback;
    }

    const limits = { ...fallback };
    for (const planKey of planKeys) {
      const row = rows.find((r) => r.name?.trim().toLowerCase() === planKey);
      if (!row) continue;
      const base = fallback[planKey];
      limits[planKey] = {
        minutes: count(row.minutes, base.minutes),
        voiceQr: count(row.voice_qrs, base.voiceQr),
        nonVoiceQr: count(row.nonvoice_qrs, base.nonVoiceQr),
        documents: count(row.documents, base.documents),
        computers: count(row.computers, base.computers),
      };
    }
    return limits;
  } catch (error) {
    console.error("Voice2Fill plans: could not read limits, using built-in limits.", error);
    return fallback;
  }
}
