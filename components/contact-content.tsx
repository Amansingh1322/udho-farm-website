"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      let data
      // Check if the response is OK and if it's JSON before parsing
      const contentType = response.headers.get("content-type")
      if (response.ok && contentType && contentType.includes("application/json")) {
        data = await response.json()
      } else {
        // If not OK or not JSON, try to get text or default to a generic message
        const errorText = await response.text()
        data = { success: false, message: errorText || "An unexpected error occurred. Please try again." }
      }

      if (data.success) {
        setStatusMessage(data.message)
        setIsError(false)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setStatusMessage(data.message || "An unexpected error occurred.")
        setIsError(true)
      }
    } catch (error) {
      console.error("Client-side error sending contact form:", error)
      setStatusMessage("Failed to send message. Please check your internet connection and try again.")
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Information */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">Get in Touch with Udho Farm</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions, partnership inquiries, or want to learn more about our products? Fill out the form below
              or use our contact details.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-udho-neon-orange-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Regd. Office:</h3>
                <p className="text-gray-600">Udho Farm, VPO Badehar, Teh. & Distt. Una, Himachal Pradesh 174306</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-udho-neon-orange-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email Id:</h3>
                <p className="text-gray-600">udhofarms@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="bg-udho-neon-orange-light rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+918091122984"
                className="flex items-center gap-3 text-gray-700 hover:text-udho-neon-orange-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call us directly</span>
              </a>
              <a
                href="mailto:udhofarms@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-udho-neon-orange-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send us an email</span>
              </a>
              <a
                href="https://wa.me/918091122984"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-udho-neon-orange-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject of your message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-udho-neon-orange-primary focus:border-transparent resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-udho-neon-orange-light rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
          <p className="text-gray-600 text-sm">Monday - Saturday: 8:00 AM - 6:00 PM</p>
          <p className="text-gray-600 text-sm">Sunday: 9:00 AM - 4:00 PM</p>
        </div>

        <div className="text-center p-6 bg-udho-neon-orange-light rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Response Time</h3>
          <p className="text-gray-600 text-sm">We typically respond to inquiries within 24-48 hours</p>
        </div>

        <div className="text-center p-6 bg-udho-neon-orange-light rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Farm Visits</h3>
          <p className="text-gray-600 text-sm">Schedule visits 48 hours in advance for biosecurity protocols</p>
        </div>
      </div>
    </div>
  )
}
