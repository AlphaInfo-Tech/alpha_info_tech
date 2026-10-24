import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="24 October 2026">
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
        <li>
          <strong>Access requests.</strong> When you request access to Voice2Fill, we collect your name, mobile (WhatsApp) number and, if you
          give them, your email, organisation, district, expected forms per
          day and message. We use them only to review your request, create
          your account and contact you about it. Requests are stored in
          Supabase and deleted 180 days after we review them, or after 180
          days if we haven&apos;t. They are never sold or used for
          advertising.
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
        trusted service providers who help us operate (for example, email,
        hosting and database providers such as Supabase, or the speech
        transcription service used by Voice2Fill) strictly to deliver our services, and only to the
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

      <h2>5. Voice2Fill</h2>
      <p>
        Voice2Fill is our Chrome extension for filling web forms by voice
        from your phone. It handles your information as follows:
      </p>
      <ul>
        <li>
          <strong>Your account:</strong> your name and mobile number are used
          to sign you in and to contact you about your account.
        </li>
        <li>
          <strong>Voice:</strong> sent for transcription and not stored.
        </li>
        <li>
          <strong>Spoken answers:</strong> the answers and their text are
          deleted automatically within about an hour.
        </li>
        <li>
          <strong>Form sessions:</strong> records of the page address and
          field labels are deleted after 30 days.
        </li>
        <li>
          <strong>Photos and documents:</strong> stored privately and deleted
          as soon as your computer receives them, or when the tab closes.
          Location and camera details (EXIF/GPS) are removed from photos.
        </li>
        <li>
          <strong>Pairing links:</strong> QR codes work once and expire after
          10 minutes. A phone link lasts 30 minutes.
        </li>
        <li>
          <strong>Submitting:</strong> the extension never submits a form for
          you. You review and submit it yourself.
        </li>
      </ul>
      <p>
        Voice2Fill data is not sold, not used for advertising and not used
        for anything except filling your form.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our website may use minimal, functional cookies to keep the site
        working correctly. We do not currently use cookies for advertising or
        cross-site tracking.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You can ask us to access, correct, or delete the personal information
        we hold about you at any time by contacting us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. We will
        respond within a reasonable timeframe.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time to reflect changes in our
        practices or for legal reasons. The &quot;Last updated&quot; date at
        the top of this page will always reflect the most recent revision.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact
        us at <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
        {company.phones.join(" / ")}.
      </p>
    </LegalLayout>
  );
}
