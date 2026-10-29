import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import Container from "@/components/Container";
import PaymentSuccessDetails from "@/components/voice2fill/PaymentSuccessDetails";
import { company, voice2Fill } from "@/lib/content";

export const metadata: Metadata = {
  title: "Payment Received: Voice2Fill",
  description: "Your Voice2Fill payment was received. Here is what happens next.",
  robots: { index: false, follow: false },
};

const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi, I just paid for Voice2Fill. My payment ID is: "
)}`;

const nextSteps = [
  `We check your payment and switch on your plan, ${voice2Fill.payment.activationTime}. We'll confirm on WhatsApp.`,
  "Then close and reopen the Voice2Fill popup in Chrome to see your new plan, minutes and end date.",
  "If your current plan still has days left, the new plan starts when it ends. Extra minutes are added to your current plan.",
  "Razorpay has emailed you a receipt with the payment ID. Keep it in case you need help.",
];

export default function PaymentSuccessPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
              <CheckCircle2 size={32} />
            </span>
            <h1 className="font-heading mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Payment received
            </h1>
            <p lang="ta" className="mt-3 text-lg text-accent-400">
              பணம் பெறப்பட்டது. நன்றி!
            </p>
            <Suspense fallback={null}>
              <PaymentSuccessDetails />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-ink">What happens next</h2>
          <ol className="mt-8 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-sm font-bold text-brand-600">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-sm leading-relaxed text-ink-muted">{step}</p>
              </li>
            ))}
          </ol>

          <div className="card-notch mt-12 rounded-xl border border-black/10 bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-lg font-bold text-ink">Need help with this payment?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              If your plan isn&apos;t active after that time, or you typed a
              different mobile number at checkout, send us your payment ID and
              your Voice2Fill mobile number.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                <MessageCircle size={16} />
                WhatsApp {company.whatsapp}
              </a>
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent("Voice2Fill payment")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-surface-dim"
              >
                <Mail size={16} />
                {company.email}
              </a>
            </div>
          </div>

          <p className="mt-10 text-sm text-ink-muted">
            <Link href="/voice2fill/support" className="font-semibold text-brand-600 hover:text-brand-700">
              Support
            </Link>{" "}
            ·{" "}
            <Link href="/voice2fill/terms" className="font-semibold text-brand-600 hover:text-brand-700">
              Plans, payments &amp; refunds
            </Link>{" "}
            ·{" "}
            <Link href="/voice2fill/plans" className="font-semibold text-brand-600 hover:text-brand-700">
              Buy another plan
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
