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
  title: "Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre",
  description:
    "Discover high-quality stone cutting machinery, tools, and equipment at ATC. Professional-grade solutions for marble, granite, and stone processing industries.",
  robots: "index, follow",
  generator: "Next.js",

  icons: {
    icon: "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png ",
  },

  openGraph: {
    title: "Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre",
    description:
      "Discover high-quality wire saw machines, diamond wire saws, and stone cutting tools at Active Trade Centre. We offer a wide range of industrial cutting solutions.",
    url: "https://www.diamondwiresawmachines.com",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png ",
        width: 1200,
        height: 630,
        alt: "Active Trade Centre Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre",
    description:
      "Top-quality wire saw machines, cutting tools, and industrial parts for stone, concrete, and quarry operations.",
    images: [
      "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png ",
    ],
  },

  metadataBase: new URL("https://www.diamondwiresawmachines.com"),
};

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
