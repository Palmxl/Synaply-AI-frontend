import { useEffect, useRef } from "react"

export default function useChatSocket(
  onMessage: (message: string) => void
) {
  const socket =
    useRef<WebSocket | null>(null)

  useEffect(() => {
    socket.current = new WebSocket(
      "ws://localhost:8000/chat"
    )

    socket.current.onmessage = (
      event
    ) => {
      onMessage(event.data)
    }

    return () => {
      socket.current?.close()
    }
  }, [onMessage])

  const sendMessage = (
    documentId: number,
    question: string
  ) => {
    socket.current?.send(
      JSON.stringify({
        document_id: documentId,
        question,
      })
    )
  }

  return {
    sendMessage,
  }
}