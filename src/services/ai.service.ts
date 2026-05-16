import api from "@/api/client"

export async function generateSummary(
  documentId: number
) {
  const response = await api.post(
    `/ai/summary/${documentId}`
  )

  return response.data
}