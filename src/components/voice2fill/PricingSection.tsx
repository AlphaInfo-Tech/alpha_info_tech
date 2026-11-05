import Link from "next/link";
import { BadgeCheck, Check, Files, Info, Mic, Monitor, type LucideIcon } from "lucide-react";
import Container from "@/components/Container";
import { Button } from "@/components/Button";
import RazorpayButton from "@/components/RazorpayButton";
import { voice2Fill } from "@/lib/content";
import { getPlanLimits, type AllPlanLimits, type PlanKey, type PlanLimits } from "@/lib/planLimits";

const { pricing } = voice2Fill;
type LimitKey = keyof PlanLimits;
const limitRows = pricing.limitRows as { key: LimitKey; label: string; sub: string }[];

const limitIcons: Record<LimitKey, LucideIcon> = {
  minutes: Mic,
  voiceQr: Mic,
  nonVoiceQr: BadgeCheck,
  documents: Files,
  computers: Monitor,
};

const num = (n: number) => n.toLocaleString("en-IN");

function limitText(key: LimitKey, n: number) {
  switch (key) {
    case "minutes":
      return "voice minutes";
    case "voiceQr":
      return "Voice Form Fill QR";
    case "nonVoiceQr":
      return "Non Voice Form Fill QR";
    case "documents":
      return "documents";
    case "computers":
      return n === 1 ? "computer signed in at once" : "computers signed in at once";
  }
}

function Tick({ size = 18 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-v2f-ok"
      style={{ width: size, height: size }}
    >
      <Check size={size * 0.65} strokeWidth={3} className="text-v2f-ok-ink" />
    </span>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="-mb-1 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
      {children}
    </p>
  );
}

function PlanCard({
  card,
  limits,
}: {
  card: (typeof pricing.cards)[number];
  limits: PlanLimits;
}) {
  const plan = voice2Fill.plans.find((p) => p.key === card.key)!;
  const pro = Boolean(card.tag);

  return (
    <div
      className={`relative flex flex-col gap-4 rounded-xl bg-white px-5 pb-5 pt-6 ${
        pro
          ? "border-2 border-v2f-blue shadow-[0_8px_24px_rgba(30,78,156,0.12)]"
          : "border border-black/10"
      }`}
    >
      {card.tag && (
        <span className="absolute -top-3 left-5 rounded-md bg-v2f-blue px-2.5 py-1 text-xs font-semibold text-white">
          {card.tag}
        </span>
      )}
      <div>
        <h3 className="font-heading text-lg font-bold text-ink">{plan.name}</h3>
        <p className="mt-0.5 text-sm text-ink-muted">{card.for}</p>
      </div>
      <div>
        <p className="flex items-baseline gap-1.5">
          <strong className="font-heading text-4xl font-bold tracking-tight text-ink">
            {plan.price}
          </strong>
          <span className="text-sm text-ink-muted">/ month</span>
        </p>
        <p className="mt-1.5 text-sm text-ink-muted">
          About ₹{card.perDay} a day · {plan.duration}
        </p>
      </div>
      <RazorpayButton
        buttonId={plan.razorpayButtonId}
        planName={plan.name}
        label={`Get ${plan.name}`}
        variant={pro ? "blue" : "outline"}
      />

      <GroupLabel>Each month</GroupLabel>
      <ul className="space-y-2.5 text-sm leading-snug">
        {limitRows.map((row) => {
          const Icon = limitIcons[row.key];
          const n = limits[row.key];
          return (
            <li key={row.key} className="flex items-start gap-2.5">
              <Icon size={16} className="mt-0.5 shrink-0 text-v2f-blue" />
              <span className="text-ink">
                <b className="font-semibold tabular-nums">{num(n)}</b> {limitText(row.key, n)}
                {row.sub && <small className="block text-xs text-ink-muted">{row.sub}</small>}
              </span>
            </li>
          );
        })}
      </ul>

      <GroupLabel>Every feature</GroupLabel>
      <ul className="space-y-2.5 text-sm leading-snug">
        {pricing.features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-2.5">
            <span className="mt-0.5">
              <Tick />
            </span>
            <span className="text-ink">
              {feature.title}
              <small className="block text-xs text-ink-muted">{feature.sub}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const compareColumns = [
  { key: "trial", name: "Trial", price: "Free · 7 days" },
  ...pricing.cards.map((card) => {
    const plan = voice2Fill.plans.find((p) => p.key === card.key)!;
    return { key: card.key, name: plan.name, price: plan.price };
  }),
] as { key: PlanKey; name: string; price: string }[];

function CompareTable({ limits }: { limits: AllPlanLimits }) {
  const proCell = (key: string) => (key === "pro" ? "bg-[#F3F7FE]" : "");
  return (
    <div className="overflow-x-auto rounded-xl border border-black/10 bg-white">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr>
            <th scope="col" className="p-3 text-left">
              <span className="sr-only">Plan</span>
            </th>
            {compareColumns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`p-3 text-center align-bottom font-semibold text-ink ${proCell(col.key)}`}
              >
                {col.name}
                <small className="block text-xs font-normal text-ink-muted">{col.price}</small>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={compareColumns.length + 1}
              className="border-t border-black/10 bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-muted"
            >
              Each month (Trial: 7 days)
            </td>
          </tr>
          {limitRows.map((row) => (
            <tr key={row.key} className="border-t border-black/10">
              <th scope="row" className="p-3 text-left font-semibold text-ink">
                {row.label}
                {row.sub && <small className="block text-xs font-normal text-ink-muted">{row.sub}</small>}
              </th>
              {compareColumns.map((col) => (
                <td
                  key={col.key}
                  className={`p-3 text-center font-semibold tabular-nums text-ink ${proCell(col.key)}`}
                >
                  {num(limits[col.key][row.key])}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td
              colSpan={compareColumns.length + 1}
              className="border-t border-black/10 bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-muted"
            >
              Features
            </td>
          </tr>
          {pricing.features.map((feature) => (
            <tr key={feature.title} className="border-t border-black/10">
              <th scope="row" className="p-3 text-left font-normal text-ink">
                {feature.title}
                <small className="block text-xs text-ink-muted">{feature.sub}</small>
              </th>
              {compareColumns.map((col) => (
                <td key={col.key} className={`p-3 text-center ${proCell(col.key)}`}>
                  <span className="inline-flex">
                    <Tick size={20} />
                    <span className="sr-only">Included</span>
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PricingSection() {
  const limits = await getPlanLimits();
  return (
    <section id="plans" className="scroll-mt-24 bg-v2f-page py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-label text-xs text-brand-600">Plans</span>
          <h2 lang="ta" className="mt-3 text-3xl font-bold leading-snug text-ink sm:text-4xl">
            {pricing.titleTamil}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-muted">{pricing.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-xl border border-[#CFA63C] bg-[#FBF3DC] px-5 py-3 text-center text-sm text-ink">
          <span>
            <b className="font-semibold">Free 7-day trial</b> · {num(limits.trial.minutes)} voice
            minutes · {pricing.trial}
          </span>
          <Link
            href="/request-access"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Start free trial
          </Link>
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {pricing.cards.map((card) => (
            <PlanCard key={card.key} card={card} limits={limits[card.key as PlanKey]} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <h3 className="font-heading text-lg font-bold text-ink">Good to know</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {pricing.notes.map((note) => (
              <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                <Info size={16} className="mt-0.5 shrink-0 text-v2f-blue" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="font-heading mb-4 text-lg font-bold text-ink">Compare plans</h3>
          <CompareTable limits={limits} />
        </div>

        <p className="mt-10 text-center text-sm text-ink-muted">
          Pay by UPI, card, netbanking or wallet through Razorpay, and enter
          your <strong className="text-ink">Voice2Fill mobile number</strong>{" "}
          at checkout. Plans don&apos;t renew automatically.{" "}
          <Link href="/voice2fill/terms" className="font-semibold text-v2f-blue hover:underline">
            Plans, payments &amp; refunds →
          </Link>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/request-access">Start the Free Trial</Button>
          <Button href="/voice2fill/plans" variant="secondary">
            Renew or Top Up
          </Button>
        </div>
      </Container>
    </section>
  );
}
