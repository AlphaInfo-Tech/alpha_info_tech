import { Smartphone } from "lucide-react";
import RazorpayButton from "@/components/RazorpayButton";
import { voice2Fill } from "@/lib/content";
import { isMobile, normPhone } from "@/lib/phone";

export type PlanAction = "renew" | "upgrade" | "topup";

const paidPlans = voice2Fill.plans.filter((p) => p.key !== "trial" && p.key !== "topup");
const topup = voice2Fill.plans.find((p) => p.key === "topup")!;

function PlanCard({
  plan,
  badge,
  highlight,
}: {
  plan: (typeof voice2Fill.plans)[number];
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card-notch flex flex-col rounded-xl border bg-white p-6 ${
        highlight ? "border-accent-500 shadow-lg" : "border-black/10"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-label text-xs text-brand-600">{plan.name}</span>
        {badge && (
          <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink">
            {badge}
          </span>
        )}
      </div>
      <p className="font-heading mt-3 text-3xl font-bold text-ink">{plan.price}</p>
      <p className="mt-3 text-sm font-medium text-ink">{plan.minutes} voice minutes</p>
      <p className="mt-1 text-sm text-ink-muted">{plan.duration}</p>
      <div className="mt-6 pt-2">
        <RazorpayButton buttonId={plan.razorpayButtonId} planName={plan.name} />
      </div>
    </div>
  );
}

export default function PlansGrid({
  action,
  currentPlan,
  phone,
}: {
  action?: PlanAction;
  currentPlan?: string;
  phone?: string;
}) {
  const mobile = phone ? normPhone(phone) : "";
  const showPhone = isMobile(mobile);
  const currentIndex = paidPlans.findIndex((p) => p.key === currentPlan);

  const renewSection = (
    <section key="renew">
      <h2 className="font-heading text-2xl font-bold text-ink">Renew or upgrade</h2>
      <p className="mt-2 text-sm text-ink-muted">
        30-day plans. If you renew early, the new plan starts when your current
        one ends, so you lose no days.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {paidPlans.map((plan, i) => {
          const isCurrent = plan.key === currentPlan;
          const isUpgrade = action === "upgrade" && currentIndex >= 0 && i > currentIndex;
          return (
            <PlanCard
              key={plan.key}
              plan={plan}
              badge={isCurrent ? "Your plan" : isUpgrade ? "Upgrade" : undefined}
              highlight={isUpgrade || (action === "renew" && isCurrent)}
            />
          );
        })}
      </div>
    </section>
  );

  const topupSection = (
    <section key="topup">
      <h2 className="font-heading text-2xl font-bold text-ink">Top up</h2>
      <p className="mt-2 text-sm text-ink-muted">
        Ran out of minutes before your plan ends? Add 50 more. They last until
        your current plan ends.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <PlanCard plan={topup} highlight={action === "topup"} />
      </div>
    </section>
  );

  return (
    <div className="space-y-16">
      <div className="flex items-start gap-3 rounded-xl border border-accent-500 bg-white p-5">
        <Smartphone size={20} className="mt-0.5 shrink-0 text-brand-600" />
        <p className="text-sm leading-relaxed text-ink">
          At checkout, enter{" "}
          {showPhone ? (
            <>
              your Voice2Fill mobile number{" "}
              <strong className="font-mono text-base">
                {mobile.slice(0, 5)} {mobile.slice(5)}
              </strong>
            </>
          ) : (
            <strong>the mobile number you sign in to Voice2Fill with</strong>
          )}{" "}
          in the <strong>Voice2Fill mobile number</strong> box, so we can add
          the plan to the right account.
        </p>
      </div>
      {action === "topup" ? [topupSection, renewSection] : [renewSection, topupSection]}
    </div>
  );
}
