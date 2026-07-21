import type { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle2,
  Camera,
  MessageCircle,
  Users,
  BookOpen,
  Globe2,
  Mail,
  ShoppingCart,
  Database,
  Workflow,
} from "lucide-react";
import { IconLayers } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { socialMedia } from "@/lib/content";

export const metadata: Metadata = {
  title: "Social Media Solutions",
  description:
    "Turn Instagram and WhatsApp into a complete digital business platform — AI chatbots, automation, contact management, and websites built for small businesses.",
};

const solutionIcons = {
  instagram: Camera,
  whatsapp: MessageCircle,
  contacts: Users,
  knowledge: BookOpen,
  website: Globe2,
  workspace: Mail,
  ecommerce: ShoppingCart,
  database: Database,
  automation: Workflow,
};

export default function SocialMediaSolutionsPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-label text-xs text-brand-400">
              {socialMedia.eyebrow}
            </span>
            <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {socialMedia.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {socialMedia.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              {socialMedia.subIntro}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Book a Free Business Digital Check-up</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Common Business Problems We Solve"
            title="Many businesses lose customers without even realizing it"
            align="center"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socialMedia.problems.map((problem) => (
              <div
                key={problem.title}
                className="card-notch rounded-xl border border-black/10 bg-surface p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                  <AlertTriangle size={20} className="text-brand-600" />
                </span>
                <h3 className="font-heading mt-5 text-lg font-bold text-ink">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Digital Business Solutions"
            title="Practical systems that fit your business, not the other way around"
            description="Pick what you need today — every solution below is built to scale as your enquiries grow."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {socialMedia.solutions.map((solution) => {
              const Icon = solutionIcons[solution.key as keyof typeof solutionIcons];
              return (
                <div
                  key={solution.key}
                  className="card-notch flex flex-col rounded-xl border border-black/10 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface">
                    <Icon size={24} className="text-brand-600" />
                  </span>
                  <h3 className="font-heading mt-6 text-xl font-bold text-ink">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {solution.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-black/10 pt-6">
                    {solution.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink/80"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-brand-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {solution.footnote && (
                    <p className="mt-6 border-t border-black/10 pt-4 text-xs leading-relaxed text-ink-muted">
                      {solution.footnote}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Digital Transformation Approach"
            title="One-time implementation — scale only when your business grows"
            align="center"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {socialMedia.growthPath.map((stage, i) => (
              <div
                key={stage.stage}
                className="card-notch rounded-xl border border-black/10 p-8"
              >
                <span className="font-heading flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-base font-bold text-white">
                  0{i + 1}
                </span>
                <span className="font-label mt-5 block text-xs text-brand-600">
                  {stage.stage}
                </span>
                <h3 className="font-heading mt-1 text-2xl font-bold text-ink">
                  {stage.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {stage.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-black/10 pt-6">
                  {stage.items.map((item) => (
                    <li key={item} className="text-sm text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-label text-xs text-brand-400">
              Why Businesses Choose Alpha Info Tech
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We don&apos;t sell complicated software
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              We build practical digital systems that work with the tools you
              already use. No unnecessary complexity — just solutions that
              save time, capture more enquiries, and help your business grow.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {socialMedia.tools.map((tool) => (
              <span
                key={tool}
                className="font-label rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Designed for Small Businesses"
            title="Our solutions are ideal for"
            align="center"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {socialMedia.industries.map((industry) => (
              <span
                key={industry}
                className="font-label rounded-md bg-white px-4 py-2 text-xs text-ink-muted shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Why Alpha Info Tech?"
            title="Reasons small businesses work with us"
            align="center"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {socialMedia.whyUs.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-lg border border-black/10 bg-surface p-4 text-sm text-ink/80"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600" />
                {reason}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <IconLayers size={28} className="text-white" />
          </span>
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Grow Digitally?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Book a FREE Business Digital Check-up. We&apos;ll review your
            current business process, identify where you&apos;re losing
            customers or time, and recommend practical solutions that fit
            your budget.
          </p>
          <Button href="/contact">Book a Free Business Digital Check-up</Button>
        </Container>
      </section>
    </>
  );
}
