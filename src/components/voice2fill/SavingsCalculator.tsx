"use client";

import { useState } from "react";
import { voice2Fill } from "@/lib/content";

const pro = voice2Fill.plans.find((p) => p.key === "pro")!;
const proPrice = pro.amountPaise / 100;

const inputs = [
  { key: "perDay", label: "Applications a day", unit: "" },
  { key: "minutesToday", label: "Minutes per form today", unit: "min" },
  { key: "minutesVoice", label: "Minutes per form with Voice2Fill", unit: "min" },
  { key: "workingDays", label: "Working days a month", unit: "" },
  { key: "fee", label: "Your fee per application", unit: "₹" },
] as const;

type Key = (typeof inputs)[number]["key"];

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function SavingsCalculator() {
  const [values, setValues] = useState<Record<Key, string>>({
    ...voice2Fill.calculator.defaults,
  });

  const num = (key: Key) => Math.max(0, Number(values[key]) || 0);
  const minutesSaved = Math.max(0, num("minutesToday") - num("minutesVoice"));
  const minutesFreed = num("perDay") * minutesSaved;
  const hoursFreed = minutesFreed / 60;
  const extraPerDay =
    num("minutesVoice") > 0 ? Math.floor(minutesFreed / num("minutesVoice")) : 0;
  const fee = num("fee");
  const extraPerMonth = extraPerDay * num("workingDays") * fee;

  return (
    <div className="rounded-xl border border-black/10 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {inputs.map((input) => (
          <label key={input.key} className="block text-sm font-medium text-ink">
            {input.label}
            <span className="mt-2 flex items-center rounded-lg border border-black/15 bg-white focus-within:border-v2f-blue">
              {input.unit === "₹" && <span className="pl-3 text-ink-muted">₹</span>}
              <input
                type="number"
                inputMode="decimal"
                min="0"
                value={values[input.key]}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [input.key]: e.target.value }))
                }
                placeholder={input.key === "fee" ? "Enter your fee" : undefined}
                className="w-full bg-transparent px-3 py-2.5 text-base text-ink outline-none"
              />
              {input.unit === "min" && <span className="pr-3 text-ink-muted">min</span>}
            </span>
          </label>
        ))}
      </div>

      <dl aria-live="polite" className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-v2f-page p-4">
          <dt className="text-sm text-ink-muted">Time freed each day</dt>
          <dd className="font-heading mt-1 text-2xl font-bold text-ink">
            {hoursFreed.toFixed(1)} hours
          </dd>
        </div>
        <div className="rounded-lg bg-v2f-page p-4">
          <dt className="text-sm text-ink-muted">Extra applications that time allows</dt>
          <dd className="font-heading mt-1 text-2xl font-bold text-ink">
            {extraPerDay} a day
          </dd>
        </div>
        <div className="rounded-lg bg-v2f-ok p-4 sm:col-span-2">
          <dt className="text-sm text-v2f-ok-ink">Extra income a month, if you fill that time</dt>
          <dd className="font-heading mt-1 text-2xl font-bold text-v2f-ok-ink">
            {fee > 0 ? `${inr(extraPerMonth)} a month` : "Enter your fee above"}
          </dd>
          {fee > 0 && (
            <p className="mt-1 text-sm text-v2f-ok-ink">
              The Pro plan ({pro.price}) pays for itself after{" "}
              {Math.ceil(proPrice / fee)} extra applications.
            </p>
          )}
        </div>
      </dl>
      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        {voice2Fill.calculator.note}
      </p>
    </div>
  );
}
