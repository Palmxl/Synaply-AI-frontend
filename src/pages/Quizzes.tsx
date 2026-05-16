import {
  useEffect,
  useState,
} from "react"

import {
  useParams,
} from "react-router-dom"

import QuizPlayer from "@/components/quizzes/QuizPlayer"

import { getQuiz } from "@/services/quiz.service"

import type {
  QuizQuestion,
} from "@/types/quiz"

export default function Quizzes() {
  const params = useParams()

  const quizId = Number(
    params.quizId
  )

  const [questions, setQuestions] =
    useState<QuizQuestion[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadQuiz =
      async () => {
        try {
          if (!quizId) {
            setLoading(false)

            return
          }

          const data =
            await getQuiz(quizId)

          setQuestions(data)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

    loadQuiz()
  }, [quizId])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        Loading quiz...
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          AI Quiz
        </h1>

        <p className="text-zinc-400 mt-2">
          Test your knowledge with AI-generated quizzes
        </p>
      </div>

      {questions.length === 0 ? (
        <div className="border border-zinc-800 bg-zinc-900 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-semibold">
            No Quiz Available
          </h2>

          <p className="text-zinc-400 mt-3">
            Generate a quiz from your documents
          </p>
        </div>
      ) : (
        <QuizPlayer
          questions={questions}
        />
      )}
    </div>
  )
}