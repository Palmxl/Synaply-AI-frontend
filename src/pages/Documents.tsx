import UploadZone from "@/components/documents/UploadZone"
import DocumentCard from "@/components/documents/DocumentCard"

const documents = [
  {
    id: 1,
    title: "Linear Algebra Notes",
    subject: "Mathematics",
    uploadedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Operating Systems",
    subject: "Computer Science",
    uploadedAt: "Yesterday",
  },
]

export default function Documents() {
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

      <UploadZone />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {documents.map((document) => (
          <DocumentCard
            key={document.id}
            document={document}
          />
        ))}
      </div>
    </div>
  )
}