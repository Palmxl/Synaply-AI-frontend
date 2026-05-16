import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Card, CardContent } from "@/components/ui/card"

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 6 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 7 },
]

export default function StudyChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Weekly Study Analytics
          </h2>

          <p className="text-zinc-400 text-sm mt-1">
            Your productivity this week
          </p>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#71717a" />

              <YAxis stroke="#71717a" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="hours"
                stroke="#ffffff"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}