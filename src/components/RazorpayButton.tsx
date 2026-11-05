"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/content";

const whatsappNumber = company.whatsapp.replace(/\D/g, "");

// Embeds a Razorpay Payment Button. React doesn't run <script> tags it
// renders, so the script is added by hand; it draws the button inside the form.
const fallbackStyles = {
  dark: "bg-ink text-white hover:bg-black",
  blue: "bg-v2f-blue text-white hover:bg-v2f-blue/90",
  outline: "border border-black/10 bg-white text-ink hover:bg-surface",
};

export default function RazorpayButton({
  buttonId,
  planName,
  label = "Buy on WhatsApp",
  variant = "dark",
}: {
  buttonId: string;
  planName: string;
  /** Text of the WhatsApp button shown when there is no Razorpay button. */
  label?: string;
  variant?: keyof typeof fallbackStyles;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    // The script draws the button next to itself, so add it only once: React
    // runs effects twice in development, and removing a script that is still
    // loading doesn't stop it from running.
    if (!form || !buttonId || form.querySelector("script")) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.dataset.payment_button_id = buttonId;
    script.async = true;
    form.appendChild(script);
  }, [buttonId]);

  if (!buttonId) {
    // Until the Razorpay button exists, take the order on WhatsApp instead.
    const text = encodeURIComponent(`Hi, I'd like to buy the Voice2Fill ${planName} plan.`);
    return (
      <a
        href={`https://wa.me/${whatsappNumber}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${fallbackStyles[variant]}`}
      >
        <MessageCircle size={16} />
        {label}
      </a>
    );
  }

  return <form ref={formRef} className="min-h-11" />;
}
