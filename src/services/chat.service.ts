import api from "@/api/client"

export async function sendMessage(
  documentId: number,
  question: string
) {
  const response = await api.post(
    `/chat/${documentId}`,
    {
      question,
    }
  )

  return response.data
}