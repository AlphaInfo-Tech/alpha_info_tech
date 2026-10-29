import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Container from "@/components/Container";
import PlansGrid from "@/components/voice2fill/PlansGrid";
import PlansFromUrl from "@/components/voice2fill/PlansFromUrl";
import { company, voice2Fill } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice2Fill Plans: Renew, Upgrade or Top Up",
  description:
    "Renew or upgrade your Voice2Fill plan, or buy extra voice minutes. Pay by UPI, card, netbanking or wallet through Razorpay.",
};

const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

const steps = [
  { title: "Choose a plan", body: "Renew, upgrade, or top up with extra minutes." },
  {
    title: "Pay through Razorpay",
    body: "UPI, card, netbanking or wallet. Enter your Voice2Fill mobile number in checkout.",
  },
  {
    title: "We switch it on",
    body: `${voice2Fill.payment.activationTime[0].toUpperCase()}${voice2Fill.payment.activationTime.slice(1)}, and confirm on WhatsApp.`,
  },
];

export default function Voice2FillPlansPage() {
  return (
    <>
      <section className="bg-navy py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/voice2fill/icon-48.png"
                alt=""
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-label text-xs text-brand-400">Voice2Fill · Plans</span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Renew, upgrade or top up
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Only the time the microphone is recording uses minutes. Scanning,
              filling and uploads are free.
            </p>
          </div>
          <ol className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="font-heading flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h2 className="font-heading mt-4 text-base font-bold text-white">{step.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <Suspense fallback={<PlansGrid />}>
            <PlansFromUrl />
          </Suspense>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <ul className="space-y-3 text-sm leading-relaxed text-ink-muted [&_a]:font-semibold [&_a]:text-brand-600 [&_a:hover]:text-brand-700">
            <li>
              Plans don&apos;t renew automatically. We&apos;ll remind you before
              your plan ends.
            </li>
            <li>
              Unused minutes don&apos;t carry over to the next plan. Extra
              minutes last until your current plan ends.
            </li>
            <li>
              Paid by mistake or not working for you? See{" "}
              <Link href="/voice2fill/terms">refunds and cancellation</Link>.
            </li>
            <li>
              No account yet? <Link href="/request-access">Request access</Link>{" "}
              and start with a free 7-day trial.
            </li>
            <li>
              Questions before paying? WhatsApp{" "}
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                {company.whatsapp}
              </a>{" "}
              or email <a href={`mailto:${company.email}`}>{company.email}</a>.
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
