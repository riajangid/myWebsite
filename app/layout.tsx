import type React from "react"
import type { Metadata } from "next"
import { Inter, Barlow, Roboto } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
})
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "StoneCut Pro - Premium Stone Cutting Machinery & Tools | Industrial Equipment",
  description:
    "Discover high-quality stone cutting machinery, tools, and equipment at StoneCut Pro. Professional-grade solutions for marble, granite, and stone processing industries.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={`antialiased text-gray-800 min-h-screen flex flex-col ${inter.variable} ${barlow.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
