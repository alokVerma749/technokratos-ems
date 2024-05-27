import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import MiniDrawer from "@/components/Sidebar"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Technokratos'24 EMS",
  description: "This EMS is created bt Team DevMavericks",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Toaster />
          
            {children}
        </AuthProvider>
      </body>
    </html>
  )
}
