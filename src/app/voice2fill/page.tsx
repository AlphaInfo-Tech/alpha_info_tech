import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Download,
  ListTree,
  Mic,
  ShieldCheck,
  Store,
} from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import RazorpayButton from "@/components/RazorpayButton";
import SavingsCalculator from "@/components/voice2fill/SavingsCalculator";
import { voice2Fill } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice2Fill for Service Centres",
  description:
    "Stop typing every form. Start serving more customers. Applicants speak Tamil, English or Tanglish on their own phone, and the form on your computer fills in English. Free 7-day trial.",
};

const featureIcons = {
  speech: Mic,
  forms: ListTree,
  uploads: Camera,
  counter: Store,
};

const shots = {
  scan: {
    src: "/voice2fill/screenshot-scan.png",
    alt: "The extension popup on an applicant registration form showing a QR code to scan with a phone, with a 24-field count and a 10-minute expiry timer.",
    caption: "Scan the form once. The applicant scans the QR code.",
  },
  speak: {
    src: "/voice2fill/screenshot-speak.png",
    alt: "The phone listening to a Tamil and English answer while the form on the computer fills in the applicant name, father's name and mobile number.",
    caption: "The applicant speaks. The form on your computer fills.",
  },
  dropdowns: {
    src: "/voice2fill/screenshot-dropdowns.png",
    alt: "State, District and Taluk dropdowns filled in order, with the phone asking which revenue village was meant: Kanniyampatti or Kanniyampatti Pudur.",
    caption: "Dropdowns fill in order. Unclear answers come to the phone to pick.",
  },
  photo: {
    src: "/voice2fill/screenshot-photo.png",
    alt: "The phone preparing an applicant photo as a 38 KB JPG to meet the site's 50 KB limit, ready to send to the computer.",
    caption: "A photo sized to the site's 50 KB rule.",
  },
  pdf: {
    src: "/voice2fill/screenshot-pdf.png",
    alt: "Two photographed pages of an address proof combined on the phone into one 412 KB PDF within the site's 500 KB limit.",
    caption: "Paper pages turned into one PDF within the site's limit.",
  },
};

function Screenshot({
  shot,
  sizes,
}: {
  shot: (typeof shots)[keyof typeof shots];
  sizes: string;
}) {
  return (
    <figure>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={1280}
        height={800}
        sizes={sizes}
        className="h-auto w-full rounded-xl border border-black/10 shadow-xl"
      />
      <figcaption className="mt-4 text-center text-sm leading-relaxed text-ink-muted">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

export default function Voice2FillPage() {
  return (
    <>
      <section className="bg-v2f-blue pb-16 pt-20 sm:pt-28">
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
              <span className="font-label text-xs text-v2f-blue-soft">
                {voice2Fill.eyebrow}
              </span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {voice2Fill.title}
            </h1>
            <p lang="ta" className="mt-4 text-2xl font-semibold text-v2f-gold">
              {voice2Fill.taglineTamil}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-v2f-blue-soft">
              {voice2Fill.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {voice2Fill.storeUrl && (
                <Button href={voice2Fill.storeUrl}>Add to Chrome</Button>
              )}
              <Button
                href="/request-access"
                variant={voice2Fill.storeUrl ? "secondary" : "primary"}
              >
                Start the Free Trial
              </Button>
              <Button href="#savings" variant="secondary">
                Work Out Your Savings
              </Button>
            </div>
            <p className="mt-5 text-sm text-v2f-blue-soft">{voice2Fill.accountNote}</p>
          </div>
          <Image
            src="/voice2fill/posters/h1-desktop.png"
            alt="Still typing every form by hand? On one side a tired operator types an empty form. On the other, an elderly woman speaks into her phone while the operator checks a filled form."
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 1024px, 100vw"
            preload
            className="mx-auto mt-12 h-auto w-full max-w-5xl rounded-2xl border border-white/20"
          />
        </Container>
      </section>

      <section className="bg-v2f-page py-24">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="The Daily Problems"
            title="What a slow counter costs you"
            description="Every centre knows these worries. Each one has an answer."
            align="center"
          />
          <ul className="mt-12 space-y-3">
            {voice2Fill.problems.map((problem) => (
              <li key={problem.key}>
                <a
                  href={`#${problem.key}`}
                  className="grid overflow-hidden rounded-xl border border-black/10 bg-white transition-shadow hover:shadow-md sm:grid-cols-2"
                >
                  <span className="bg-v2f-warn/50 p-5">
                    <span lang="ta" className="block font-semibold leading-snug text-v2f-warn-ink">
                      {problem.worryTamil}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">{problem.worry}</span>
                  </span>
                  <span className="flex items-center justify-between gap-3 bg-v2f-ok/50 p-5">
                    <span>
                      {problem.answerTamil && (
                        <span lang="ta" className="block font-semibold leading-snug text-v2f-ok-ink">
                          {problem.answerTamil}
                        </span>
                      )}
                      <span
                        className={
                          problem.answerTamil
                            ? "mt-1 block text-sm text-ink-muted"
                            : "block font-semibold text-v2f-ok-ink"
                        }
                      >
                        {problem.answer}
                      </span>
                    </span>
                    <ArrowRight size={18} className="shrink-0 text-v2f-ok-ink" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-6xl">
          <div className="space-y-24">
            {voice2Fill.problems.map((problem, i) => (
              <article
                key={problem.key}
                id={problem.key}
                className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={problem.poster}
                    alt={`${problem.worry.replace(/\?$/, "")}. ${problem.answer}.`}
                    width={1080}
                    height={1350}
                    sizes="(min-width: 1024px) 448px, 100vw"
                    className="mx-auto h-auto w-full max-w-md rounded-2xl shadow-xl"
                  />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-ink">
                    {problem.hook}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{problem.cost}</p>
                  <ul className="mt-6 space-y-3">
                    {problem.solution.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-ink/80">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-v2f-ok-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p lang="ta" className="mt-6 rounded-lg bg-v2f-page p-4 text-sm leading-relaxed text-ink/80">
                    {problem.tamil}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="savings" className="scroll-mt-24 bg-v2f-page py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Time and Earnings"
                title="See what faster forms are worth to your centre"
                description="Time at the counter is your income. Put in your own numbers to see the hours you could free and what they could earn."
              />
              <div className="mt-8">
                <Button href="/request-access">Start the Free Trial</Button>
              </div>
            </div>
            <SavingsCalculator />
          </div>
          <Image
            src="/voice2fill/posters/b3-desktop.png"
            alt="Example only: about 10 minutes typing and resizing photos, against about 6 minutes with voice and a phone photo. 40 applications a day with 4 minutes saved frees about 2.7 hours a day."
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 896px, 100vw"
            className="mx-auto mt-16 h-auto w-full max-w-4xl rounded-2xl shadow-xl"
          />
        </Container>
      </section>

      <section className="bg-v2f-gold py-24">
        <Container className="max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-label text-xs text-ink">More Walk-Ins</span>
              <h2 lang="ta" className="mt-3 text-4xl font-bold leading-snug text-ink">
                {voice2Fill.footfall.tamil}
              </h2>
              <p className="font-heading mt-2 text-xl font-semibold text-ink">
                Here, you can just say it in Tamil
              </p>
              <p className="mt-5 leading-relaxed text-ink/80">{voice2Fill.footfall.intro}</p>
              <ul className="mt-6 space-y-3">
                {voice2Fill.footfall.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-ink">
                    <Check size={18} className="mt-1 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Image
                src={voice2Fill.footfall.signUrl}
                alt="A4 counter sign with the Voice2Fill mark, the words “Here, you can just say it in Tamil” and a red microphone."
                width={2480}
                height={3508}
                sizes="(min-width: 1024px) 340px, 80vw"
                className="mx-auto h-auto w-full max-w-[340px] rounded-lg shadow-xl"
              />
              <a
                href={voice2Fill.footfall.signUrl}
                download="voice2fill-counter-sign-a4.png"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4"
              >
                <Download size={16} />
                Download the A4 counter sign
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="Your Edge"
            title="Why customers will pick your centre over the one next door"
            align="center"
          />
          <div className="mt-12 overflow-x-auto rounded-xl border border-black/10">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="p-4 font-semibold text-ink">
                    <span className="sr-only">Comparison</span>
                  </th>
                  {voice2Fill.edge.columns.map((column, i) => (
                    <th
                      key={column}
                      scope="col"
                      className={`p-4 font-semibold ${
                        i === 2 ? "bg-v2f-blue text-white" : "text-ink-muted"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {voice2Fill.edge.rows.map((row) => (
                  <tr key={row.label} className="border-b border-black/10 last:border-b-0">
                    <th scope="row" className="p-4 font-medium text-ink">
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`p-4 ${
                          i === 2 ? "bg-v2f-blue-soft font-semibold text-ink" : "text-ink-muted"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Three steps at the counter" align="center" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {voice2Fill.steps.map((step, i) => (
              <li
                key={step.title}
                className="card-notch rounded-xl border border-black/10 bg-white p-6"
              >
                <span className="font-heading flex h-11 w-11 items-center justify-center rounded-xl bg-v2f-blue text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-heading mt-5 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Screenshot shot={shots.scan} sizes="(min-width: 1024px) 50vw, 100vw" />
            <Screenshot shot={shots.speak} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading eyebrow="Features" title="What's inside" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {voice2Fill.features.map((feature) => {
              const Icon = featureIcons[feature.key as keyof typeof featureIcons];
              return (
                <div
                  key={feature.key}
                  className="card-notch rounded-xl border border-black/10 bg-surface p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                    <Icon size={20} className="text-v2f-blue" />
                  </span>
                  <h3 className="font-heading mt-5 text-lg font-bold text-ink">{feature.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink/80">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-v2f-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <Screenshot shot={shots.dropdowns} sizes="(min-width: 1024px) 33vw, 100vw" />
            <Screenshot shot={shots.photo} sizes="(min-width: 1024px) 33vw, 100vw" />
            <Screenshot shot={shots.pdf} sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>
        </Container>
      </section>

      <section id="plans" className="scroll-mt-24 bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="About ₹22 a day on Pro. Plans start at ₹99."
            description="Pro is ₹649 for 30 days with 400 voice minutes. Only recording time counts. Scanning forms, filling them, photos and typing-only forms use no minutes."
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {voice2Fill.plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-notch flex flex-col rounded-xl border bg-white p-6 ${
                  plan.price === "Free" ? "border-v2f-blue" : "border-black/10"
                }`}
              >
                <span className="font-label text-xs text-v2f-blue">{plan.name}</span>
                <p className="font-heading mt-3 text-3xl font-bold text-ink">{plan.price}</p>
                <p className="mt-3 text-sm font-medium text-ink">
                  {plan.minutes} voice minutes
                </p>
                <p className="mt-1 text-sm text-ink-muted">{plan.duration}</p>
                <div className="mt-auto pt-6">
                  {plan.key === "trial" ? (
                    <Link
                      href="/request-access"
                      className="inline-flex w-full items-center justify-center rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-surface-dim"
                    >
                      Start the free trial
                    </Link>
                  ) : (
                    <RazorpayButton buttonId={plan.razorpayButtonId} planName={plan.name} />
                  )}
                </div>
              </div>
            ))}
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

      <section className="bg-navy py-24">
        <Container className="max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-label text-xs text-v2f-blue-soft">Privacy</span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              You check. You submit. Nothing is kept for long.
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {voice2Fill.privacy.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
              >
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-v2f-blue-soft" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-slate-400">
            Read the full{" "}
            <Link href="/voice2fill/privacy" className="text-white underline underline-offset-4 hover:text-v2f-gold">
              Voice2Fill privacy policy
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Before you start" align="center" />
          <dl className="mt-12 space-y-4">
            {voice2Fill.faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-black/10 bg-surface p-6">
                <dt className="font-heading text-base font-bold text-ink">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{faq.a}</dd>
              </div>
            ))}
          </dl>
          <nav
            aria-label="Voice2Fill"
            className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
          >
            {[
              { href: "/voice2fill/privacy", label: "Privacy policy" },
              { href: "/voice2fill/terms", label: "Terms & plans" },
              { href: "/voice2fill/support", label: "Support" },
              { href: "/request-access", label: "Request access" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-v2f-blue hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section className="bg-v2f-blue">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <Image
            src="/voice2fill/icon-128.png"
            alt="Voice2Fill icon"
            width={64}
            height={64}
            className="rounded-2xl"
          />
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Give your next rush day a shorter queue.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-v2f-blue-soft">
            Try it on the forms you fill every day with 15 free voice minutes.
            We&apos;ll contact you within 2 working days with your sign-in.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/request-access">Start the Free Trial</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
