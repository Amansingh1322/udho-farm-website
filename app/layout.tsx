import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Udho Farm - Empowering Rural Excellence",
  description: "Leading a new farming journey with tech, livestock, and training",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop /> {/* Add the ScrollToTop component here */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
