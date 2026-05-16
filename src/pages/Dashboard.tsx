import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Documents",
    value: "24",
  },
  {
    title: "Flashcards",
    value: "182",
  },
  {
    title: "Quizzes",
    value: "12",
  },
  {
    title: "Study Streak",
    value: "14 days",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
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
          <Card
            key={stat.title}
            className="bg-zinc-900 border-zinc-800 text-white"
          >
            <CardContent className="p-6">
              <p className="text-zinc-400 text-sm">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}