import { useMemo, useState } from 'react'
import { mockCar } from '../data/mockGarage'
import { SectionCard } from '../components/SectionCard'
import { TagChips } from '../components/TagChips'
import { Timeline } from '../components/Timeline'

function Kvp({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 py-2 last:border-b-0">
      <span className="text-xs text-white/55">{label}</span>
      <span className="text-sm text-white/90 text-right">{value}</span>
    </div>
  )
}

export function PassportPage() {
  const car = mockCar
  const [activeImg, setActiveImg] = useState(0)

  const hero = useMemo(() => car.gallery[activeImg] ?? car.gallery[0], [car, activeImg])

  return (
    <div className="space-y-4">
      <header className="fv-card overflow-hidden">
        <div className="relative aspect-[16/10] bg-black">
          <img
            src={hero.src}
            alt={hero.alt}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs tracking-widest text-white/60">FRANKENVIN PASSPORT</p>
            <h1 className="mt-1 text-xl font-bold">
              {car.year} {car.make} {car.model}{' '}
              <span className="text-white/60">{car.trim}</span>
            </h1>
            <p className="mt-1 text-sm text-white/70">{car.location}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {car.gallery.map((g, idx) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveImg(idx)}
                className={`h-14 w-20 flex-none overflow-hidden rounded-xl border ${
                  idx === activeImg ? 'border-white/40' : 'border-white/10'
                } bg-black/40`}
              >
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <p className="mt-2 text-sm text-white/80">{car.summary}</p>
          <div className="mt-3">
            <TagChips tags={car.buildTags} />
          </div>
        </div>
      </header>

      <SectionCard title="Identity" subtitle="Shell + provenance">
        <Kvp label="VIN" value={`${car.vin} (fake)`} />
        <Kvp label="Passport ID" value={car.id} />
      </SectionCard>

      <div className="space-y-3">
        {car.sections.map((s) => (
          <SectionCard key={s.id} title={s.title} subtitle={s.subtitle}>
            {s.items.map((it) => (
              <Kvp key={it.label} label={it.label} value={it.value} />
            ))}
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Service history" subtitle="Timeline (mock)">
        <Timeline events={car.serviceHistory} />
      </SectionCard>
    </div>
  )
}

