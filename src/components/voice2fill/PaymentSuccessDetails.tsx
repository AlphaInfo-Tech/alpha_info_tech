"use client";

import { useSearchParams } from "next/navigation";
import { voice2Fill } from "@/lib/content";

// Each Razorpay button redirects to /voice2fill/payment-success?plan=<key>.
// razorpay_payment_id is shown if Razorpay adds it, but is not relied on.
export default function PaymentSuccessDetails() {
  const params = useSearchParams();
  const plan = voice2Fill.plans.find((p) => p.key === params.get("plan"));
  const paymentId = params.get("razorpay_payment_id");

  return (
    <>
      {plan && (
        <p className="mt-4 text-lg font-semibold text-white">
          {plan.key === "topup"
            ? `${plan.minutes} extra voice minutes (${plan.price})`
            : `${plan.name} plan: ${plan.minutes} voice minutes for ${plan.duration} (${plan.price})`}
        </p>
      )}
      {paymentId && (
        <p className="mt-3 text-sm text-slate-400">
          Payment ID: <span className="font-mono text-white">{paymentId}</span>
        </p>
      )}
    </>
  );
}
