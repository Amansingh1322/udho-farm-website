"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link" // Import Link

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is contract poultry farming?",
    answer:
      "Contract poultry farming is a business model where we partner with established poultry companies to raise birds according to their specifications. The company provides day-old chicks, feed, veterinary support, and technical guidance, while we provide the infrastructure, labor, and care. At the end of the growing cycle (typically 45 days for broilers), the company purchases the birds at a predetermined price. This model reduces market risks for farmers while ensuring consistent income and professional support throughout the process.",
  },
  {
    id: 2,
    question: "What types of poultry does Udho Farm specialize in?",
    answer:
      "Udho Farm specializes primarily in broiler chicken production through contract farming arrangements with leading poultry companies in India. We focus on raising healthy, fast-growing broiler chickens from day-old chicks to market-ready birds in approximately 45 days. Our modern facilities and scientific approach ensure optimal growth rates, feed conversion efficiency, and bird welfare. We also have expertise in layer management and are exploring opportunities in egg production as part of our expansion plans.",
  },
  {
    id: 3,
    question: "How does Udho Farm ensure the health and welfare of its birds?",
    answer:
      "At Udho Farm, bird health and welfare are our top priorities. We implement comprehensive biosecurity measures including controlled access, regular sanitization, and strict hygiene protocols. Our birds are housed in spacious, well-ventilated facilities with optimal temperature control and natural lighting. We provide scientifically formulated feeds, clean water systems, and maintain detailed health monitoring records. Our team conducts daily health checks, and we work closely with veterinary specialists for preventive care and prompt treatment when needed. We also ensure our birds can express natural behaviors in a stress-free environment.",
  },
  {
    id: 4,
    question: "Can I visit Udho Farm?",
    answer:
      "We welcome visitors who are genuinely interested in learning about modern poultry farming practices. However, due to strict biosecurity protocols essential for protecting our birds' health, farm visits must be scheduled in advance and follow specific guidelines. Visitors are required to wear protective clothing, undergo disinfection procedures, and may have restricted access to certain areas. We offer educational tours for students, aspiring farmers, and industry professionals. Please contact us at least 48 hours in advance to arrange a visit and receive detailed instructions about our biosecurity requirements.",
  },
  {
    id: 5,
    question: "What training programs does Udho Farm offer?",
    answer:
      "Udho Farm offers comprehensive training programs designed for new poultry farmers, agriculture students, and poultry enthusiasts. Our programs include 1-day intensive workshops and weekend sessions covering essential topics such as chick care and brooding, disease prevention, feed and nutrition management, and profit planning. All sessions include hands-on experience and practical demonstrations. Participants receive certificates upon completion, and our training is offered at affordable, fee-based pricing. We also provide ongoing consultation services for those looking to start their own poultry operations.",
  },
  {
    id: 6,
    question: "What consulting services are available?",
    answer:
      "Our consulting services are tailored for aspiring poultry entrepreneurs and existing farmers looking to optimize their operations. We provide expert guidance on farm site selection, scientific layout planning, breed selection and sourcing, equipment recommendations, and operational best practices. Our consultation includes feasibility studies, business planning support, and ongoing technical assistance. Monthly consultancy packages range from ₹1,000 to ₹5,000 depending on the scope and complexity of services required. We also offer one-time consultation sessions for specific challenges or projects.",
  },
  {
    id: 7,
    question: "How does Udho Farm contribute to sustainability?",
    answer:
      "Sustainability is integral to our operations at Udho Farm. We implement advanced water conservation systems including rainwater harvesting and efficient watering systems. Our waste management program converts poultry litter into valuable organic fertilizer for local agriculture. We use energy-efficient lighting and ventilation systems and are exploring renewable energy sources like solar power. We prioritize local sourcing of supplies to support the regional economy and reduce transportation emissions. Additionally, we provide employment opportunities for local villagers, contributing to community development and economic growth.",
  },
  {
    id: 8,
    question: "What makes Udho Farm different from other poultry operations?",
    answer:
      "Udho Farm stands out through our commitment to excellence, innovation, and community impact. Founded in 2022 with a vision to transform rural farming, we've built our operation from the ground up on previously undeveloped land. Our founder's three decades of international experience in South Africa's mining sector brings a unique perspective to agricultural management. We combine traditional farming wisdom with modern technology, maintain the highest standards of animal welfare, and focus on sustainable practices. Our goal is to become a benchmark farm that others aspire to emulate, while actively contributing to local economic development.",
  },
  {
    id: 9,
    question: "When will Udho Farm's feed production unit be operational?",
    answer:
      "We are currently in the planning and development phase for our state-of-the-art poultry feed production unit. This exciting initiative will enable us to produce high-quality, cost-effective, and nutritionally balanced feed directly on-site. While we cannot provide a specific launch date yet, we are working diligently to ensure the facility meets the highest standards for feed quality and safety. This development will allow us to have greater control over our supply chain, reduce costs, and potentially supply premium feed to other local farmers. We will announce the launch date through our website and social media channels once finalized.",
  },
  {
    id: 10,
    question: "How can I get in touch with Udho Farm for business inquiries?",
    answer:
      "We welcome business inquiries and partnership opportunities. You can reach us through multiple channels: visit our Contact page on the website for detailed contact information, call our main office during business hours, or send us an email with your specific requirements. For training program enrollments, consulting services, or farm visits, please provide at least 48 hours advance notice. For potential partnerships or investment opportunities, we recommend scheduling a formal meeting to discuss your proposals in detail. Our team is committed to responding to all serious inquiries within 24-48 hours.",
  },
]

export function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Find answers to common questions about Udho Farm, our services, and poultry farming.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-800 pr-4">{item.question}</h3>
              {openItems.includes(item.id) ? (
                <ChevronUp className="w-5 h-5 text-udho-neon-orange-primary flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>

            {openItems.includes(item.id) && (
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-udho-neon-orange-light rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our team is here to help. Contact us directly and we'll get back to
          you as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="bg-udho-neon-orange-primary text-white px-6 py-3 rounded-lg hover:bg-udho-neon-orange-dark transition-colors font-medium">
              Contact Us
            </button>
          </Link>
          <Link href="/schedule/visit">
            <button className="border border-udho-neon-orange-primary text-udho-neon-orange-primary px-6 py-3 rounded-lg hover:bg-udho-neon-orange-light transition-colors font-medium">
              Schedule a Visit
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href="/schedule/training"
          className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow block"
        >
          <h4 className="font-semibold text-gray-800 mb-2">Training Programs</h4>
          <p className="text-sm text-gray-600 mb-4">
            Learn about our educational workshops and certification programs.
          </p>
          <span className="text-udho-neon-orange-primary hover:text-udho-neon-orange-dark font-medium text-sm">
            Learn More →
          </span>
        </Link>

        <Link
          href="/schedule/consulting"
          className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow block"
        >
          <h4 className="font-semibold text-gray-800 mb-2">Consulting Services</h4>
          <p className="text-sm text-gray-600 mb-4">Get expert guidance for your poultry farming venture.</p>
          <span className="text-udho-neon-orange-primary hover:text-udho-neon-orange-dark font-medium text-sm">
            Get Started →
          </span>
        </Link>

        <Link
          href="/schedule/visit"
          className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow block"
        >
          <h4 className="font-semibold text-gray-800 mb-2">Farm Visits</h4>
          <p className="text-sm text-gray-600 mb-4">Schedule a visit to see our operations firsthand.</p>
          <span className="text-udho-neon-orange-primary hover:text-udho-neon-orange-dark font-medium text-sm">
            Book Visit →
          </span>
        </Link>
      </div>
    </div>
  )
}
