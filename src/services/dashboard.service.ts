import api from "@/api/client"

export async function getAnalytics() {
  const response = await api.get(
    "/dashboard/analytics"
  )

  return response.data
}