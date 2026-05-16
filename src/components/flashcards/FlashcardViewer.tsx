import { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { Flashcard } from "@/types/flashcard"

interface Props {
  flashcards: Flashcard[]
}

export default function FlashcardViewer({
  flashcards,
}: Props) {
  const [currentIndex, setCurrentIndex] =
    useState(0)

  const [flipped, setFlipped] =
    useState(false)

  const currentCard =
    flashcards[currentIndex]

  const nextCard = () => {
    setFlipped(false)

    setCurrentIndex((prev) =>
      prev === flashcards.length - 1
        ? 0
        : prev + 1
    )
  }

  const previousCard = () => {
    setFlipped(false)

    setCurrentIndex((prev) =>
      prev === 0
        ? flashcards.length - 1
        : prev - 1
    )
  }

  if (!currentCard) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-zinc-400 text-sm">
        <span>
          Card {currentIndex + 1} of{" "}
          {flashcards.length}
        </span>

        <span>
          Click card to flip
        </span>
      </div>

      <div
        onClick={() =>
          setFlipped(!flipped)
        }
        className="
          min-h-[350px]
          rounded-3xl
          border border-zinc-800
          bg-zinc-900
          p-10
          flex items-center justify-center
          text-center
          cursor-pointer
          transition-all duration-300
          hover:border-zinc-700
        "
      >
        <div>
          <p className="text-zinc-500 text-sm mb-4">
            {flipped
              ? "Answer"
              : "Question"}
          </p>

          <h2 className="text-2xl font-semibold leading-relaxed">
            {flipped
              ? currentCard.answer
              : currentCard.question}
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={previousCard}
        >
          <ChevronLeft />

          Previous
        </Button>

        <Button onClick={nextCard}>
          Next

          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}