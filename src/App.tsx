import { Navigate, Route, Routes } from 'react-router-dom'
import { PhoneShell } from './components/PhoneShell'
import { PassportPage } from './pages/PassportPage'
import { CommunityPage } from './pages/CommunityPage'
import { GaragePage } from './pages/GaragePage'

export default function App() {
  return (
    <PhoneShell>
      <Routes>
        <Route path="/" element={<Navigate to="/passport" replace />} />
        <Route path="/passport" element={<PassportPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/garage" element={<GaragePage />} />
        <Route path="*" element={<Navigate to="/passport" replace />} />
      </Routes>
    </PhoneShell>
  )
}
