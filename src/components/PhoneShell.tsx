import type { PropsWithChildren } from 'react'
import { BottomTabs } from './BottomTabs'

export function PhoneShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_30%_-10%,rgba(255,74,74,0.18),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(80,200,255,0.12),transparent_55%)]">
      <div className="mx-auto min-h-screen max-w-md px-4 pb-24 pt-4">
        {children}
      </div>
      <BottomTabs />
    </div>
  )
}
