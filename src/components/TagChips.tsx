import type { BuildTag } from '../data/mockGarage'

const label: Record<BuildTag, string> = {
  drift: 'Drift',
  rally: 'Rally',
  sleeper: 'Sleeper',
  subtle: 'Subtle',
}

export function TagChips({ tags }: { tags: BuildTag[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="fv-chip">
          {label[t]}
        </span>
      ))}
    </div>
  )
}

