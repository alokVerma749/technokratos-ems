import { checkAuthUser } from "@/utils/checkAuthUser"
import connectToDatabase from "../../../../config/mongodb"
import User from "@/models/user.models"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"

export async function POST(request) {
  try {

    const { email: cookieEmail, isAdmin } = checkAuthUser()

    // check login info from cookie
    if (cookieEmail) {
      return Response.json({ success: true, message: 'Already logged in', email: cookieEmail, isAdmin }, { status: 200 })
    }
    else {
      const { email, password } = await request.json()

      await connectToDatabase()

      const existingUser = await User.findOne({ email }).exec()

      if (!existingUser) {
        return Response.json({ success: false, message: 'user does not exist' })
      }

      const DBPass = await existingUser.password
      const isPasswordValid = await bcrypt.compare(password, DBPass)

      if (!isPasswordValid) {
        return Response.json({ success: false, message: 'Invalid password' }, { status: 500 })
      }
      cookies().set('user', email, { httpOnly: true, secure: true, sameSite: 'strict' });
      return new Response(JSON.stringify({ success: true, message: 'logged in', email }))
    }


  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 404 })
  }
}
