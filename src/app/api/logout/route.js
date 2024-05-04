import { checkAuthUser } from "@/utils/checkAuthUser"
import { cookies } from "next/headers"

export async function GET() {
  try {

    const { email: cookieEmail, isAdmin } = checkAuthUser()

    if (!cookieEmail) {
      return Response.json({ success: true, message: 'Already Logged out', email: cookieEmail, isAdmin }, { status: 200 })
    }
    else {
      cookies().delete('user', { path: '/api' })
      return new Response(JSON.stringify({ success: true, message: 'logged out successfully' }))
    }


  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 404 })
  }
}
