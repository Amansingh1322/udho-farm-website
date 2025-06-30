"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const handleSubscribe = async () => {
    setIsSubmitting(true)
    setStatusMessage(null)
    setIsError(false)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatusMessage(data.message)
        setIsError(false)
        setEmail("") // Clear email input on success
      } else {
        setStatusMessage(data.message || "An unexpected error occurred.")
        setIsError(true)
      }
    } catch (error) {
      console.error("Client-side error subscribing to newsletter:", error)
      setStatusMessage("Failed to subscribe. Please try again later.")
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-udho-beige py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <Mail className="w-16 h-16 text-udho-neon-orange-primary mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">Join Our Newsletter</h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Stay updated with the latest news, exclusive offers, and insights from Udho Farm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent text-gray-800"
          />
          <button
            onClick={handleSubscribe}
            disabled={isSubmitting}
            className="bg-udho-neon-orange-primary text-white px-8 py-3 rounded-lg hover:bg-udho-neon-orange-dark transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        {statusMessage && (
          <p className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
        )}
      </div>
    </section>
  )
}
