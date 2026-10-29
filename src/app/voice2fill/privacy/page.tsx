import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalTable } from "@/components/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice2Fill Privacy Policy",
  description:
    "What data the Voice2Fill extension and phone page handle, why, who it is shared with, and how long it is kept.",
};

export default function Voice2FillPrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy: Voice2Fill" updated="23 October 2026">
      <p>
        Voice2Fill (&quot;the service&quot;) is run by {company.name}{" "}
        (&quot;we&quot;, &quot;us&quot;). It has two parts:
      </p>
      <ul>
        <li>
          the <strong>Chrome extension</strong>, which reads a form on your
          computer and fills it in;
        </li>
        <li>
          the <strong>phone page</strong>, which opens when you scan the QR
          code. You speak your answers or add photos there.
        </li>
      </ul>
      <p>
        This policy explains what data the service handles, why, who it is
        shared with, and how long it is kept.
      </p>

      <h2>1. Summary</h2>
      <ul>
        <li>
          We use your data only to fill the form you chose. We never sell it,
          use it for advertising or use it to decide on credit or loans.
        </li>
        <li>
          Voice recordings are never stored. They are turned into text and
          thrown away.
        </li>
        <li>
          Your spoken answers and their text are deleted automatically, within
          about an hour of starting a form.
        </li>
        <li>
          Uploaded photos and documents are deleted as soon as the computer
          receives them.
        </li>
        <li>
          The extension never submits a form. You check it and submit it
          yourself.
        </li>
      </ul>

      <h2>2. What we collect and why</h2>
      <LegalTable
        head={["Data", "When", "Why"]}
        rows={[
          [
            <><strong>Account details</strong>: name, phone number, a hashed PIN</>,
            "When your account is created",
            "To sign you in",
          ],
          [
            <><strong>Access requests</strong>: name, mobile (WhatsApp) number and, if you give them, email, organisation, district, expected forms per day and message</>,
            <>When you send the <Link href="/request-access">request access</Link> form</>,
            "To review your request, create your account and contact you about it",
          ],
          [
            <><strong>Sign-in attempts</strong>: phone number, IP address, success or failure</>,
            "Each time you sign in",
            "To block repeated wrong PINs and protect accounts",
          ],
          [
            <><strong>Form page details</strong>: the page&apos;s address (URL), title and form name</>,
            "When you click “Scan form on this page”",
            "To show the phone which form it is filling, and to avoid filling the wrong page",
          ],
          [
            <><strong>Form structure</strong>: field labels, field types, dropdown options, upload rules (for example “JPG, max 50 KB”)</>,
            "When you scan, and when new fields appear on a later step",
            "To understand the form so your answers go into the right fields",
          ],
          [
            <strong key="voice">Voice recordings</strong>,
            "When you tap the mic on the phone",
            "To turn your speech into text. Not stored.",
          ],
          [
            <><strong>What you said, as text, and the field values made from it</strong></>,
            "After each recording",
            "To fill the form and let you check and correct the answers",
          ],
          [
            <><strong>Photos and documents</strong> you add on the phone</>,
            "When you upload one for an upload field",
            "To put the file into the website's upload field",
          ],
          [
            <><strong>Usage records</strong>: time of each request, minutes of audio, number of AI tokens, cost</>,
            "Each time speech is transcribed or the AI reads a form",
            "To count the voice minutes in your plan and keep track of costs. These records contain no audio, text or answers.",
          ],
          [
            <><strong>Plan and payment records</strong>: your plan, its dates and minutes, and each payment&apos;s amount, date, method and reference (for example a UPI transaction id)</>,
            "When you get or renew a plan, or buy extra minutes",
            "To know which plan you paid for, and for our accounts. For online payments, Razorpay sends us the payment ID, amount, method, and the phone, email and Voice2Fill mobile number you entered at checkout. We never receive or store card numbers, UPI PINs or bank passwords.",
          ],
        ]}
      />
      <p>
        We don&apos;t collect your browsing history. The extension runs on no
        website by default. When you click &quot;Scan form on this page&quot;,
        Chrome asks you to allow that one site; the extension then reads that
        site&apos;s form pages only while a form session is open, so a
        form&apos;s next step also fills. You can remove that access in Chrome
        at any time.
      </p>

      <h2>3. Who we share it with</h2>
      <p>
        We share data only with the services needed to run Voice2Fill. Each
        one processes it for us under its own terms:
      </p>
      <LegalTable
        head={["Service", "What it receives", "Why"]}
        rows={[
          [
            <strong key="sarvam">Sarvam AI</strong>,
            "Voice recordings and, with some speech models, the form's field and option names as spelling hints",
            "Turns speech into text (Tamil, English and Tanglish)",
          ],
          [
            <strong key="openai">OpenAI</strong>,
            "What you said as text, the form's field labels and options, and your last few answers",
            "Reads the form and turns what you said into field values",
          ],
          [
            <strong key="supabase">Supabase</strong>,
            "Account, access request, session, answer and file data",
            "Database, live updates between phone and computer, and private file storage",
          ],
          [
            <strong key="vercel">Vercel</strong>,
            "All requests to our server, in transit",
            "Hosts the server and the phone page",
          ],
          [
            <strong key="razorpay">Razorpay</strong>,
            "The payment details you enter at checkout",
            "Processes online payments for plans and extra minutes",
          ],
        ]}
      />
      <p>
        Photos and documents are never sent to Sarvam AI or OpenAI. We may
        also disclose data if the law requires it. These providers may process
        data on servers outside India.
      </p>

      <h2>4. On your devices</h2>
      <ul>
        <li>
          <strong>Extension:</strong> keeps your sign-in and open form sessions
          in Chrome&apos;s temporary session storage. It is cleared when you
          sign out or close the browser.
        </li>
        <li>
          <strong>Phone page:</strong> keeps the current session in the
          browser tab&apos;s storage until you close the tab; remembers your
          language choice (தமிழ் or English); and converts photos on the phone
          itself. Location and camera details (EXIF/GPS) are removed before
          upload.
        </li>
      </ul>

      <h2>5. How long we keep it</h2>
      <LegalTable
        head={["Data", "Kept for"]}
        rows={[
          ["Voice recordings", "Not stored. Only held in memory while it is being converted to text."],
          [
            "What you said (text) and the field values",
            "Deleted automatically about 40 to 60 minutes after the form session starts. “Start over” deletes them straight away.",
          ],
          [
            "Photos and documents",
            "Deleted as soon as the computer has the file or the website refuses it. Also deleted on “Start over”, when the form tab is closed, or when the session expires.",
          ],
          ["Form session records (page address, title, field labels)", "30 days, then deleted"],
          ["Sign-in attempts", "1 day"],
          [
            "Access requests",
            "180 days after we review them, or 180 days after you sent them if we haven't reviewed them",
          ],
          [
            "Usage records",
            "Kept for billing. When an account is deleted, its usage records are no longer linked to it.",
          ],
          [
            "Plan and payment records",
            "As long as the law requires us to keep accounting records. When an account is deleted, its payment records are no longer linked to it.",
          ],
          ["Account details", "Until the account is deleted"],
        ]}
      />

      <h2>6. How we protect it</h2>
      <ul>
        <li>
          Every connection uses encryption (HTTPS and secure WebSockets).
          Stored data is encrypted by our database provider.
        </li>
        <li>
          QR codes work only once and expire after 10 minutes. A phone link
          lasts 30 minutes.
        </li>
        <li>
          Each session can only be read by its own computer and phone. Phones
          and computers can&apos;t write to the database directly; every
          change goes through our server.
        </li>
        <li>
          Uploaded files are stored privately. Download links work for a
          single file and expire after 60 seconds.
        </li>
        <li>
          PINs are stored only as a hash. An account is locked for a while
          after too many wrong PINs.
        </li>
      </ul>

      <h2>7. Who can see your data</h2>
      <p>
        No person reads your recordings, transcripts, answers or files. That
        applies to us and to your administrator.
      </p>
      <ul>
        <li>
          <strong>Administrators can see:</strong> account names, phone
          numbers, plans, payments and usage totals (minutes, tokens, cost).
        </li>
        <li>
          <strong>We may look at data only:</strong> with your permission, to
          investigate security problems or abuse, or when the law requires it.
        </li>
      </ul>

      <h2>8. Chrome Web Store Limited Use</h2>
      <p>
        The use of information received from the Voice2Fill extension follows
        the{" "}
        <a
          href="https://developer.chrome.com/docs/webstore/program-policies/user-data-faq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome Web Store User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2>9. Your choices and rights</h2>
      <ul>
        <li>
          <strong>Stop at any time:</strong> use &quot;Start over&quot; on the
          phone, close the form tab, or sign out of the extension.
        </li>
        <li>
          <strong>Ask us:</strong> email{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> to see,
          correct or delete your data, or to have your account deleted. Your
          administrator can also deactivate your account.
        </li>
      </ul>

      <h2>10. Children</h2>
      <p>
        The service is meant for adults and organisations. It is not directed
        at children under 13.
      </p>

      <h2>11. Changes</h2>
      <p>
        If this policy changes, we will update the date at the top of this
        page. If a change means we handle data in a new way, we will show a
        notice in the extension before it applies.
      </p>

      <h2>12. Contact</h2>
      <p>
        {company.name} · <a href={`mailto:${company.email}`}>{company.email}</a>{" "}
        · {company.address}. See also the{" "}
        <Link href="/voice2fill/terms">Voice2Fill terms</Link> and{" "}
        <Link href="/voice2fill/support">support page</Link>.
      </p>
    </LegalLayout>
  );
}
