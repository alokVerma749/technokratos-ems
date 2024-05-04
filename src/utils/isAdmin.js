import { cookies } from "next/headers"

export const isAdmin = () => {
  const LoggedUser = cookies().get('user')
  if (LoggedUser.value === process.env.ADMIN_EMAIL) {
    return true
  }
  return false
}
