import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface Props {
  data: {
    day: string
    activity: number
  }[]
}

export default function ActivityChart({
  data,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Study Activity
        </h2>

        <p className="text-zinc-400 mt-2">
          Your recent AI learning activity
        </p>
      </div>

      <div className="h-[320px] w-full min-w-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="colorActivity"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#ffffff"
                  stopOpacity={0.3}
                />

                <stop
                  offset="95%"
                  stopColor="#ffffff"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
            />

            <XAxis
              dataKey="day"
              stroke="#71717a"
            />

            <YAxis stroke="#71717a" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="activity"
              stroke="#ffffff"
              fillOpacity={1}
              fill="url(#colorActivity)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}