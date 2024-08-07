import { cookies } from "next/headers"

export const checkAuthUser = () => {
  const LoggedUser = cookies().get('user', { path: '/api' })
  return {
    email: LoggedUser?.value || '',
    isAdmin: LoggedUser?.value === process.env.NEXT_PUBLIC_ADMIN_EMAIL
  }
}
