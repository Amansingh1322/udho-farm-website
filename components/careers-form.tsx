"use client"

import { useState } from "react"
import { Send, Upload } from "lucide-react"

export function CareersForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)
    setIsError(false)

    const dataToSend = new FormData()
    dataToSend.append("firstName", formData.firstName)
    dataToSend.append("lastName", formData.lastName)
    dataToSend.append("email", formData.email)
    dataToSend.append("phone", formData.phone)
    dataToSend.append("position", formData.position)
    dataToSend.append("coverLetter", formData.coverLetter)
    if (formData.resume) {
      dataToSend.append("resume", formData.resume)
    }

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: dataToSend,
      })

      const result = await response.json()
      if (response.ok && result.message) {
        setStatusMessage(result.message)
        setIsError(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          coverLetter: "",
          resume: null,
        })
        const fileInput = document.getElementById("resume") as HTMLInputElement
        if (fileInput) fileInput.value = ""
      } else {
        setStatusMessage(result.message || "Something went wrong.")
        setIsError(true)
      }
    } catch (error) {
      console.error("Form error:", error)
      setStatusMessage("Something went wrong while submitting the form.")
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto px-6 py-10 bg-white border rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center mb-6">Apply for a Job</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="px-4 py-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="px-4 py-3 border border-gray-300 rounded-lg"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
      />

      <select
        name="position"
        value={formData.position}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
      >
        <option value="">Select Position (optional)</option>
        <option value="Farm Hand">Farm Hand</option>
        <option value="Poultry Technician">Poultry Technician</option>
        <option value="Farm Manager">Farm Manager</option>
        <option value="Sales & Marketing">Sales & Marketing</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="coverLetter"
        placeholder="Cover Letter / Message"
        value={formData.coverLetter}
        onChange={handleChange}
        rows={5}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-vertical"
      />

      <input
        type="file"
        name="resume"
        id="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        required
        className="w-full block border border-gray-300 px-4 py-2 rounded-lg cursor-pointer"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-udho-neon-orange-primary text-white py-3 px-6 rounded-lg flex justify-center items-center gap-2 hover:bg-udho-neon-orange-dark transition disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Send className="w-4 h-4 animate-pulse" /> Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Submit Application
          </>
        )}
      </button>

      {statusMessage && (
        <p className={`mt-4 text-center ${isError ? "text-red-500" : "text-green-600"}`}>{statusMessage}</p>
      )}
    </form>
  )
}
