import { useEffect, useState } from "react"

import FlashcardViewer from "@/components/flashcards/FlashcardViewer"

import { getFlashcards } from "@/services/flashcard.service"

import type { Flashcard } from "@/types/flashcard"

export default function Flashcards() {
  const [flashcards, setFlashcards] =
    useState<Flashcard[]>([])

  const [loading, setLoading] =
    useState(true)

  const loadFlashcards = async () => {
    try {
      const data =
        await getFlashcards()

      setFlashcards(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFlashcards()
  }, [])

  if (loading) {
    return (
      <div>
        Loading flashcards...
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Flashcards
        </h1>

        <p className="text-zinc-400 mt-2">
          Study smarter with AI-generated flashcards
        </p>
      </div>

      {flashcards.length === 0 ? (
        <div className="border border-zinc-800 rounded-3xl p-12 text-center bg-zinc-900">
          <h2 className="text-2xl font-semibold">
            No Flashcards Yet
          </h2>

          <p className="text-zinc-400 mt-3">
            Generate flashcards from your study documents
          </p>
        </div>
      ) : (
        <FlashcardViewer
          flashcards={flashcards}
        />
      )}
    </div>
  )
}