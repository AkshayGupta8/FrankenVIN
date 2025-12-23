import { Link } from 'react-router-dom'
import { mockGarage } from '../data/mockGarage'

export function GaragePage() {
  return (
    <div className="space-y-4">
      <header className="fv-card p-4">
        <p className="text-xs tracking-widest text-white/50">FRANKENVIN</p>
        <h1 className="mt-1 text-xl font-bold">Garage</h1>
        <p className="mt-1 text-sm text-white/70">
          Your builds, passports, and swap stories.
        </p>
      </header>

      <div className="space-y-3">
        {mockGarage.map((c) => (
          <article key={c.id} className="fv-card overflow-hidden">
            <div className="aspect-[16/9] w-full bg-black">
              <img
                src={c.gallery[0]?.src}
                alt={c.gallery[0]?.alt}
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold">
                    {c.year} {c.make} {c.model}{' '}
                    <span className="text-white/60">{c.trim}</span>
                  </h2>
                  <p className="mt-0.5 text-sm text-white/70">{c.location}</p>
                </div>
                <Link
                  to="/passport"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/10"
                >
                  Open passport
                </Link>
              </div>
              <p className="mt-3 text-sm text-white/75">{c.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

