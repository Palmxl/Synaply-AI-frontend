import { useState } from "react"

import {
  FileText,
  Trash2,
  Sparkles,
  Loader2,
  Brain,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import type { StudyDocument } from "@/types/document"

import { generateSummary } from "@/services/ai.service"

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
  const [loading, setLoading] =
    useState(false)

  const [summary, setSummary] =
    useState("")

  const [dialogOpen, setDialogOpen] =
    useState(false)

  const handleGenerateSummary =
    async () => {
      try {
        setLoading(true)

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
        setLoading(false)
      }
    }

  const handleGenerateFlashcards =
    async () => {
      try {
        setLoading(true)

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
        setLoading(false)
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
              disabled={loading}
              className="w-full"
            >
              {loading ? (
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
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Brain />
              )}

              Generate Flashcards
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