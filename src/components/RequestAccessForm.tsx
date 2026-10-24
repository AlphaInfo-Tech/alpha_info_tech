"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useRef, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Lang = "en" | "ta";
type AlertKey = "errDup" | "errNet" | "errServer";
type FieldName = "full_name" | "phone" | "email" | "user_type" | "consent";

const T = {
  en: {
    title: "Request access to Voice2Fill",
    sub: "Accounts are created by our team. Tell us who you are and we'll set up your sign-in.",
    name: "Full name",
    phone: "Mobile (WhatsApp) number",
    phoneHint: "You'll sign in to the extension with this number, and we'll message you on WhatsApp.",
    email: "Email",
    optional: "(optional)",
    type: "Who will use it?",
    typeCentre: "Service centre / CSC operator",
    typeOffice: "Office or business staff",
    typeIndividual: "For my own forms",
    typeOther: "Other",
    org: "Centre or organisation name",
    district: "District",
    volume: "Forms per day",
    choose: "Choose…",
    msg: "Anything we should know?",
    consent: "I agree that my details are used to set up my account and contact me.",
    privacy: "Privacy policy",
    submit: "Request access",
    sending: "Sending…",
    errName: "Please enter your name.",
    errPhone: "Enter a 10-digit mobile (WhatsApp) number.",
    errEmail: "This email doesn't look right.",
    errType: "Please choose one.",
    errConsent: "Please agree to the privacy policy to continue.",
    errDup: "We already have a request from this number. We'll contact you soon.",
    errNet: "Couldn't send your request. Check your internet connection and try again.",
    errServer: "Something went wrong on our side. Please try again in a few minutes.",
    doneTitle: "Request received",
    doneBody:
      "We'll contact you on your mobile (WhatsApp) number within 2 working days with your sign-in details.",
  },
  ta: {
    title: "Voice2Fill பயன்படுத்த அனுமதி கோருங்கள்",
    sub: "கணக்குகளை எங்கள் குழு உருவாக்குகிறது. உங்கள் விவரங்களைத் தாருங்கள்; உள்நுழைவை அமைத்துத் தருகிறோம்.",
    name: "முழுப் பெயர்",
    phone: "கைபேசி (WhatsApp) எண்",
    phoneHint: "இந்த எண்ணைக் கொண்டே extension-இல் உள்நுழைவீர்கள்; WhatsApp-இல் தொடர்புகொள்வோம்.",
    email: "மின்னஞ்சல்",
    optional: "(விருப்பம்)",
    type: "யார் பயன்படுத்துவார்கள்?",
    typeCentre: "சேவை மையம் / CSC இயக்குநர்",
    typeOffice: "அலுவலக / வணிக ஊழியர்",
    typeIndividual: "என் சொந்தப் படிவங்களுக்கு",
    typeOther: "மற்றவை",
    org: "மையம் அல்லது நிறுவனத்தின் பெயர்",
    district: "மாவட்டம்",
    volume: "நாளொன்றுக்கு படிவங்கள்",
    choose: "தேர்வு செய்க…",
    msg: "வேறு ஏதேனும் தெரிவிக்க வேண்டுமா?",
    consent: "என் விவரங்களைக் கணக்கு உருவாக்கவும் என்னைத் தொடர்புகொள்ளவும் பயன்படுத்த ஒப்புக்கொள்கிறேன்.",
    privacy: "தனியுரிமைக் கொள்கை",
    submit: "அனுமதி கோருக",
    sending: "அனுப்புகிறது…",
    errName: "உங்கள் பெயரை உள்ளிடவும்.",
    errPhone: "10 இலக்க கைபேசி (WhatsApp) எண்ணை உள்ளிடவும்.",
    errEmail: "மின்னஞ்சல் முகவரி சரியாக இல்லை.",
    errType: "ஒன்றைத் தேர்வு செய்யவும்.",
    errConsent: "தொடர, தனியுரிமைக் கொள்கையை ஏற்கவும்.",
    errDup: "இந்த எண்ணிலிருந்து ஏற்கனவே கோரிக்கை வந்துள்ளது. விரைவில் தொடர்புகொள்வோம்.",
    errNet: "கோரிக்கையை அனுப்ப முடியவில்லை. இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயலவும்.",
    errServer: "எங்கள் பக்கத்தில் சிக்கல். சில நிமிடங்கள் கழித்து மீண்டும் முயலவும்.",
    doneTitle: "கோரிக்கை பெறப்பட்டது",
    doneBody:
      "2 வேலை நாட்களுக்குள் உங்கள் கைபேசி (WhatsApp) எண்ணில் தொடர்புகொண்டு உள்நுழைவு விவரங்களைத் தருவோம்.",
  },
};

const userTypes = [
  { value: "service_centre", key: "typeCentre" },
  { value: "office", key: "typeOffice" },
  { value: "individual", key: "typeIndividual" },
  { value: "other", key: "typeOther" },
] as const;

const fieldBase =
  "block w-full border bg-white px-4 py-2.5 text-base text-ink outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
const inputClass = `mt-2 rounded-lg ${fieldBase}`;

function borderFor(invalid?: boolean) {
  return invalid ? "border-red-500" : "border-black/10";
}

function normPhone(v: string) {
  let d = v.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

function Label({
  htmlFor,
  children,
  required,
  optional,
}: {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
  optional?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
      {children} {required && <span className="text-red-600">*</span>}
      {optional && <span className="font-normal text-ink-muted">{optional}</span>}
    </label>
  );
}

function FieldError({ show, children }: { show?: boolean; children: ReactNode }) {
  if (!show) return null;
  return <p className="mt-1.5 text-sm text-red-600">{children}</p>;
}

export default function RequestAccessForm() {
  const [lang, setLang] = useState<Lang>("en");
  const [errors, setErrors] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [alertKey, setAlertKey] = useState<AlertKey | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const t = T[lang];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAlertKey(null);

    const fd = new FormData(event.currentTarget);
    const text = (k: string) => (fd.get(k) ?? "").toString().trim();

    if (text("website")) {
      setStatus("done");
      return;
    }

    const data = {
      full_name: text("full_name"),
      phone: normPhone(text("phone")),
      email: text("email"),
      organisation: text("organisation"),
      user_type: text("user_type"),
      district: text("district"),
      forms_per_day: text("forms_per_day"),
      message: text("message"),
      ui_language: lang,
      consent: fd.get("consent") === "on",
    };

    const nextErrors = {
      full_name: data.full_name.length < 2,
      phone: !/^[6-9]\d{9}$/.test(data.phone),
      email: !!data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email),
      user_type: !data.user_type,
      consent: !data.consent,
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      const first = Object.keys(nextErrors).find((k) => nextErrors[k as FieldName]);
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("done");
        return;
      }
      setAlertKey(res.status === 409 ? "errDup" : "errServer");
    } catch {
      setAlertKey("errNet");
    }
    setStatus("idle");
  }

  function clearError(name: string) {
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: false }));
  }

  return (
    <div lang={lang}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-ink">{t.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.sub}</p>
        </div>
        <div
          role="group"
          aria-label="Language"
          className="inline-flex shrink-0 rounded-full border border-black/10 bg-white p-1"
        >
          {(
            [
              ["ta", "தமிழ்"],
              ["en", "English"],
            ] as const
          ).map(([code, label]) => (
            <button
              key={code}
              type="button"
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                lang === code ? "bg-ink text-white" : "text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {status === "done" ? (
        <div role="status" className="mt-8 flex flex-col items-center rounded-xl border border-black/10 bg-white p-10 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-white">
            <CheckCircle2 size={24} />
          </span>
          <h3 className="font-heading mt-4 text-lg font-bold text-ink">{t.doneTitle}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">{t.doneBody}</p>
        </div>
      ) : (
        <form
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
          onInput={(e) => clearError((e.target as HTMLInputElement).name)}
          className="mt-8 space-y-5"
        >
          {/* Honeypot field, hidden from real users */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <Label htmlFor="ra-name" required>
              {t.name}
            </Label>
            <input
              id="ra-name"
              name="full_name"
              type="text"
              autoComplete="name"
              maxLength={100}
              aria-invalid={errors.full_name}
              className={`${inputClass} ${borderFor(errors.full_name)}`}
            />
            <FieldError show={errors.full_name}>{t.errName}</FieldError>
          </div>

          <div>
            <Label htmlFor="ra-phone" required>
              {t.phone}
            </Label>
            <div className="mt-2 flex">
              <span className="flex items-center rounded-l-lg border border-r-0 border-black/10 bg-surface px-4 text-base text-ink-muted">
                +91
              </span>
              <input
                id="ra-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={17}
                placeholder="98765 43210"
                aria-invalid={errors.phone}
                aria-describedby="ra-phone-hint"
                className={`rounded-r-lg ${fieldBase} ${borderFor(errors.phone)}`}
              />
            </div>
            <p id="ra-phone-hint" className="mt-1.5 text-sm text-ink-muted">
              {t.phoneHint}
            </p>
            <FieldError show={errors.phone}>{t.errPhone}</FieldError>
          </div>

          <div>
            <Label htmlFor="ra-email" optional={t.optional}>
              {t.email}
            </Label>
            <input
              id="ra-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              aria-invalid={errors.email}
              className={`${inputClass} ${borderFor(errors.email)}`}
            />
            <FieldError show={errors.email}>{t.errEmail}</FieldError>
          </div>

          <fieldset>
            <legend className="block text-sm font-medium text-ink">
              {t.type} <span className="text-red-600">*</span>
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {userTypes.map((type) => (
                <label
                  key={type.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border bg-white px-4 py-3 text-sm text-ink has-checked:border-brand-500 has-checked:bg-brand-50 ${borderFor(
                    errors.user_type
                  )}`}
                >
                  <input
                    type="radio"
                    name="user_type"
                    value={type.value}
                    className="mt-0.5 accent-brand-600"
                  />
                  {t[type.key]}
                </label>
              ))}
            </div>
            <FieldError show={errors.user_type}>{t.errType}</FieldError>
          </fieldset>

          <div>
            <Label htmlFor="ra-org" optional={t.optional}>
              {t.org}
            </Label>
            <input
              id="ra-org"
              name="organisation"
              type="text"
              autoComplete="organization"
              maxLength={150}
              className={`${inputClass} ${borderFor()}`}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="ra-district" optional={t.optional}>
                {t.district}
              </Label>
              <input
                id="ra-district"
                name="district"
                type="text"
                maxLength={80}
                placeholder="Salem"
                className={`${inputClass} ${borderFor()}`}
              />
            </div>
            <div>
              <Label htmlFor="ra-volume" optional={t.optional}>
                {t.volume}
              </Label>
              <select
                id="ra-volume"
                name="forms_per_day"
                defaultValue=""
                className={`${inputClass} ${borderFor()}`}
              >
                <option value="">{t.choose}</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51+">51+</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="ra-msg" optional={t.optional}>
              {t.msg}
            </Label>
            <textarea
              id="ra-msg"
              name="message"
              maxLength={1000}
              rows={4}
              className={`${inputClass} ${borderFor()}`}
            />
          </div>

          <div>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
              <input
                name="consent"
                type="checkbox"
                aria-invalid={errors.consent}
                className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-brand-600"
              />
              <span>
                {t.consent}{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-brand-600 underline underline-offset-2"
                >
                  {t.privacy}
                </Link>
              </span>
            </label>
            <FieldError show={errors.consent}>{t.errConsent}</FieldError>
          </div>

          {alertKey && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              {t[alertKey]}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-black disabled:cursor-wait disabled:opacity-70"
          >
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            {status === "loading" ? t.sending : t.submit}
          </button>
        </form>
      )}
    </div>
  );
}
