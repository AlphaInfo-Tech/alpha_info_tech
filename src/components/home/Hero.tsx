import { Button } from "../Button";
import Container from "../Container";
import HeroIllustration from "./HeroIllustration";
import StatsRow from "./StatsRow";
import { company } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-surface">
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <span className="font-label text-xs text-brand-600">
            {company.motto}
          </span>

          <h1 className="font-heading mt-4 text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl">
            {company.tagline.replace(" for Growing Businesses", "")}{" "}
            <span className="text-ink-muted">for growing businesses.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {company.statement} We&apos;re the technology partner for small
            business — we understand your challenges, speak your language,
            and grow with you from your first website to a fully custom
            platform.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Book a Free Strategy Call</Button>
            <Button href="/our-model" variant="secondary">
              See how it works
            </Button>
          </div>

          <div className="mt-14 border-t border-black/10 pt-8">
            <StatsRow />
          </div>
        </div>

        <HeroIllustration />
      </Container>
    </section>
  );
}
