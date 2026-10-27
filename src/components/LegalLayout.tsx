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

        <div className="mt-10 space-y-8 [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-heading [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:font-semibold [&_h3]:text-ink [&_li]:leading-relaxed [&_li]:text-ink-muted [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:leading-relaxed [&_p]:text-ink-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </section>
  );
}

export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border border-black/10 bg-surface p-3 text-left font-semibold text-ink"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-black/10 p-3 align-top leading-relaxed text-ink-muted"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
