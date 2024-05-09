import connectToDatabase from "../../../../config/mongodb"
import Event from "@/models/event.model"

export const dynamic = 'force-dynamic'

export async function GET() {
  try {

    await connectToDatabase()

    const events = await Event.find({}).exec()

    if (!events) {
      return Response.json({ success: false, message: 'empty' }, { status: 404 })
    }

    return Response.json({ success: true, message: 'events fetched successfully', events }, { status: 200 })

  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
