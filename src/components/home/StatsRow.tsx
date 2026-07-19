import { stats } from "@/lib/content";

export default function StatsRow({ dark = false }: { dark?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:flex sm:flex-nowrap sm:divide-x sm:divide-black/10">
      {stats.map((stat) => (
        <div key={stat.label} className="sm:max-w-[9rem] sm:pl-6 sm:first:pl-0">
          <dt
            className={`font-heading text-3xl font-bold sm:text-4xl ${
              dark ? "text-brand-400" : "text-brand-600"
            }`}
          >
            {stat.value}
          </dt>
          <dd
            className={`font-label mt-1 text-[11px] leading-snug ${
              dark ? "text-slate-400" : "text-ink-muted"
            }`}
          >
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
