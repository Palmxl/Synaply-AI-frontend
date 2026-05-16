import api from "@/api/client"

export async function generateFlashcards(
  documentId: number
) {
  const response = await api.post(
    `/flashcards/generate/${documentId}`
  )

  return response.data
}

export async function getFlashcards() {
  const response = await api.get(
    "/flashcards"
  )

  return response.data
}