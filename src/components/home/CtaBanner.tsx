import { IconLayers } from "@/components/icons";
import Container from "../Container";
import { Button } from "../Button";

export default function CtaBanner() {
  return (
    <section className="bg-navy">
      <Container className="flex flex-col items-center gap-8 py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <IconLayers size={28} className="text-white" />
        </span>

        <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build a system that <span className="text-slate-500">actually fits</span>{" "}
          your business?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-400">
          Book a free strategy call and we&apos;ll help you figure out exactly
          where to start — no pressure, no jargon.
        </p>
        <Button href="/contact">Book a Free Strategy Call</Button>
      </Container>
    </section>
  );
}
