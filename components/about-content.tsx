import Image from "next/image"
import { MessageSquare } from "lucide-react"

export function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-8 h-8 text-udho-neon-orange-primary" />
        <h1 className="text-4xl font-bold text-udho-neon-orange-primary">About Udho Farm</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Udho Farm was founded in 2022 with a clear mission — to build something meaningful from the ground up, no
            matter the obstacles.
          </p>

          <p className="text-gray-700 leading-relaxed">When we started, there was nothing here.</p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              No electricity.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              No water.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              No flat land.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              Just a rugged hillside and a dream.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            With determination and a deep connection to our roots, we began shaping the land, bringing in essential
            resources, and laying the foundation of what would become a model poultry farm in Himachal Pradesh.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Today, Udho Farm partners with some of India's leading poultry companies to raise healthy, well-managed
            birds in a clean and professional environment. Every stage is handled with care, expertise, and precision.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What we stand for:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
                Clean, modern poultry farming practices
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
                Contract-based farming with trusted industry partners
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
                Professional management, scientific care, and top-grade equipment
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>A vision to transform rural
                farming into a respected and aspirational field
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Udho Farm is more than just a farm — it's a story of resilience, a commitment to quality, and a blueprint
            for the future of agriculture in India.
          </p>
        </div>

        {/* Right Column - Farm Image */}
        <div className="lg:sticky lg:top-8">
          <Image
            src="/images/about-farm-collage.png" // Farm collage image
            alt="Udho Farm facilities showing modern poultry farming setup"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Message from Founder Section */}
      <div className="mt-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-udho-neon-orange-primary" />
            <h2 className="text-2xl font-bold text-udho-neon-orange-primary">Message from the Founder</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Founder Image */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-8 text-center">
                <Image
                  src="/images/founder-photo.png" // Founder's photo
                  alt="Ranbir Singh, Founder of Udho Farm"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 bg-white p-2"
                />
              </div>
            </div>

            {/* Founder Message */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                After a rewarding career spanning three decades in South Africa's education sector, I chose to return
                home with one goal — to build something impactful and future-forward in my own village.
              </p>

              <p className="text-gray-700 leading-relaxed italic">That vision became Udho Farm.</p>

              <p className="text-gray-700 leading-relaxed">
                Here, we're not just raising poultry — we're raising standards. Our aim is to create a farm that sets an
                example for the industry — clean, professionally maintained, and operated with advanced tools and
                techniques.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I take pride in the fact that Udho Farm provides employment to people from nearby villages, offering
                both livelihood and training. My mission is simple:
              </p>

              <blockquote className="bg-white p-4 rounded-lg border-l-4 border-udho-neon-orange-primary italic text-gray-700">
                "Let this farm become a benchmark — the kind people visit and say, 'We've never seen a farm run like
                this before.'"
              </blockquote>

              <p className="text-gray-700 leading-relaxed">
                We're committed to showing that rural ventures can match global standards when built with heart, vision,
                and discipline.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-800">– Ranbir Singh</p>
                <p className="text-gray-600">Founder, Udho Farm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
