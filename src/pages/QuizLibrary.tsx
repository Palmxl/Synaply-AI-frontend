import {
  useEffect,
  useState,
} from "react"

import {
  ClipboardCheck,
  ArrowRight,
} from "lucide-react"

import { Link } from "react-router-dom"

import { getQuizzes } from "@/services/quiz.service"

interface Quiz {
  id: number
  title: string
}

export default function QuizLibrary() {
  const [quizzes, setQuizzes] =
    useState<Quiz[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadQuizzes =
      async () => {
        try {
          const data =
            await getQuizzes()

          setQuizzes(data)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

    loadQuizzes()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-zinc-400">
          Loading quizzes...
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">
          Quizzes
        </h1>

        <p className="text-zinc-400 mt-2">
          Review and practice your AI-generated quizzes
        </p>
      </div>

      {/* EMPTY STATE */}
      {quizzes.length === 0 ? (
        <div className="border border-zinc-800 bg-zinc-900 rounded-3xl p-12 text-center">
          <ClipboardCheck
            size={48}
            className="mx-auto text-zinc-500"
          />

          <h2 className="text-2xl font-semibold mt-6">
            No Quizzes Yet
          </h2>

          <p className="text-zinc-400 mt-3">
            Generate quizzes from your study documents
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/quizzes/${quiz.id}`}
              className="
                group
                rounded-3xl
                border border-zinc-800
                bg-zinc-900/60
                backdrop-blur-xl
                p-6
                hover:border-zinc-700
                transition-all
              "
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-zinc-800">
                  <ClipboardCheck size={22} />
                </div>

                <ArrowRight
                  size={18}
                  className="
                    text-zinc-500
                    group-hover:text-white
                    transition
                  "
                />
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold leading-relaxed">
                  {quiz.title}
                </h2>

                <p className="text-zinc-400 mt-3 text-sm">
                  AI-generated practice quiz
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}