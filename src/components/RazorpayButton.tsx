"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/content";

const whatsappNumber = company.whatsapp.replace(/\D/g, "");

// Embeds a Razorpay Payment Button. React doesn't run <script> tags it
// renders, so the script is added by hand; it draws the button inside the form.
export default function RazorpayButton({
  buttonId,
  planName,
}: {
  buttonId: string;
  planName: string;
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
      >
        <MessageCircle size={16} />
        Buy on WhatsApp
      </a>
    );
  }

  return <form ref={formRef} className="min-h-11" />;
}
