import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Brain,
  ClipboardCheck,
  Settings,
  LogOut,
} from "lucide-react"

import { NavLink } from "react-router-dom"

import { useAuth } from "@/context/AuthContext"

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: FileText,
  },
  {
    name: "AI Chat",
    path: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Flashcards",
    path: "/flashcards",
    icon: Brain,
  },
  {
    name: "Quizzes",
    path: "/quizzes",
    icon: ClipboardCheck,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const { logout } = useAuth()

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 backdrop-blur-xl relative flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold">
          Synaply AI
        </h1>
      </div>

      <nav className="p-4 space-y-2 flex-1">
        {links.map((link) => {
          const Icon = link.icon

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }
              `
              }
            >
              <Icon size={18} />

              <span>{link.name}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={logout}
          className="
            w-full flex items-center gap-3
            px-4 py-3 rounded-xl
            text-zinc-400 hover:bg-zinc-800
            hover:text-white transition-all duration-200
          "
        >
          <LogOut size={18} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}