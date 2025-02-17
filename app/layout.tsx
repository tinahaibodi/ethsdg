import type React from "react"
import "./globals.css"

export const metadata = {
  title: "ETHSDG",
  description: "Tracking alignment across Ethereum's ecosystem",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'