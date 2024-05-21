import Member from "@/models/member.model"
import { checkAuthUser } from "@/utils/checkAuthUser"
import connectToDatabase from "../../../../config/mongodb"

export async function POST(request) {
  try {
    if (!(checkAuthUser()?.isAdmin)) {
      return Response.json({ success: false, message: 'Admin protected route' })
    }
    const { name, course, branch, year, email } = await request.json()

    await connectToDatabase()

    const existingMember = await Member.findOne({ email }).exec()
    if (existingMember) {
      return Response.json({ success: false, message: "User already exist" })
    }
    const memString = name + " " + course + " " + branch + " " + year + "year"
    const newEntry = new Member({ name, course, branch, year, email, memberString: memString })

    try {
      await newEntry.save()

      return Response.json({
        success: true,
        message: "Member registered successfully",
      })
    } catch (error) {
      return Response.json({ success: false, message: "Error saving entry" })
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}

export async function GET() {
  try {
    if (!(checkAuthUser()?.isAdmin)) {
      return Response.json({ success: false, message: 'Admin protected route' })
    }

    await connectToDatabase()

    const memberStr = await Member.find({}).select("memberString _id")

    return new Response(JSON.stringify(memberStr), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
