import { IconShieldCheck } from "@/components/icons";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { valueProps } from "@/lib/content";

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Built from real business problems, not theory"
            />
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              Alpha Info Tech didn&apos;t start in a boardroom. It started with
              long hours, frustrated customers, and payment delays we lived
              through ourselves. We built solutions to fix our own operational
              pain points first — and our module library grew organically from
              there, long before we ever offered it to other businesses.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              That&apos;s still how we work today. Every module in our library
              exists because someone hit that exact wall running a real
              business — which means what you get is tested by us before it
              ever reaches you.
            </p>
          </div>

          <div className="card-notch rounded-xl border border-black/10 bg-surface p-8">
            <div className="flex items-center gap-2">
              <IconShieldCheck size={22} />
              <h3 className="font-heading text-lg font-semibold text-ink">
                What you get, every time
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {valueProps.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent-400 to-accent-600" />
                  <span className="text-sm leading-relaxed text-ink/80">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
