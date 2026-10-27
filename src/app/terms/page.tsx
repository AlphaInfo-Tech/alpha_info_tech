import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions governing the use of ${company.name}'s website and services.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="27 October 2026">
      <p>
        These Terms & Conditions govern your use of the {company.name}{" "}
        website and any services you engage us for. By using our website or
        working with us, you agree to these terms.
      </p>

      <h2>1. Our Services</h2>
      <p>
        {company.name} designs, builds, and supports digital modules and
        platforms for small and growing businesses across sales, operations,
        and finance. The specific scope, timeline, and pricing for any
        engagement will be agreed with you separately before work begins.
      </p>

      <h2>2. Website Use</h2>
      <p>
        You agree to use our website only for lawful purposes and in a way
        that does not infringe the rights of, or restrict or inhibit the use
        of, this site by anyone else.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        Unless otherwise agreed in writing, the content on this website —
        including text, graphics, logos, and module descriptions — is the
        property of {company.name} and may not be reproduced without
        permission. Ownership of custom software delivered under a paid
        engagement will be set out in the relevant project agreement.
      </p>

      <h2>4. Quotes and Payments</h2>
      <p>
        Quotations provided by {company.name} are valid for the period stated
        at the time of issue. Payment terms, milestones, and applicable taxes
        (including GST where relevant) will be detailed in your project
        agreement or invoice.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        We work to deliver reliable, well-tested software, but we do not
        guarantee that any module or platform will be uninterrupted or
        entirely error-free. To the extent permitted by law, {company.name}{" "}
        is not liable for indirect or consequential losses arising from the
        use of our website or services.
      </p>

      <h2>6. Third-Party Tools</h2>
      <p>
        Some of our solutions are built on third-party platforms such as Zoho
        Creator or Google AppSheet. Your use of those platforms is also
        subject to their respective terms of service.
      </p>

      <h2>7. Voice2Fill</h2>
      <ul>
        <li>
          <strong>Accounts:</strong> Voice2Fill accounts are created by our
          team on request. Keep your PIN private; you are responsible for
          activity under your account. We may suspend accounts that are
          misused.
        </li>
        <li>
          <strong>Independent tool:</strong> Voice2Fill is not affiliated
          with any government department or service. It works on government
          and private websites, and those websites&apos; own terms continue to
          apply when you use them.
        </li>
        <li>
          <strong>You review and submit:</strong> the extension fills fields
          but never submits a form for you. Speech recognition can make
          mistakes, so check every value before you submit. You are
          responsible for what you submit.
        </li>
        <li>
          <strong>Other people&apos;s details:</strong> if you fill forms on
          behalf of other people, for example at a service centre, you are
          responsible for having their permission to use their details.
        </li>
        <li>
          <strong>Plans, payments and refunds:</strong> see the{" "}
          <Link href="/voice2fill/terms">Voice2Fill terms</Link>, which apply
          in addition to these.
        </li>
      </ul>

      <h2>8. Changes to These Terms</h2>
      <p>
        We may revise these Terms & Conditions from time to time. Continued
        use of our website or services after changes are posted constitutes
        acceptance of the updated terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms are governed by the laws of India, and any disputes will
        be subject to the jurisdiction of the courts in Tamil Nadu.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> or{" "}
        {company.phones.join(" / ")}.
      </p>
    </LegalLayout>
  );
}
