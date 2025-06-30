import Image from "next/image"
import Link from "next/link"

export function DiverseOfferingsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">Our Diverse Offerings</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            From healthy chicks to expert training, Udho Farm provides everything you need for successful poultry
            farming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contract Poultry Farming */}
          <Link
            href="/what-we-do"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Contract Poultry Farming"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2">Contract Poultry Farming</h3>
              <p className="text-sm text-gray-600">
                Partner with us for scientific, hygienic, and efficient poultry farming operations.
              </p>
            </div>
          </Link>

          {/* Training Programs */}
          <Link
            href="/what-we-do"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Training Programs for Poultry Enthusiasts"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2">Training Programs for Poultry Enthusiasts</h3>
              <p className="text-sm text-gray-600">
                Learn modern poultry techniques with our hands-on workshops and expert guidance.
              </p>
            </div>
          </Link>

          {/* Poultry Consulting Services */}
          <Link
            href="/what-we-do"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Poultry Consulting Services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2">Poultry Consulting Services</h3>
              <p className="text-sm text-gray-600">
                Receive tailored advice on farm site selection, layout, and breed sourcing for optimal results.
              </p>
            </div>
          </Link>

          {/* Poultry Feed Production */}
          <Link
            href="/what-we-do"
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Poultry Feed Production"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2">Poultry Feed Production</h3>
              <p className="text-sm text-gray-600">
                Soon, we will offer our own high-quality, nutritionally balanced feed for your flock.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
