import connectToDatabase from "../../../../../config/mongodb"
import Event from "@/models/event.model"

export async function GET(request) {
  try {
    await connectToDatabase()

    const eid = request.url.split('/').pop()
    const event = await Event.findById(eid)


    if (!event) {
      return Response.json({ success: false, message: "Event not found" })
    }

    return Response.json({ success: true, data: event })
  } catch (error) {
    console.error("Error fetching event:", error)
    return Response.json({ success: false, error: "Internal server error" })
  }
}
