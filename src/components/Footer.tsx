import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "./Container";
import { company, navLinks } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-bold text-white">
                AI
              </span>
              <span className="font-heading text-lg font-bold text-white">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.tagline}. {company.statement}
            </p>
          </div>

          <div>
            <h3 className="font-label text-xs text-accent-400">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-label text-xs text-accent-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-400" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-brand-400" />
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 font-label text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="normal-case tracking-normal">
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <p>{company.motto}</p>
        </div>
      </Container>
    </footer>
  );
}
