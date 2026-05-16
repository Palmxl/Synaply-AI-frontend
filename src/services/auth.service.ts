import api from "@/api/client"

interface LoginData {
  email: string
  password: string
}

export async function loginRequest(data: LoginData) {
  const response = await api.post("/auth/login", data)

  return response.data
}

export async function registerRequest(data: LoginData) {
  const response = await api.post("/auth/register", data)

  return response.data
}