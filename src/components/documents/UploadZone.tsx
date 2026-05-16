import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

import { UploadCloud } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { toast } from "sonner"

export default function UploadZone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)

    toast.success("Document uploaded successfully")
  }, [])

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
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
          <UploadCloud size={40} />
        </div>

        <h2 className="text-2xl font-semibold">
          Upload Study Materials
        </h2>

        <p className="text-zinc-400 mt-2">
          Drag & drop PDF files here
        </p>
      </CardContent>
    </Card>
  )
}