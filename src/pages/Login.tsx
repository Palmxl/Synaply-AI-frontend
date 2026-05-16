import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { toast } from "sonner"

import { useAuth } from "@/context/AuthContext"

import { loginRequest } from "@/services/auth.service"

export default function Login() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields")
      return
    }

    try {
      const response = await loginRequest({
        email, password
      })

      login(response.access_token, {
        email,
      })

      toast.success("Logged in successfully")

      navigate("/")
    } catch {
      toast.error("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-6">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white">
        <CardContent className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="text-zinc-400 mt-2">
              Login to Synaply AI
            </p>
          </div>

          <div className="space-y-5">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-800 border-zinc-700"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-800 border-zinc-700"
            />

            <Button
              onClick={handleLogin}
              className="w-full"
            >
              Login
            </Button>
          </div>

          <p className="text-sm text-zinc-400 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-white hover:underline"
            >
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}