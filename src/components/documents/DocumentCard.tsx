import { FileText, Trash2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import type { StudyDocument } from "@/types/document"

interface Props {
  document: StudyDocument
}

export default function DocumentCard({
  document,
}: Props) {
  return (
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
      </CardContent>
    </Card>
  )
}