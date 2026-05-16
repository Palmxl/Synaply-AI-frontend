import { Routes, Route } from "react-router-dom"

import AppLayout from "./layouts/AppLayout"

import Dashboard from "./pages/Dashboard"
import Documents from "./pages/Documents"
import Chat from "./pages/Chat"
import Flashcards from "./pages/Flashcards"
import Quizzes from "./pages/Quizzes"
// import Settings from "./pages/Settings"

import Login from "./pages/Login"
import Register from "./pages/Register"

import ProtectedRoute from "./routes/ProtectedRoute"

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quizzes" element={<Quizzes />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  )
}

export default App