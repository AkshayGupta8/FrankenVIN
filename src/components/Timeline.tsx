import type { ServiceEvent } from '../data/mockGarage'

function fmtMiles(miles: number) {
  return miles.toLocaleString('en-US')
}

export function Timeline({ events }: { events: ServiceEvent[] }) {
  return (
    <ol className="relative space-y-4 border-l border-white/10 pl-4">
      {events.map((e) => (
        <li key={e.id} className="relative">
          <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-[rgb(var(--accent))] shadow-[0_0_0_3px_rgba(255,74,74,0.15)]" />
          <div className="fv-card p-3">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold">{e.title}</h3>
              <span className="text-[11px] text-white/55">{e.date}</span>
            </div>
            <p className="mt-1 text-[12px] text-white/70">
              {fmtMiles(e.mileage)} mi
            </p>
            <p className="mt-2 text-sm text-white/80">{e.notes}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

