import connectToDatabase from "../../../../config/mongodb"
import Event from "@/models/event.model";

export async function GET() {
  try {
    await connectToDatabase();

    const events = await Event.find({}).exec()

    if (!events) {
      return Response.json({ success: false, message: 'empty' })
    }

    return Response.json({ success: true, message: 'events fetched successfully', events });

  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}
