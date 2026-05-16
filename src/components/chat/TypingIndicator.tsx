export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" />

          <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce delay-100" />

          <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce delay-200" />
        </div>
      </div>
    </div>
  )
}