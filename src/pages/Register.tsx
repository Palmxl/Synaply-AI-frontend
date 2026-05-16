import { useState } from "react"
import { Link } from "react-router-dom"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { toast } from "sonner"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = () => {
    try {
      toast.success("Account created successfully")

      console.log({
        email,
        password,
      })
    } catch {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-6">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white">
        <CardContent className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Create Account
            </h1>

            <p className="text-zinc-400 mt-2">
              Join Synaply AI
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
              className="w-full"
              onClick={handleRegister}
            >
              Register
            </Button>
          </div>

          <p className="text-sm text-zinc-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}