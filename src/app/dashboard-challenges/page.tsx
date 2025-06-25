import ProtectedRoute from '@/components/ProtectedRoute'
import DashboardChallenges from '@/components/dashboard-challenges'

export default function Page() {
  return (
    <ProtectedRoute>
      <DashboardChallenges />
    </ProtectedRoute>
  )
}
