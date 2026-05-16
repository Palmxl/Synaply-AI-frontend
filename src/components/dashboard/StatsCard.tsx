import type { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface Props {
  title: string
  value: string
  icon: LucideIcon
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700 transition-all duration-300">
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-zinc-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="p-3 rounded-2xl bg-zinc-800">
          <Icon size={24} />
        </div>
      </CardContent>
    </Card>
  )
}