import ChatWindow from "@/components/chat/ChatWindow"

export default function Chat() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          AI Document Chat
        </h1>

        <p className="text-zinc-400 mt-2">
          Ask questions about your study materials
        </p>
      </div>

      <ChatWindow documentId={1} />
    </div>
  )
}