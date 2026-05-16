import { Card, CardContent } from "@/components/ui/card"

const activities = [
  "Uploaded Calculus.pdf",
  "Generated 24 flashcards",
  "Completed AI Quiz",
  "Asked AI about derivatives",
]

export default function ActivityTimeline() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-white" />

              <p className="text-zinc-300">
                {activity}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}