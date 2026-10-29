"use client";

import { useSearchParams } from "next/navigation";
import PlansGrid, { type PlanAction } from "./PlansGrid";

const actions: PlanAction[] = ["renew", "upgrade", "topup"];

// Reads ?action=renew|upgrade|topup&plan=<key>&phone=<number> from the
// extension popup's link. The phone is only shown, never sent anywhere.
export default function PlansFromUrl() {
  const params = useSearchParams();
  const action = params.get("action");
  return (
    <PlansGrid
      action={actions.find((a) => a === action)}
      currentPlan={params.get("plan") ?? undefined}
      phone={params.get("phone") ?? undefined}
    />
  );
}
