import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="19 July 2026">
      <p>
        {company.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        respects your privacy and is committed to protecting the personal
        information you share with us through our website, our software
        modules, and our communications with you. This policy explains what
        we collect, how we use it, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> your name, email address,
          phone number, and any details you share with us via our contact
          form, email, or phone calls.
        </li>
        <li>
          <strong>Business information:</strong> details about your business
          operations that you share with us to help configure or build the
          modules and systems we deliver.
        </li>
        <li>
          <strong>Usage data:</strong> basic technical information such as
          browser type, device type, and pages visited, collected
          automatically when you use our website.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiries and schedule strategy calls</li>
        <li>To design, build, and support the software modules you request</li>
        <li>To send you updates relevant to services you have asked about</li>
        <li>To improve our website and the way we communicate with clients</li>
        <li>To meet legal, accounting, and regulatory requirements</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>
        We do not sell your personal information. We may share it with
        trusted service providers who help us operate (for example, email or
        hosting providers) strictly to deliver our services, and only to the
        extent necessary. We may also disclose information if required by
        law.
      </p>

      <h2>4. Data Storage and Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect
        the information you share with us against unauthorized access, loss,
        or misuse. No method of transmission or storage is completely secure,
        and we encourage you to share only what is necessary when contacting
        us.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Our website may use minimal, functional cookies to keep the site
        working correctly. We do not currently use cookies for advertising or
        cross-site tracking.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You can ask us to access, correct, or delete the personal information
        we hold about you at any time by contacting us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. We will
        respond within a reasonable timeframe.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time to reflect changes in our
        practices or for legal reasons. The &quot;Last updated&quot; date at
        the top of this page will always reflect the most recent revision.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact
        us at <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
        {company.phones.join(" / ")}.
      </p>
    </LegalLayout>
  );
}
