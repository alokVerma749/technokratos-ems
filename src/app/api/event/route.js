import { checkAuthUser } from "@/utils/checkAuthUser"
import connectToDatabase from "../../../../config/mongodb"
import Event from "@/models/event.model"

export async function POST(request) {
  try {
    if (!(checkAuthUser()?.isAdmin)) {
      return Response.json({ success: false, message: 'Admin protected route' })
    }
    const { name, user, description, timing, banner, venue, fee, type } = await request.json()

    await connectToDatabase()

    const existingEvent = await Event.findOne({ name }).exec()

    if (existingEvent) {
      return Response.json({ success: false, message: 'event already exist' }, { status: 500 })
    }

    const newEntry = new Event({ name, user, description, timing, banner, venue, fee, type })

    try {
      await newEntry.save()

      return Response.json({ success: true, message: 'event created successfully' }, { status: 200 })
    } catch (saveError) {
      return Response.json({ success: false, message: 'Error saving entry' }, { status: 500 })
    }

  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}
