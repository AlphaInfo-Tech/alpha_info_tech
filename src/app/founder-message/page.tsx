import type { Metadata } from "next";
import { IconLayers } from "@/components/icons";
import Container from "@/components/Container";
import { Button } from "@/components/Button";
import { founderStory, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Founder Message",
  description:
    "Why Alpha Info Tech started — built to fix our own operational problems first, long before it was software for anyone else.",
};

export default function FounderMessagePage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-label text-xs text-brand-400">
              {founderStory.eyebrow}
            </span>
            <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {founderStory.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {founderStory.intro}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <div className="divide-y divide-black/10 border-y border-black/10">
            {founderStory.chapters.map((chapter, i) => (
              <div
                key={chapter.label}
                className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr] sm:gap-8"
              >
                <span className="font-label text-2xl text-ink-muted/50">
                  /0{i + 1}
                </span>
                <div>
                  <span className="font-label text-xs text-brand-600">
                    {chapter.label}
                  </span>
                  <h2 className="font-heading mt-2 text-2xl font-bold text-ink">
                    {chapter.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {chapter.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-notch mt-12 rounded-xl border border-black/10 bg-surface p-8 sm:p-10">
            <p className="font-heading text-xl font-semibold leading-relaxed text-ink sm:text-2xl">
              &ldquo;{founderStory.closing}&rdquo;
            </p>
            <p className="font-label mt-6 text-xs text-brand-600">
              — The {company.name} Team
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <IconLayers size={28} className="text-white" />
          </span>
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your problem could be our next module
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            If something about how your business runs is broken, tell us
            about it. There&apos;s a good chance we&apos;ve already fixed it
            for someone else.
          </p>
          <Button href="/contact">Book a Free Strategy Call</Button>
        </Container>
      </section>
    </>
  );
}
