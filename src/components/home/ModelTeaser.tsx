import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Button } from "../Button";
import { stages } from "@/lib/content";

export default function ModelTeaser() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Model"
          title="Grow at your own pace, in three stages"
          description="You don't need enterprise software on day one. We meet you where you are and build the next stage only when you're ready for it."
          align="center"
        />

        <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
          {stages.map((stage, i) => (
            <div
              key={stage.stage}
              className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-label text-2xl text-ink-muted/50">
                /0{i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-heading text-2xl font-bold text-ink">
                    {stage.name}
                  </h3>
                  <span className="font-label text-xs text-brand-600">
                    {stage.stage}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/our-model" variant="secondary">
            Explore our full model
          </Button>
        </div>
      </Container>
    </section>
  );
}
