import { Check } from "lucide-react";
import { IconChartUp, IconWorkflow, IconInvoice } from "@/components/icons";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { serviceGroups } from "@/lib/content";

const icons = {
  sales: IconChartUp,
  operations: IconWorkflow,
  finance: IconInvoice,
};

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Modules for every part of your business"
          description="A growing library of purpose-built modules across sales, operations, and finance — pick only what you need, add more as you grow."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {serviceGroups.map((group) => {
            const Icon = icons[group.key as keyof typeof icons];
            return (
              <div
                key={group.key}
                className="card-notch flex flex-col rounded-xl border border-black/10 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface">
                  <Icon size={26} />
                </span>
                <h3 className="font-heading mt-6 text-xl font-bold text-ink">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {group.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-black/10 pt-6">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink/80"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
