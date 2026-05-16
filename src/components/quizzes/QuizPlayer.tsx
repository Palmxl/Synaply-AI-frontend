import { useState } from "react"

import { Button } from "@/components/ui/button"

import type { QuizQuestion } from "@/types/quiz"

interface Props {
  questions: QuizQuestion[]
}

export default function QuizPlayer({
  questions,
}: Props) {
  const [currentIndex, setCurrentIndex] =
    useState(0)

  const [score, setScore] =
    useState(0)

  const [selected, setSelected] =
    useState("")

  const [finished, setFinished] =
    useState(false)

  const currentQuestion =
    questions[currentIndex]

  const handleAnswer = (
    option: string
  ) => {
    setSelected(option)
  }

  const handleNext = () => {
    if (
      selected ===
      currentQuestion.correct_answer
    ) {
      setScore((prev) => prev + 1)
    }

    setSelected("")

    if (
      currentIndex ===
      questions.length - 1
    ) {
      setFinished(true)

      return
    }

    setCurrentIndex((prev) => prev + 1)
  }

  if (finished) {
    return (
      <div className="border border-zinc-800 bg-zinc-900 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-bold">
          Quiz Completed 🎉
        </h2>

        <p className="text-zinc-400 mt-4 text-lg">
          Your Score
        </p>

        <div className="text-6xl font-bold mt-6">
          {score}/{questions.length}
        </div>
      </div>
    )
  }

  const options = [
    {
      key: "A",
      value: currentQuestion.option_a,
    },
    {
      key: "B",
      value: currentQuestion.option_b,
    },
    {
      key: "C",
      value: currentQuestion.option_c,
    },
    {
      key: "D",
      value: currentQuestion.option_d,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span>
          Question {currentIndex + 1} of{" "}
          {questions.length}
        </span>

        <span>
          Score: {score}
        </span>
      </div>

      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${
              ((currentIndex + 1) /
                questions.length) *
              100
            }%`,
          }}
        />
      </div>

      <div className="border border-zinc-800 bg-zinc-900 rounded-3xl p-10">
        <h2 className="text-2xl font-semibold leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="mt-8 space-y-4">
          {options.map((option) => (
            <button
              key={option.key}
              onClick={() =>
                handleAnswer(option.key)
              }
              className={`
                w-full text-left p-5 rounded-2xl border transition-all
                ${
                  selected === option.key
                    ? "border-white bg-zinc-800"
                    : "border-zinc-800 hover:border-zinc-700"
                }
              `}
            >
              <span className="font-semibold mr-3">
                {option.key}.
              </span>

              {option.value}
            </button>
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={!selected}
          className="w-full mt-8"
        >
          {currentIndex ===
          questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </Button>
      </div>
    </div>
  )
}