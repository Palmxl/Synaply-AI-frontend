import { useEffect, useState } from "react"

import UploadZone from "@/components/documents/UploadZone"

import DocumentCard from "@/components/documents/DocumentCard"

import {
  getDocuments,
} from "@/services/document.service"

export default function Documents() {
  const [documents, setDocuments] =
    useState([])

  const loadDocuments = async () => {
    try {
      const data =
        await getDocuments()

      setDocuments(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadDocuments()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Documents
        </h1>

        <p className="text-zinc-400 mt-2">
          Upload and manage your study materials
        </p>
      </div>

      <UploadZone
        onUploadSuccess={loadDocuments}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {documents.map((document: any) => (
          <DocumentCard
            key={document.id}
            document={{
              id: document.id,
              title: document.title,
              subject:
                document.subject ||
                "General",
              uploadedAt: "Recently",
            }}
          />
        ))}
      </div>
    </div>
  )
}