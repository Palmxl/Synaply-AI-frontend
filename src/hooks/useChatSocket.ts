import { useEffect, useRef } from "react"

export default function useChatSocket(
  onMessage: (message: string) => void
) {
  const socket =
    useRef<WebSocket | null>(null)

  const onMessageRef =
    useRef(onMessage)

  useEffect(() => {
    onMessageRef.current =
      onMessage
  }, [onMessage])

  useEffect(() => {
    const ws = new WebSocket(
      `${import.meta.env.VITE_WS_URL}/chat`
    )

    socket.current = ws

    ws.onmessage = (event) => {
      onMessageRef.current(
        event.data
      )
    }

    ws.onopen = () => {
      console.log(
        "WebSocket connected"
      )
    }

    ws.onclose = () => {
      console.log(
        "WebSocket disconnected"
      )
    }

    return () => {
      ws.close()
    }
  }, [])

  const sendMessage = (
    documentId: number,
    question: string
  ) => {
    if (
      socket.current?.readyState ===
      WebSocket.OPEN
    ) {
      socket.current.send(
        JSON.stringify({
          document_id: documentId,
          question,
        })
      )
    }
  }

  return {
    sendMessage,
  }
}