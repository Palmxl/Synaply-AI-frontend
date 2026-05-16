import { Bell, Search } from "lucide-react"

export default function Topbar() {
  return (
    <header className="h-16 border-b border-zinc-800 px-6 flex items-center justify-between bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800 w-[300px]">
        <Search size={18} className="text-zinc-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <button className="p-2 rounded-xl hover:bg-zinc-800 transition">
        <Bell size={20} />
      </button>
    </header>
  )
}