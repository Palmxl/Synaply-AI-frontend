import type { ChatMessage } from "@/types/chat"

interface Props {
  message: ChatMessage
}

export default function ChatBubble({
  message,
}: Props) {
  const isUser = message.role === "user"

  return (
    <div
      className={`
        flex
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          max-w-3xl px-5 py-4 rounded-2xl
          ${
            isUser
              ? "bg-white text-black"
              : "bg-zinc-900 text-white border border-zinc-800"
          }
        `}
      >
        <p className="leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
      </div>
    </div>
  )
}