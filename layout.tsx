import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Ethereum SDG - Goals and Standards</title>
        <meta name="description" content="Goals and standards that help keep Ethereum more accountable" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

