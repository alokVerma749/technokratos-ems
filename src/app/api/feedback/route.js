import Feedback from '@/models/feedback.model'
import connectToDatabase from '../../../../config/mongodb'

export async function POST(request) {
  await connectToDatabase()

  const { firstName, lastName, email, mobile, branch, message } = await request.json()
  try {
    const newEntry = new Feedback({ firstName, lastName, email, mobile, branch, message })
    await newEntry.save()
    return Response.json({ success: true, message: 'Message sent' }, { status: 200 })
  } catch (error) {
    console.error('Error saving feedback:', error)
    return Response.json({ success: false, message: 'Failed to send message' }, { status: 500 })
  }
}
