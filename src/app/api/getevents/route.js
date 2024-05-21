import Event from "@/models/event.model"
import { checkAuthUser } from "@/utils/checkAuthUser"
import connectToDatabase from "../../../../config/mongodb"

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // TODO: its a bug, isAdmin is always false
    const { isAdmin } = checkAuthUser()
    await connectToDatabase()

    const events = await Event.find({}).exec()

    const modifiedEvents = events.map(event => {
      const eventObj = event.toObject()
      if (!isAdmin) {
        delete eventObj.participants
      }
      return eventObj
    })

    if (!events) {
      return Response.json({ success: false, message: 'No Events available' }, { status: 404 })
    }

    return Response.json({ success: true, message: 'Events fetched successfully', modifiedEvents }, { status: 200 })

  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
