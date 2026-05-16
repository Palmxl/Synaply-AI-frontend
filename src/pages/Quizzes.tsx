import { useEffect, useState } from "react"

import QuizPlayer from "@/components/quizzes/QuizPlayer"

import { getQuiz } from "@/services/quiz.service"

import type { QuizQuestion } from "@/types/quiz"

export default function Quizzes() {
  const [questions, setQuestions] =
    useState<QuizQuestion[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const data = await getQuiz(1)

        setQuestions(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadQuiz()
  }, [])

  if (loading) {
    return (
      <div>Loading quiz...</div>
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