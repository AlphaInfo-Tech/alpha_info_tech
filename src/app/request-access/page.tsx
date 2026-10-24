import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import RequestAccessForm from "@/components/RequestAccessForm";
import { company, requestAccess } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request Access to Voice2Fill",
  description:
    "Request a Voice2Fill account for your service centre or office. Fill web forms by speaking Tamil or English on your phone.",
};

const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

const steps = [
  {
    title: "We check your request.",
    body: "Usually within 2 working days.",
  },
  {
    title: "We call or WhatsApp you",
    body: "on the mobile number you gave, with your PIN.",
  },
  {
    title: "Install the extension",
    body: requestAccess.storeUrl ? (
      <>
        from the{" "}
        <a href={requestAccess.storeUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2">
          Chrome Web Store
        </a>
        .
      </>
    ) : (
      "from the Chrome Web Store (we'll send you the link)."
    ),
  },
  {
    title: "Sign in",
    body: "with your mobile number and PIN, open any web form and click “Scan form on this page”.",
  },
];

const supportLinks = (
  <>
    <a href={`mailto:${company.email}`}>{company.email}</a> or WhatsApp{" "}
    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
      {company.whatsapp}
    </a>
  </>
);

const faqs = [
  {
    q: "Is this a government service?",
    a: (
      <>
        No. Voice2Fill is an independent tool and is not affiliated with any
        government department or service. It works on government and private
        websites alike.
      </>
    ),
  },
  {
    q: "What do you do with my details?",
    a: (
      <>
        We use your name and mobile number only to create your account and
        contact you about it. Requests that are not approved are deleted after
        180 days. See the <Link href="/privacy-policy">privacy policy</Link>.
      </>
    ),
  },
  {
    q: "I already sent a request.",
    a: (
      <>
        You don&apos;t need to send it again; we&apos;ll contact you. If
        it&apos;s been more than 2 working days, write to {supportLinks}.
      </>
    ),
  },
  {
    q: "I lost my PIN.",
    a: <>Contact {supportLinks} from the mobile number linked to your account.</>,
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function RequestAccessPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/voice2fill/icon-48.png"
                alt=""
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-label text-xs text-brand-400">
                Voice2Fill · {requestAccess.eyebrow}
              </span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {requestAccess.title}
            </h1>
            <p className="font-heading mt-4 text-xl font-semibold text-white">
              {requestAccess.lead}
            </p>
            <p lang="ta" className="mt-2 text-lg font-semibold text-accent-400">
              {requestAccess.leadTamil}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {requestAccess.intro}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div id="form" className="card-notch scroll-mt-28 rounded-xl border border-black/10 bg-surface p-6 sm:p-8 lg:col-span-3">
              <RequestAccessForm />
            </div>

            <aside className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="font-heading text-xl font-bold text-ink">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-sm leading-relaxed text-ink-muted">
                        <strong className="font-semibold text-ink">{step.title}</strong>{" "}
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-black/10 pt-10">
                <span className="font-label text-xs text-brand-600">Who can request access</span>
                <CheckList items={requestAccess.whoCanRequest} />
              </div>

              <div className="border-t border-black/10 pt-10">
                <span className="font-label text-xs text-brand-600">What you need</span>
                <CheckList items={requestAccess.requirements} />
              </div>

              <p className="border-t border-black/10 pt-10 text-sm text-ink-muted">
                Want to see how it works first?{" "}
                <Link href="/voice2fill" className="font-semibold text-brand-600 hover:text-brand-700">
                  Take the Voice2Fill tour →
                </Link>
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Before you send a request" align="center" />
          <dl className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-black/10 bg-white p-6">
                <dt className="font-heading text-base font-bold text-ink">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-muted [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
