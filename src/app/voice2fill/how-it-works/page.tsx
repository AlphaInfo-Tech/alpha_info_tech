import type { Metadata } from "next";
import Image from "next/image";
import { Camera, CheckCircle2, ListTree, Mic, Store } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { voice2Fill } from "@/lib/content";

export const metadata: Metadata = {
  title: "How Voice2Fill Works",
  description:
    "Scan the form, the applicant speaks on their own phone, and the form on your computer fills in English. See the three steps and everything inside Voice2Fill.",
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

export default function Voice2FillHowItWorksPage() {
  return (
    <>
      <section className="bg-v2f-blue py-16 sm:py-20">
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
                Voice2Fill · How It Works
              </span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How Voice2Fill works
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-v2f-blue-soft">
              The applicant speaks on their own phone. The form on your computer
              fills in English. You check and submit.
            </p>
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

      <section className="bg-v2f-blue">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try it on the forms you fill every day.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/request-access">Start the Free Trial</Button>
            <Button href="/voice2fill#plans" variant="secondary">
              See Plans
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
