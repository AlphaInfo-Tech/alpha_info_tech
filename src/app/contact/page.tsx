import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free strategy call with Alpha Info Tech. Tell us about your business and we'll get back to you within 24 hours.",
};

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.phones.join(" / "),
    href: `tel:${company.phones[0].replace(/\s+/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: company.whatsapp,
    href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: company.responseTime,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-label text-xs text-brand-400">Contact Us</span>
            <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s talk about your business
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Book a free strategy call with our experts — tell us where
              you&apos;re stuck and we&apos;ll help you map out the right
              starting point.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-xl font-bold text-ink">
                Get in touch
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Prefer to reach out directly? Use any of the details below.
              </p>

              <ul className="mt-8 space-y-6">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface text-brand-600">
                      <item.icon size={20} />
                    </span>
                    <div>
                      <p className="font-label text-[11px] text-ink-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.href.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                          className="text-base font-medium text-ink hover:text-brand-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-ink">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-notch rounded-xl border border-black/10 bg-surface p-8 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
