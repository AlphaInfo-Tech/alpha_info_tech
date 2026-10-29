import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalTable } from "@/components/LegalLayout";
import { company, voice2Fill } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice2Fill Terms, Plans & Refunds",
  description:
    "Terms of use for Voice2Fill: accounts, plans and voice minutes, paying and renewing, refunds and cancellation.",
};

const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

const contact = (
  <>
    email <a href={`mailto:${company.email}`}>{company.email}</a> or WhatsApp{" "}
    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
      {company.whatsapp}
    </a>
  </>
);

export default function Voice2FillTermsPage() {
  return (
    <LegalLayout title="Terms of Use, Plans & Refunds: Voice2Fill" updated="27 October 2026">
      <p>
        These terms apply to Voice2Fill (&quot;the service&quot;): the Chrome
        extension, the phone page and the Voice2Fill account it uses. The
        service is run by {company.name} (&quot;we&quot;, &quot;us&quot;). By
        signing in you agree to these terms and to the{" "}
        <Link href="/voice2fill/privacy">privacy policy</Link>.
      </p>

      <h2>1. Your account</h2>
      <ul>
        <li>
          We create your account with your phone number and a 5-digit PIN.
          Keep the PIN secret; you are responsible for what is done with your
          account.
        </li>
        <li>One account is for one person. Don&apos;t share it or resell access.</li>
        <li>
          We may suspend an account that is used to break the law, to abuse the
          service or someone else&apos;s website, or that isn&apos;t paid for.
        </li>
      </ul>

      <h2>2. Plans</h2>
      <p>
        Every plan gives you a number of <strong>voice minutes</strong> for a
        number of days. A voice minute is one minute of recording on the phone
        (from tapping the microphone to tapping Stop), sent for transcription.
        Scanning a form, filling it, photos and uploads don&apos;t use minutes.
      </p>
      <LegalTable
        head={["Plan", "Price", "Voice minutes", "Lasts"]}
        rows={voice2Fill.plans.map((plan) => [plan.name, plan.price, plan.minutes, plan.duration])}
      />
      <ul>
        <li>The extension shows your plan, the minutes left and the end date.</li>
        <li>
          When the minutes run out or the plan ends, you can&apos;t scan new
          forms or record speech until you renew. A recording that has already
          started is finished.
        </li>
        <li>Unused minutes don&apos;t carry over to the next plan.</li>
        <li>
          We may change prices. A new price applies from your next renewal,
          never to a plan you have already paid for.
        </li>
      </ul>

      <h2>3. Paying and renewing</h2>
      <ul>
        <li>
          Pay online on the <Link href="/voice2fill/plans">plans page</Link>{" "}
          through Razorpay (UPI, cards, netbanking or wallets), entering your
          Voice2Fill mobile number at checkout. You can also pay by UPI or bank
          transfer to the details we give you, then send us the payment
          reference. Your plan starts when we have confirmed the payment.
        </li>
        <li>
          If you renew early, the new plan starts when the current one ends, so
          you lose no days.
        </li>
        <li>
          Plans don&apos;t renew automatically. We will remind you before your
          plan ends.
        </li>
      </ul>

      <h2>4. Refunds and cancellation</h2>
      <ul>
        <li>
          You can stop using the service at any time. There is nothing to
          cancel, because plans don&apos;t renew automatically.
        </li>
        <li>
          <strong>Within 7 days of paying,</strong> if you have used less than
          10% of the plan&apos;s minutes, we refund the full amount on request.
        </li>
        <li>
          If the service doesn&apos;t work for a reason on our side (for
          example, it can&apos;t read the forms you bought it for) and we
          can&apos;t fix it, we refund the unused part of the plan.
        </li>
        <li>Payments made twice by mistake are always refunded.</li>
        <li>Otherwise, used plans and extra minutes are not refunded.</li>
        <li>
          To ask for a refund, {contact} with your phone number and the
          payment reference. Refunds go back to the account you paid from
          within 7 working days of approval.
        </li>
      </ul>

      <h2>5. Using the service properly</h2>
      <ul>
        <li>
          You decide what goes into a form.{" "}
          <strong>Always check the filled form before you submit it.</strong>{" "}
          The service turns speech into text and can make mistakes, and the
          extension never submits a form for you.
        </li>
        <li>
          Only fill forms you are allowed to fill: your own, or with the
          permission of the person whose details they are.
        </li>
        <li>
          Don&apos;t use the service to get around a website&apos;s security
          checks (such as captchas or OTPs), or to send automated traffic to
          other sites.
        </li>
        <li>
          Voice2Fill is an independent tool and is not affiliated with any
          government department or service.
        </li>
      </ul>

      <h2>6. Availability</h2>
      <p>
        We work to keep the service running, but we can&apos;t promise it will
        always be available or error-free. It depends on outside services
        (speech-to-text, AI, hosting) and on the websites you fill. If the
        service is down for more than a day in your plan period, tell us and we
        will add the lost days to your plan.
      </p>

      <h2>7. Liability</h2>
      <p>
        To the extent the law allows, we are not responsible for losses caused
        by a wrong value in a form you submitted, or by a website rejecting a
        form. Our total liability is limited to what you paid us in the last 3
        months.
      </p>

      <h2>8. Changes and law</h2>
      <ul>
        <li>
          If these terms change, we will update the date at the top and tell
          you in the extension or by message before the change applies to you.
        </li>
        <li>
          These terms are governed by the laws of India. Disputes go to the
          courts of Erode, Tamil Nadu.
        </li>
      </ul>

      <h2>9. Contact</h2>
      <p>
        {company.name} · <a href={`mailto:${company.email}`}>{company.email}</a>{" "}
        · WhatsApp{" "}
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          {company.whatsapp}
        </a>
        . For help using the service, see the{" "}
        <Link href="/voice2fill/support">support page</Link>.
      </p>
    </LegalLayout>
  );
}
