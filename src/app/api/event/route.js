import connectToDatabase from "../../../../config/mongodb"
import Event from "@/models/event.model";

export async function POST(request) {
  try {
    const { name, user, description, timing, banner, venue, fee, type } = await request.json();

    await connectToDatabase();

    const existingEvent = await Event.findOne({ name }).exec()

    if (existingEvent) {
      return Response.json({ success: false, message: 'event already exist' })
    }

    const newEntry = new Event({ name, user, description, timing, banner, venue, fee, type })

    try {
      await newEntry.save()

      return Response.json({ success: true, message: 'event created successfully' })
    } catch (saveError) {
      return Response.json({ success: false, message: 'Error saving entry' })
    }

  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}
