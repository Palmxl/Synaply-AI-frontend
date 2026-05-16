import { useCallback, useState } from "react"

import { useDropzone } from "react-dropzone"

import { UploadCloud, Loader2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { toast } from "sonner"

import {
  uploadDocument,
} from "@/services/document.service"

interface Props {
  onUploadSuccess: () => void
}

export default function UploadZone({
  onUploadSuccess,
}: Props) {
  const [loading, setLoading] =
    useState(false)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]

      if (!file) return

      try {
        setLoading(true)

        await uploadDocument(file)

        toast.success(
          "Document uploaded successfully"
        )

        onUploadSuccess()
      } catch {
        toast.error(
          "Could not upload document"
        )
      } finally {
        setLoading(false)
      }
    },
    [onUploadSuccess]
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  })

  return (
    <Card
      className={`
        border-dashed border-2 transition-all duration-300
        bg-zinc-900 border-zinc-800 text-white
        ${
          isDragActive
            ? "border-white bg-zinc-800"
            : ""
        }
      `}
    >
      <CardContent
        {...getRootProps()}
        className="p-12 flex flex-col items-center justify-center text-center cursor-pointer"
      >
        <input {...getInputProps()} />

        <div className="p-4 rounded-full bg-zinc-800 mb-4">
          {loading ? (
            <Loader2
              size={40}
              className="animate-spin"
            />
          ) : (
            <UploadCloud size={40} />
          )}
        </div>

        <h2 className="text-2xl font-semibold">
          {loading
            ? "Uploading..."
            : "Upload Study Materials"}
        </h2>

        <p className="text-zinc-400 mt-2">
          Drag & drop PDF files here
        </p>
      </CardContent>
    </Card>
  )
}