import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { IconLayers } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { stages, values, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Model",
  description:
    "How Alpha Info Tech grows with your business — from a simple website to fully custom, enterprise-grade platforms, in three deliberate stages.",
};

export default function OurModelPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-label text-xs text-brand-400">Our Model</span>
            <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Software that grows exactly as fast as you do
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {company.name} is {`"`}the technology partner for small business{`"`} — we
              understand your challenges, speak your language, and evolve
              alongside you from your first website to a proprietary
              platform. No forced leaps, no wasted spend.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Three Stages"
            title="You move forward when you're ready, not before"
            description="Every business we work with starts somewhere different. Our job is to meet you there and build the next stage only once you've outgrown the last one."
          />

          <div className="mt-16 space-y-10">
            {stages.map((stage, i) => (
              <div
                key={stage.stage}
                className="card-notch grid gap-8 rounded-xl border border-black/10 p-8 lg:grid-cols-[auto_1fr] lg:items-start lg:p-10"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="font-heading flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-lg font-bold text-white">
                    0{i + 1}
                  </span>
                  <div>
                    <span className="font-label text-xs text-brand-600">
                      {stage.stage}
                      {stage.tagline ? ` — ${stage.tagline}` : ""}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-ink">
                      {stage.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-ink-muted">
                    {stage.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {stage.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-ink/80"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-brand-600"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {(stage.problems || stage.features) && (
                    <div
                      className={`mt-8 grid gap-6 border-t border-black/10 pt-8 ${
                        stage.problems && stage.features ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {stage.problems && (
                        <div>
                          <h4 className="font-label text-[11px] text-ink-muted">
                            What this fixes
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {stage.problems.map((problem) => (
                              <li key={problem} className="text-sm text-ink/80">
                                {problem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {stage.features && (
                        <div>
                          <h4 className="font-label text-[11px] text-ink-muted">
                            What&apos;s included
                          </h4>
                          <dl className="mt-3 space-y-2">
                            {stage.features.map((feature) => (
                              <div key={feature.label} className="text-sm">
                                <dt className="inline font-semibold text-ink">
                                  {feature.label}:{" "}
                                </dt>
                                <dd className="inline text-ink/80">
                                  {feature.detail}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  )}

                  {stage.tools && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-label rounded-md bg-surface px-3 py-1.5 text-[10px] text-ink-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {stage.platformGroups && (
                    <div className="mt-8 border-t border-black/10 pt-8">
                      <h4 className="font-label text-[11px] text-ink-muted">
                        Platforms we configure
                      </h4>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        {stage.platformGroups.map((group) => (
                          <div
                            key={group.name}
                            className="rounded-lg bg-surface p-4"
                          >
                            <p className="text-sm font-semibold text-ink">
                              {group.name}
                            </p>
                            <p className="font-label mt-0.5 text-[10px] text-brand-600">
                              {group.type}
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {group.items.map((item) => (
                                <li
                                  key={item}
                                  className="text-xs leading-relaxed text-ink-muted"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {stage.forWhom && (
                    <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                      <span className="font-label text-[11px] text-brand-600">
                        Who it&apos;s for —{" "}
                      </span>
                      {stage.forWhom}
                    </p>
                  )}

                  {stage.philosophy && (
                    <p className="font-heading mt-6 border-t border-black/10 pt-6 text-lg font-semibold leading-relaxed text-ink">
                      &ldquo;{stage.philosophy}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="The values behind every module we build"
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-notch rounded-xl border border-black/10 bg-white p-6"
              >
                <h3 className="font-heading text-lg font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <IconLayers size={28} className="text-white" />
          </span>
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Not sure which stage fits your business?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Tell us where you are today and we&apos;ll map out the right
            starting point — for free.
          </p>
          <Button href="/contact">Book a Free Strategy Call</Button>
        </Container>
      </section>
    </>
  );
}
