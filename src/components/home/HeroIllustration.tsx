import { IconChartUp, IconInvoice, IconBell } from "@/components/icons";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-400/30 to-brand-500/20 blur-3xl"
        aria-hidden
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="text-ink"
        />
        <path
          d="M120 260 L165 210 M235 190 L280 140"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          className="text-ink"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-black/10 bg-white p-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="font-label text-[10px] text-ink-muted">Overview</span>
          <IconChartUp size={20} className="text-brand-600" />
        </div>
        <div className="mt-4 flex items-end gap-1.5">
          {[40, 65, 50, 80, 60, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-brand-300"
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
        <p className="font-heading mt-3 text-2xl font-bold text-ink">2.5X</p>
        <p className="font-label text-[10px] text-ink-muted">Growth</p>
      </div>

      <div className="absolute left-2 top-6 w-40 rounded-xl border border-black/10 bg-white p-3.5 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface">
            <IconInvoice size={18} />
          </span>
          <div className="flex-1">
            <div className="h-1.5 w-full rounded-full bg-surface-dim" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-surface-dim" />
          </div>
        </div>
        <p className="font-label mt-3 text-[10px] text-accent-600">Invoice Sent</p>
      </div>

      <div className="absolute bottom-8 right-2 w-36 rounded-xl border border-black/10 bg-white p-3.5 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-white">
            <IconBell size={16} />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Reminder</p>
            <p className="font-label text-[9px] text-ink-muted">Follow-up due</p>
          </div>
        </div>
      </div>
    </div>
  );
}
