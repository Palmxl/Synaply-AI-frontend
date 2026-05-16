import api from "@/api/client"

export async function generateQuiz(
  documentId: number
) {
  const response = await api.post(
    `/quizzes/generate/${documentId}`
  )

  return response.data
}

export async function getQuizzes() {
  const response = await api.get(
    "/quizzes"
  )

  return response.data
}

export async function getQuiz(
  quizId: number
) {
  const response = await api.get(
    `/quizzes/${quizId}`
  )

  return response.data
}