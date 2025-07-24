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
  applicationName: "Active Trade Centre",
  description:
    "Trusted since 1993, Active Trade Centre offers high-quality diamond wire saw machines and stone cutting tools for construction and design professionals in India.",
  robots: "index, follow",
  generator: "Next.js",
  keywords: [
    "diamond wire saw machines",
    "stone cutting tools",
    "marble cutting machines",
    "granite cutting equipment",
    "wire saw for granite",
    "stone processing machinery",
    "quarry cutting machines",
    "Active Trade Centre",
    "industrial stone cutter",
    "diamond tools manufacturer",
    "diamond wire saw machine", 
    "stone cutting machine", 
    "wire saw India", 
    "stone processing tools", 
    "Active Trade Centre", 
    "industrial cutting machine", 
    "construction tools",
    "ATC",
    "ATC jaipur",
    "wire saw machine jaipur",
    "diamond wire machine jaipur",
    "diamond wire machine",
    "wire saw machine",
    "ria jangid",
    "bani park",
    "riya jangid"
  ],

   icons: {
    icon: "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png",
  },
  openGraph: {
    title: "Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre",
    description:
      "Discover high-quality wire saw machines, diamond wire saws, and stone cutting tools at Active Trade Centre. We offer a wide range of industrial cutting solutions.",
    url: "https://www.diamondwiresawmachines.com",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png",
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
      "Trusted since 1993, Active Trade Centre offers high-quality diamond wire saw machines and stone cutting tools for construction and design professionals in India.",
    images: [
      "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Active Trade Centre",
              "url": "https://www.diamondwiresawmachines.com",
              "logo": "https://res.cloudinary.com/dltpv77qp/image/upload/v1751908981/ATC_LOGO-removebg-preview_b6am7t.png"
            }),
          }}
        />
        <meta name="description" content="Trusted since 1993, Active Trade Centre offers high-quality diamond wire saw machines and stone cutting tools for construction and design professionals in India." />
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://www.diamondwiresawmachines.com/"/>
        <link rel="icon" href="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"/>
        <meta property="og:title" content="Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre"/>
        <meta property="og:description" content="Discover high-quality wire saw machines, diamond wire saws, and stone cutting tools at Active Trade Centre. We offer a wide range of industrial cutting solutions." />
        <meta property="og:image" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"/>
        <meta property="og:url" content="https://www.diamondwiresawmachines.com"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Diamond Wire Saw Machines & Cutting Tools - Active Trade Centre"/>
        <meta name="twitter:description" content="Top-quality wire saw machines, cutting tools, and industrial parts for stone, concrete, and quarry operations."/>
        <meta name="twitter:image" content="https://res.cloudinary.com/dfigcriri/image/upload/v1749576524/ATC_LOGO.jpeg_hufwqj.jpg"/>
        {/* <meta name="google-site-verification" content="ydmgTgfGSPXMIhaE27th1ja2M_0H5gfiy-opJaL-58s" /> */}
      </head>
      <body
        className={`antialiased text-gray-800 min-h-screen flex flex-col ${inter.variable} ${barlow.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
