import { ReactNode } from "react";
import Container from "./Container";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-ink">
          {title}
        </h1>
        <p className="font-label mt-3 text-[11px] text-ink-muted">Last updated: {updated}</p>

        <div className="mt-10 space-y-8 [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-heading [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:leading-relaxed [&_li]:text-ink-muted [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:leading-relaxed [&_p]:text-ink-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </section>
  );
}
