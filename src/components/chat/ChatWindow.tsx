import { useState } from "react"

import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import useChatSocket from "@/hooks/useChatSocket"

import ChatMessageBubble from "./ChatMessageBubble"

import type { ChatMessage } from "@/types/chat"

import { sendMessage } from "@/services/chat.service"

interface Props {
  documentId: number
}

export default function ChatWindow({
  documentId,
}: Props) {
  const [messages, setMessages] =
    useState<ChatMessage[]>([])

  const [input, setInput] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const { sendMessage: sendSocketMessage } =
    useChatSocket((message) => {
      const assistantMessage: ChatMessage =
        {
          role: "assistant",
          content: message,
        }

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ])

      setLoading(false)
    })

  const handleSend = async () => {
    if (!input.trim()) return

    const question = input

    const userMessage: ChatMessage = {
      role: "user",
      content: question,
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
    ])

    setInput("")

    setLoading(true)

    sendSocketMessage(question)
  }

  return (
    <div className="border border-zinc-800 bg-zinc-900 rounded-3xl h-[700px] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center text-zinc-500">
            Ask questions about your document
          </div>
        )}

        {messages.map((message, index) => (
          <ChatMessageBubble
            key={index}
            message={message}
          />
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800 rounded-3xl px-5 py-4">
              <Loader2 className="animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-zinc-800 p-4 flex gap-3">
        <Input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask something about your PDF..."
          className="bg-zinc-800 border-zinc-700"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
        />

        <Button
          onClick={handleSend}
          disabled={loading}
        >
          <Send />
        </Button>
      </div>
    </div>
  )
}