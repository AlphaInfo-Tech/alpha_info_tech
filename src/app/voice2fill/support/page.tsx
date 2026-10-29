import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import LegalLayout from "@/components/LegalLayout";
import { company, voice2Fill } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice2Fill Support",
  description:
    "Help with Voice2Fill: getting an account, QR codes and the phone page, filling forms, photos and documents.",
};

const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

const groups: { title: string; items: { q: string; a: ReactNode }[] }[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do I get an account?",
        a: (
          <>
            Send the <Link href="/request-access">request access</Link> form.
            We create your account with your phone number and a 5-digit PIN,
            and new accounts start with a free 7-day trial. Sign in from the
            extension&apos;s popup.
          </>
        ),
      },
      {
        q: "“Locked” after wrong PINs",
        a: "After too many wrong PINs the account locks for a few minutes. Wait, then try again, or ask your administrator to check your PIN.",
      },
      {
        q: "What does the phone need?",
        a: "A browser (Chrome or Safari) and a microphone. No app to install.",
      },
    ],
  },
  {
    title: "QR code and phone",
    items: [
      {
        q: "“This QR code has expired” or “This QR code was already opened on another phone”",
        a: (
          <>
            A QR code works once, within 10 minutes. In the extension, press{" "}
            <strong>Regenerate</strong> (or <strong>New form</strong>) and scan
            again.
          </>
        ),
      },
      {
        q: "“This link has expired. Scan the QR code again.”",
        a: (
          <>
            A phone link lasts 30 minutes. Click{" "}
            <strong>Scan form on this page</strong> again on the computer.
          </>
        ),
      },
      {
        q: "The QR code opened in WhatsApp or Google Lens and the mic doesn't work",
        a: (
          <>
            In-app browsers can&apos;t record. Tap <strong>Copy link</strong>{" "}
            and open the link in Chrome or Safari.
          </>
        ),
      },
      {
        q: "“Microphone access was blocked.”",
        a: (
          <>
            Allow the microphone for this site in your browser&apos;s settings.
            The phone page shows the steps for Chrome and Safari. Then tap{" "}
            <strong>Try again</strong>.
          </>
        ),
      },
      {
        q: "Recording stopped when the screen locked or a call came in",
        a: "What was recorded so far is still sent. Tap the mic again to continue.",
      },
      {
        q: "“Speech service is busy”",
        a: "Wait a minute, then tap the answer to retry.",
      },
    ],
  },
  {
    title: "Filling the form",
    items: [
      {
        q: "A field shows “Check this”",
        a: "The answer may be wrong. Tap it on the phone to fix it, or say it again.",
      },
      {
        q: "A dropdown shows “Pick one”",
        a: "What you said matched more than one option, or none. Tap the right option on the phone.",
      },
      {
        q: "“Waiting: this field isn't on the page yet”",
        a: "The field is on a later step of the form. It fills in by itself when that step appears.",
      },
      {
        q: "The phone says “The computer hasn't responded”",
        a: (
          <>
            Make sure the computer is awake, Chrome is open, and the form tab is
            still open. Then tap <strong>Send again</strong>.
          </>
        ),
      },
      {
        q: "“Tab closed”",
        a: "The form tab on the computer was closed, or the extension was signed out. Nothing more will be sent. Scan a new QR code from the computer.",
      },
      {
        q: "Captcha and OTP",
        a: "Type these on the computer. They can't be filled by voice.",
      },
      {
        q: "A field wasn't filled",
        a: "Some websites block automatic filling for certain fields. The popup shows “Not filled” with the reason. Type that field by hand.",
      },
      {
        q: "Something filled wrongly",
        a: (
          <>
            Press <strong>Undo</strong> in the extension to put the page back.
            Or use <strong>Start over</strong> on the phone, then{" "}
            <strong>Clear phone and computer form</strong>.
          </>
        ),
      },
    ],
  },
  {
    title: "Photos and documents",
    items: [
      {
        q: "“The website refused it: …”",
        a: (
          <>
            The site has its own rules for that field. Read the reason, then tap
            the field on the phone and <strong>Replace</strong> the file.
          </>
        ),
      },
      {
        q: "“Click ‘Upload’ next to this field on the page”",
        a: "Some sites need you to press their own Upload button after the file is added. Click it on the computer.",
      },
      {
        q: "My PDF is too big",
        a: "A PDF you choose is sent as it is. Take photos of the pages instead, and the phone will make a PDF that fits.",
      },
      {
        q: "Photo tips",
        a: "Put the document on a dark table, in good light, and fill the frame.",
      },
    ],
  },
  {
    title: "Plans and minutes",
    items: [
      {
        q: "What uses voice minutes?",
        a: (
          <>
            Only the time the microphone is recording. Scanning, filling and
            uploads are free. See the{" "}
            <Link href="/voice2fill/terms">plans, payments and refunds</Link>.
          </>
        ),
      },
      {
        q: "How do I renew, upgrade or buy extra minutes?",
        a: (
          <>
            Click <strong>Renew</strong> in the extension popup, or open the{" "}
            <Link href="/voice2fill/plans">plans page</Link>. Pay through
            Razorpay and enter your Voice2Fill mobile number at checkout.
          </>
        ),
      },
      {
        q: "I paid but my plan hasn't changed",
        a: (
          <>
            We switch plans on {voice2Fill.payment.activationTime} and confirm
            on WhatsApp. Then close and reopen the extension popup. If it&apos;s
            taking longer, send us the payment ID from your Razorpay receipt.
          </>
        ),
      },
      {
        q: "I typed the wrong mobile number at checkout",
        a: "Message us with the payment ID and your Voice2Fill mobile number, and we'll add the plan to the right account.",
      },
    ],
  },
];

export default function Voice2FillSupportPage() {
  return (
    <LegalLayout title="Support: Voice2Fill" updated="27 October 2026">
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </li>
        <li>
          <strong>Phone / WhatsApp:</strong>{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {company.whatsapp}
          </a>
        </li>
      </ul>
      <p>
        When you write, please include the website address of the form, what
        you expected to happen, and what the phone or popup said. Don&apos;t
        send PINs, OTPs or screenshots that show someone&apos;s personal
        details.
      </p>

      {groups.map((group) => (
        <section key={group.title} className="space-y-6">
          <h2>{group.title}</h2>
          {group.items.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p className="mt-1">{item.a}</p>
            </div>
          ))}
        </section>
      ))}

      <h2>Privacy</h2>
      <p>
        Voice recordings are never stored. Answers are deleted within about an
        hour, and files as soon as the computer has them. Read the full{" "}
        <Link href="/voice2fill/privacy">privacy policy</Link>.
      </p>
    </LegalLayout>
  );
}
