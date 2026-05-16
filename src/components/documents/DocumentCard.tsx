import { useState } from "react"

import {
  FileText,
  Trash2,
  Sparkles,
  Loader2,
  Brain,
  ClipboardCheck,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import type { StudyDocument } from "@/types/document"

import { generateSummary } from "@/services/ai.service"
import { generateQuiz } from "@/services/quiz.service"

import {
  generateFlashcards,
} from "@/services/flashcard.service"

import SummaryDialog from "./SummaryDialog"

import { toast } from "sonner"

interface Props {
  document: StudyDocument
}

export default function DocumentCard({
  document,
}: Props) {
  const [
    summaryLoading,
    setSummaryLoading,
  ] = useState(false)

  const [
    quizLoading, 
    setQuizLoading
  ] = useState(false)

  const [
    flashcardsLoading,
    setFlashcardsLoading,
  ] = useState(false)

  const [summary, setSummary] =
    useState("")

  const [dialogOpen, setDialogOpen] =
    useState(false)

  const handleGenerateSummary =
    async () => {
      try {
        setSummaryLoading(true)

        const response =
          await generateSummary(
            document.id
          )

        setSummary(response.summary)

        setDialogOpen(true)
      } catch {
        toast.error(
          "Could not generate summary"
        )
      } finally {
        setSummaryLoading(false)
      }
    }

  const handleGenerateFlashcards =
    async () => {
      try {
        setFlashcardsLoading(true)

        await generateFlashcards(
          document.id
        )

        toast.success(
          "Flashcards generated"
        )
      } catch {
        toast.error(
          "Could not generate flashcards"
        )
      } finally {
        setFlashcardsLoading(false)
      }
    }

  const handleGenerateQuiz =
    async () => {
      try {
        setQuizLoading(true)

        await generateQuiz(
          document.id
        )

        toast.success(
          "Quiz generated"
        )
      } catch {
        toast.error(
          "Could not generate quiz"
        )
      } finally {
      setQuizLoading(false)
      }
    }

  return (
    <>
      <Card className="bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700 transition">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-zinc-800">
                <FileText size={24} />
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  {document.title}
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                  {document.subject}
                </p>

                <p className="text-zinc-500 text-xs mt-3">
                  Uploaded {document.uploadedAt}
                </p>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-zinc-800"
            >
              <Trash2 size={18} />
            </Button>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              onClick={
                handleGenerateSummary
              }
              disabled={summaryLoading}
              className="w-full"
            >
              {summaryLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Sparkles />
              )}

              Generate Summary
            </Button>

            <Button
              variant="secondary"
              onClick={
                handleGenerateFlashcards
              }
              disabled={flashcardsLoading}
              className="w-full"
            >
              {flashcardsLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Brain />
              )}

              Generate Flashcards
            </Button>

            <Button
              variant="outline"
              onClick={handleGenerateQuiz}
              disabled={quizLoading}
              className="w-full"
            >
              {quizLoading ? (
                  <Loader2 className="animate-spin" />
              ) : (
                  <ClipboardCheck />
              )}

              Generate Quiz
            </Button>
          </div>
        </CardContent>
      </Card>

      <SummaryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        summary={summary}
      />
    </>
  )
}