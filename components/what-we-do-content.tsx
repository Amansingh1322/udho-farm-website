import { MapPin, BookOpen, Users, TrendingUp } from "lucide-react"

export function WhatWeDoContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">What We Do at Udho Farm</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Udho Farm, we are committed to excellence across various facets of poultry farming and support.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contract Poultry Farming */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-udho-neon-orange-primary" />
            <h2 className="text-xl font-bold text-udho-neon-orange-primary">Contract Poultry Farming</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Udho Farm, we proudly engage in contract poultry farming with top-notch companies in India. From day-old
            chicks to 45-day ready-to-serve birds, we raise poultry with a strong focus on:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Scientific guidance:</strong> Implementing modern, research-backed methods.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Hygiene and cleanliness:</strong> Maintaining pristine environments for bird health.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Efficient farm management:</strong> Optimizing operations for productivity and welfare.
              </span>
            </li>
          </ul>
        </div>

        {/* Training Programs */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-udho-neon-orange-primary" />
            <h2 className="text-xl font-bold text-udho-neon-orange-primary">
              Training Programs for Poultry Enthusiasts
            </h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We now offer professional training sessions designed to empower the next generation of poultry farmers and
            enthusiasts. Our programs cater to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
              New poultry farmers
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
              Agriculture students
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
              Poultry hobbyists
            </li>
          </ul>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">What We Offer:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                1-Day or Weekend Workshops: Intensive sessions for quick learning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Hands-on sessions covering:
              </li>
              <div className="ml-6 space-y-1">
                <li className="text-gray-600">• Chick care & brooding</li>
                <li className="text-gray-600">• Disease prevention</li>
                <li className="text-gray-600">• Feed & nutrition management</li>
                <li className="text-gray-600">• Profit planning</li>
              </div>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Includes certificate
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Fee-based (affordable pricing)
              </li>
            </ul>
          </div>
        </div>

        {/* Poultry Consulting Services */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-udho-neon-orange-primary" />
            <h2 className="text-xl font-bold text-udho-neon-orange-primary">Poultry Consulting Services</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Receive tailored guidance for aspiring poultry entrepreneurs and existing farmers looking to optimize their
            operations. Our consulting services include:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
              Farm site selection
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
              Scientific layout planning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-udho-neon-orange-primary rounded-full"></span>
              Breed selection & sourcing
            </li>
          </ul>
          <div className="bg-udho-neon-orange-light p-3 rounded-lg">
            <p className="text-gray-700 font-medium">Monthly consultancy: ₹1,000-₹5,000 (depending on scope).</p>
          </div>
        </div>

        {/* Coming Soon: Poultry Feed Production */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-udho-neon-orange-primary" />
            <h2 className="text-xl font-bold text-udho-neon-orange-primary">Coming Soon: Poultry Feed Production</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We're soon launching our own state-of-the-art poultry feed production unit. This initiative will ensure
            high-quality, cost-effective, and nutritionally balanced feed for your flocks, directly from Udho Farm.
          </p>
        </div>
      </div>
    </div>
  )
}
