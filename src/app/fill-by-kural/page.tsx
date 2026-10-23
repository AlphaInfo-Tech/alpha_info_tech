import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ListTree,
  SpellCheck,
  ChevronsUpDown,
  Code2,
  Footprints,
  Frame,
  Camera,
  Layers,
  Languages,
  ShieldCheck,
  KeyRound,
  XCircle,
  Mic,
} from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { fillByKural } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fill by Kural",
  description:
    "Fill web forms by speaking on your phone in Tamil, English or Tanglish. Scan a QR code, tap the mic and your answers appear in the form on your computer.",
};

const formIcons = {
  dependent: ListTree,
  spelling: SpellCheck,
  custom: ChevronsUpDown,
  frameworks: Code2,
  multistep: Footprints,
  frames: Frame,
};

const shots = {
  scan: {
    src: "/fill-by-kural/screenshot-scan.png",
    alt: "The extension popup on an e-Sevai registration form showing a QR code to scan with your phone, with a 24-field count and a 10-minute expiry timer.",
    caption: "Scan once, then just talk. Click Scan, then scan the QR code with your phone.",
  },
  speak: {
    src: "/fill-by-kural/screenshot-speak.png",
    alt: "The phone listening to a Tamil and English answer while the form on the computer fills in the applicant name, father's name and mobile number.",
    caption: "Speak Tamil, English or Tanglish. The form fills as you speak.",
  },
  dropdowns: {
    src: "/fill-by-kural/screenshot-dropdowns.png",
    alt: "State, District and Taluk dropdowns filled in order, with the phone asking which revenue village was meant: Kanniyampatti or Kanniyampatti Pudur.",
    caption: "Dependent dropdowns, filled in order. Unclear answers come to your phone to pick.",
  },
  photo: {
    src: "/fill-by-kural/screenshot-photo.png",
    alt: "The phone preparing an applicant photo as a 38 KB JPG to meet the site's 50 KB limit, ready to send to the computer.",
    caption: "Photos sized to the site's rules. Take a photo; the phone makes it fit.",
  },
  pdf: {
    src: "/fill-by-kural/screenshot-pdf.png",
    alt: "Two photographed pages of an address proof combined on the phone into one 412 KB PDF within the site's 500 KB limit.",
    caption: "Paper documents to one PDF. Photograph each page; the phone makes one PDF within the site's limit.",
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

export default function FillByKuralPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/fill-by-kural/icon-48.png"
                alt=""
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-label text-xs text-brand-400">
                {fillByKural.eyebrow}
              </span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {fillByKural.title}
            </h1>
            <p className="font-heading mt-4 text-xl font-semibold text-accent-400">
              {fillByKural.languages}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {fillByKural.intro}
            </p>
            <p className="mt-4 text-base font-medium text-white">
              {fillByKural.tagline}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Request an Account</Button>
            </div>
            <p className="mt-6 flex items-start justify-center gap-2 text-sm text-slate-400">
              <KeyRound size={16} className="mt-0.5 shrink-0 text-brand-400" />
              {fillByKural.accountNote}
            </p>
          </div>
          <Image
            src="/fill-by-kural/promo-marquee.png"
            alt="Fill by Kural: speak in Tamil or English and the form fills itself. A phone with a microphone sends answers to highlighted fields in a browser form."
            width={1400}
            height={560}
            sizes="(min-width: 1024px) 1024px, 100vw"
            preload
            className="mx-auto mt-16 h-auto w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl"
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading eyebrow="How It Works" title="From form to filled in five steps" align="center" />
          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {fillByKural.steps.map((step, i) => (
              <li
                key={step.title}
                className="card-notch rounded-xl border border-black/10 bg-surface p-6"
              >
                <span className="font-heading flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <h3 className="font-heading mt-5 text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-16 max-w-4xl">
            <Screenshot shot={shots.scan} sizes="(min-width: 896px) 896px, 100vw" />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Speak the Way You Normally Talk"
            title="No special phrases. Just say it."
            align="center"
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-28">
              <Screenshot shot={shots.speak} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <ul className="space-y-4">
              {fillByKural.speakNaturally.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4 rounded-lg border border-black/10 bg-white p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface">
                    <Mic size={18} className="text-brand-600" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.text}</p>
                    {item.examples && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.examples.map((example) => (
                          <span
                            key={example}
                            className="rounded-md bg-surface px-3 py-1.5 font-mono text-xs text-ink/80"
                          >
                            “{example}”
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Built for Real-World Forms"
            title="Handles the forms people actually have to fill"
            align="center"
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <Screenshot shot={shots.dropdowns} sizes="(min-width: 896px) 896px, 100vw" />
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fillByKural.realWorldForms.map((feature) => {
              const Icon = formIcons[feature.key as keyof typeof formIcons];
              return (
                <div
                  key={feature.key}
                  className="card-notch rounded-xl border border-black/10 bg-surface p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                    <Icon size={20} className="text-brand-600" />
                  </span>
                  <h3 className="font-heading mt-5 text-lg font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="Photos and Documents From Your Phone"
              title="Uploads that already fit the site's rules"
              description={fillByKural.uploads.intro}
            />
            <ul className="space-y-4">
              {fillByKural.uploads.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-black/10 bg-white p-4 text-sm text-ink/80"
                >
                  <Camera size={18} className="mt-0.5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <Screenshot shot={shots.photo} sizes="(min-width: 1024px) 50vw, 100vw" />
            <Screenshot shot={shots.pdf} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Layers,
                eyebrow: "Several Forms at Once",
                title: "Up to 5 tabs, 5 phones",
                items: fillByKural.severalForms,
              },
              {
                icon: Languages,
                eyebrow: "Phone Screen in Tamil or English",
                title: "தமிழ் or English, your choice",
                items: fillByKural.phoneLanguage,
              },
            ].map((block) => (
              <div
                key={block.eyebrow}
                className="card-notch rounded-xl border border-black/10 p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface">
                  <block.icon size={24} className="text-brand-600" />
                </span>
                <span className="font-label mt-6 block text-xs text-brand-600">
                  {block.eyebrow}
                </span>
                <h3 className="font-heading mt-1 text-2xl font-bold text-ink">
                  {block.title}
                </h3>
                <ul className="mt-6 space-y-3 border-t border-black/10 pt-6">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading eyebrow="Who It's For" title="Made for people who fill forms all day" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fillByKural.audience.map((who) => (
              <div
                key={who}
                className="rounded-lg bg-white p-5 text-sm leading-relaxed text-ink/80 shadow-sm"
              >
                {who}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24">
        <Container className="max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-label text-xs text-brand-400">Privacy</span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your answers are used to fill your form, and nothing else
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {fillByKural.privacy.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
              >
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-slate-400">
            Read the full{" "}
            <Link href="/privacy-policy" className="text-white underline underline-offset-4 hover:text-accent-400">
              privacy policy
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-notch rounded-xl border border-black/10 bg-surface p-8">
              <span className="font-label text-xs text-brand-600">What You Need</span>
              <ul className="mt-6 space-y-3">
                {fillByKural.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-notch rounded-xl border border-black/10 bg-surface p-8">
              <span className="font-label text-xs text-brand-600">Not Supported Yet</span>
              <ul className="mt-6 space-y-3">
                {fillByKural.notSupported.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-ink-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <Image
            src="/fill-by-kural/icon-128.png"
            alt="Fill by Kural icon"
            width={64}
            height={64}
            className="rounded-2xl"
          />
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop typing. Start speaking.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Need an account, or help getting set up? Get in touch and
            we&apos;ll have you filling forms by voice in minutes.
          </p>
          <Button href="/contact">Get Help &amp; an Account</Button>
        </Container>
      </section>
    </>
  );
}
