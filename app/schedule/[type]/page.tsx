import { Header } from "@/components/header"
import { ScheduleForm } from "@/components/schedule-form"

interface SchedulePageProps {
  params: {
    type: string // This will be 'training', 'consulting', or 'visit'
  }
}

export default function SchedulePage({ params }: SchedulePageProps) {
  // Capitalize the type for display in the header
  const pageTitle = params.type
    ? params.type.charAt(0).toUpperCase() + params.type.slice(1).replace(/-/g, " ")
    : "Schedule"

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScheduleForm type={params.type} pageTitle={pageTitle} />
    </div>
  )
}
