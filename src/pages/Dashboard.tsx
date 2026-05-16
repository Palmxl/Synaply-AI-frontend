import {
  FileText,
  Brain,
  ClipboardCheck,
  Flame,
} from "lucide-react"

import StatsCard from "@/components/dashboard/StatsCard"
import StudyChart from "@/components/dashboard/StudyChart"
import ActivityTimeline from "@/components/dashboard/ActivityTimeline"

const stats = [
  {
    title: "Documents",
    value: "24",
    icon: FileText,
  },
  {
    title: "Flashcards",
    value: "182",
    icon: Brain,
  },
  {
    title: "Quizzes",
    value: "12",
    icon: ClipboardCheck,
  },
  {
    title: "Study Streak",
    value: "14 days",
    icon: Flame,
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome back to Synaply AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <StudyChart />
        </div>

        <ActivityTimeline />
      </div>
    </div>
  )
}