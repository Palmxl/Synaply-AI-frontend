import { Link } from "react-router-dom"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Register() {
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
              className="bg-zinc-800 border-zinc-700"
            />

            <Input
              type="password"
              placeholder="Password"
              className="bg-zinc-800 border-zinc-700"
            />

            <Button className="w-full">
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