import connectToDatabase from '../../../../../config/mongodb'
import Event from "@/models/event.model"

export async function POST(request) {
  await connectToDatabase()
  try {
    const { eid, email } = await request.json()

    if (!eid) {
      return Response.json({ success: false, message: 'Event not found' })
    }

    const event = await Event.findById(eid)

    if (!event) {
      return Response.json({ success: false, message: 'Event not found' })
    }
    console.log(event)
    if (!(event?.participants?.includes(email))) {
      event.participants.push(email)
      await event.save()
    }

    return Response.json({ success: true, message: 'Registered successfully' })

  } catch (error) {
    return Response.json({ success: false, message: error.message })
  }
}
