import { useState } from "react"

import { SendHorizonal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Props {
  onSend: (message: string) => void
}

export default function ChatInput({
  onSend,
}: Props) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (!message.trim()) return

    onSend(message)

    setMessage("")
  }

  return (
    <div className="border-t border-zinc-800 p-4 bg-zinc-950">
      <div className="relative max-w-4xl mx-auto">
        <Textarea
          placeholder="Ask AI about your documents..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[100px] bg-zinc-900 border-zinc-800 text-white pr-14 resize-none"
        />

        <Button
          size="icon"
          onClick={handleSend}
          className="absolute bottom-4 right-4"
        >
          <SendHorizonal size={18} />
        </Button>
      </div>
    </div>
  )
}