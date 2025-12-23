import { mockCommunityFeed } from '../data/mockGarage'

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
      <span className="font-semibold text-white/85">{value}</span>
      <span className="text-white/55">{label}</span>
    </span>
  )
}

export function CommunityPage() {
  return (
    <div className="space-y-4">
      <header className="fv-card p-4">
        <p className="text-xs tracking-widest text-white/50">FRANKENVIN</p>
        <h1 className="mt-1 text-xl font-bold">Community</h1>
        <p className="mt-1 text-sm text-white/70">
          Build logs, swap receipts, and questionable decisions.
        </p>
      </header>

      <section className="fv-card p-4">
        <h2 className="text-sm font-semibold">Post (mock)</h2>
        <textarea
          placeholder="What did you break today?"
          className="mt-3 w-full resize-none rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/20"
          rows={3}
        />
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-black/90"
          >
            Post
          </button>
        </div>
      </section>

      <div className="space-y-3">
        {mockCommunityFeed.map((p) => (
          <article key={p.id} className="fv-card p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold">
                  {p.author}{' '}
                  <span className="text-white/50 font-normal">{p.handle}</span>
                </p>
                <p className="text-[11px] text-white/45">{p.time} ago</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                build log
              </span>
            </div>
            <p className="mt-3 text-sm text-white/85">{p.text}</p>

            <div className="mt-3 flex gap-2">
              <StatPill label="likes" value={p.likes} />
              <StatPill label="comments" value={p.comments} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

