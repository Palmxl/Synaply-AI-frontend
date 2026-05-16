export interface DashboardAnalytics {
  total_documents: number

  total_flashcards: number

  total_quizzes: number

  total_chat_messages: number

  recent_activity: {
    action: string
    description: string
    created_at: string
  }[]

  activity_chart: {
    day: string
    activity: number
  }[]
}