import { Sprout, Tractor, Egg, Award } from "lucide-react"

export function WhyChooseSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-udho-neon-orange-primary mb-6">Why Choose Udho Farm?</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            We are committed to sustainable practices, animal welfare, and delivering the highest quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sustainable Farming */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <Sprout className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Farming</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Environmentally friendly practices for a healthier planet.
            </p>
          </div>

          {/* Modern Technology */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <Tractor className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Technology</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Utilizing advanced tech for efficient and ethical farming.
            </p>
          </div>

          {/* Premium Quality Products */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <Egg className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality Products</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Fresh, nutritious, and responsibly sourced poultry products.
            </p>
          </div>

          {/* Unmatched Experience */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <Award className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Unmatched Experience</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Decades of expertise ensuring excellence in every aspect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
