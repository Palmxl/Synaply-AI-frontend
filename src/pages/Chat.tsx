import { useState } from "react"

import ChatBubble from "@/components/chat/ChatBubble"
import ChatInput from "@/components/chat/ChatInput"
import TypingIndicator from "@/components/chat/TypingIndicator"

import type { ChatMessage } from "@/types/chat"

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! Upload study materials and ask me anything about them.",
    },
  ])

  const [isTyping, setIsTyping] = useState(false)

  const handleSend = (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: message,
    }

    setMessages((prev) => [...prev, userMessage])

    setIsTyping(true)

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "This is a simulated AI response. Backend integration comes next.",
      }

      setMessages((prev) => [...prev, aiMessage])

      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message}
            />
          ))}

          {isTyping && <TypingIndicator />}
        </div>
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  )
}