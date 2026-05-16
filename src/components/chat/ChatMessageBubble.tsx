import type { ChatMessage } from "@/types/chat"

interface Props {
  message: ChatMessage
}

export default function ChatMessageBubble({
  message,
}: Props) {
  const isUser =
    message.role === "user"

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[80%] rounded-3xl px-5 py-4
          whitespace-pre-wrap leading-relaxed
          ${
            isUser
              ? "bg-white text-black"
              : "bg-zinc-800 text-white"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  )
}