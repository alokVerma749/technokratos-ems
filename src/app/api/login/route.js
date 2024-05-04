import connectToDatabase from "../../../../config/mongodb"
import User from "@/models/user.models"

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    await connectToDatabase()

    const existingUser = await User.findOne({ email }).exec()

    if (!existingUser) {
      return Response.json({ success: false, message: 'user does not exist' })
    }

    const DBPass = await existingUser.password
    const isPasswordValid = DBPass === password

    if (!isPasswordValid) {
      return Response.json({ success: false, message: 'Invalid password' }, { status: 500 })
    }

    return new Response(JSON.stringify({ success: true, message: 'logged in', email }), {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `user=${email}`
      }
    })

  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 404 })
  }
}
