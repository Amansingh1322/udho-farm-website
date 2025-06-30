"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, User, Mail, Phone, MessageSquare, Send } from "lucide-react"

interface ScheduleFormProps {
  type: string
  pageTitle: string
}

export function ScheduleForm({ type, pageTitle }: ScheduleFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
    type: type, // Set from props
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)
    setIsError(false)

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      let data
      const contentType = response.headers.get("content-type")
      if (response.ok && contentType?.includes("application/json")) {
        data = await response.json()
      } else {
        const errorText = await response.text()
        data = { success: false, message: errorText || "An unexpected error occurred." }
      }

      if (data.success) {
        setStatusMessage(data.message)
        setIsError(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          message: "",
          type, // Reset to passed prop
        })
      } else {
        setStatusMessage(data.message || "An unexpected error occurred.")
        setIsError(true)
      }
    } catch (error) {
      console.error("Client-side error submitting schedule form:", error)
      setStatusMessage("Failed to submit request. Please check your internet connection and try again.")
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">Schedule Your {pageTitle}</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Please fill out the form below to request a {pageTitle.toLowerCase()} with Udho Farm. We will get back to you
          to confirm the details.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Request Details</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
              Type of Request
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="requestType"
                name="requestType"
                value={pageTitle}
                readOnly
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g., +91 1234567890"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details / Message (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any specific requirements or questions?"
                rows={5}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent resize-vertical"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-udho-neon-orange-primary text-white py-3 px-6 rounded-lg hover:bg-udho-neon-orange-dark transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Send className="w-5 h-5 animate-pulse" /> Submitting Request...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Submit Request
              </>
            )}
          </button>

          {statusMessage && (
            <p className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
          )}
        </form>
      </div>

      <div className="mt-16 bg-udho-neon-orange-light rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">What Happens Next?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Thank you for your interest! We will review your request for a {pageTitle.toLowerCase()} and get back to you
          via email or phone within 24–48 hours to confirm the details and schedule.
        </p>
      </div>
    </div>
  )
}
