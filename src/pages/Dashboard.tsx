import { useEffect, useState } from "react"

import {
  Brain,
  FileText,
  MessageSquare,
  ClipboardCheck,
  Sparkles,
} from "lucide-react"

import { getAnalytics } from "@/services/dashboard.service"

import type {
  DashboardAnalytics,
} from "@/types/dashboard"

import ActivityChart from "@/components/dashboard/ActivityChart"

export default function Dashboard() {
  const [analytics, setAnalytics] =
    useState<DashboardAnalytics | null>(
      null
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadAnalytics =
      async () => {
        try {
          const data =
            await getAnalytics()

          setAnalytics(data)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

    loadAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-zinc-400 text-lg">
          Loading dashboard...
        </div>
      </div>
    )
  }

  if (!analytics) {
    return null
  }

  const stats = [
    {
      title: "Documents",
      value:
        analytics.total_documents,
      icon: FileText,
    },
    {
      title: "AI Chats",
      value:
        analytics.total_chat_messages,
      icon: MessageSquare,
    },
    {
      title: "Flashcards",
      value:
        analytics.total_flashcards,
      icon: Brain,
    },
    {
      title: "Quizzes",
      value:
        analytics.total_quizzes,
      icon: ClipboardCheck,
    },
  ]

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <Sparkles size={16} />

            Synaply AI Workspace
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Welcome back 👋
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Your AI-powered learning platform is actively tracking
            your documents, quizzes, flashcards, and study activity.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="
                rounded-[28px]
                border border-zinc-800
                bg-zinc-900/60
                backdrop-blur-xl
                p-6
                hover:border-zinc-700
                transition-all
              "
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-zinc-800">
                  <Icon size={22} />
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-5xl font-bold tracking-tight">
                  {item.value}
                </h2>

                <p className="text-zinc-400 mt-3">
                  {item.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* CHART + ACTIVITY */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <ActivityChart
            data={
              analytics.activity_chart
            }
          />
        </div>

        {/* RECENT ACTIVITY */}
        <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8">
          <div>
            <h2 className="text-2xl font-bold">
              Recent Activity
            </h2>

            <p className="text-zinc-400 mt-2">
              Live AI learning events
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {analytics.recent_activity
              .length === 0 ? (
              <div className="text-zinc-500">
                No activity yet
              </div>
            ) : (
              analytics.recent_activity.map(
                (
                  activity,
                  index
                ) => (
                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-zinc-800
                      bg-zinc-950/50
                      p-5
                    "
                  >
                    <p className="text-zinc-200 leading-relaxed">
                      {
                        activity.description
                      }
                    </p>

                    <p className="text-zinc-500 text-sm mt-3">
                      {new Date(
                        activity.created_at
                      ).toLocaleString()}
                    </p>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}