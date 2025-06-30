"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0009.jpg-IjFaW0NowZjqrd2YhNDkDRk1YcjaL9.jpeg",
    alt: "Young chickens with feeding equipment in poultry house",
    category: "Farm Operations",
    title: "Modern Poultry Housing",
    description:
      "Our state-of-the-art poultry houses with automated feeding and watering systems ensuring optimal bird health and growth.",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0013.jpg-PHQbwJIUVcE9IHRlQQawCDXUSpAzoy.jpeg",
    alt: "Aerial view of Udho Farm facilities",
    category: "Infrastructure",
    title: "Farm Overview",
    description:
      "Aerial view showcasing our modern brick construction poultry facilities with professional-grade infrastructure.",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0008.jpg-t7Yia7QAKT20YrxZCMcCJBCHiG654X.jpeg",
    alt: "Close-up of healthy white chickens",
    category: "Farm Operations",
    title: "Healthy Livestock",
    description:
      "Close-up view of our healthy, well-maintained broiler chickens demonstrating our commitment to animal welfare.",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0010.jpg-S5a9lluVruEOr1lbcUXydtDAinp0aD.jpeg",
    alt: "Farm buildings with decorative plants and security",
    category: "Infrastructure",
    title: "Farm Facilities",
    description: "Well-maintained farm buildings with proper security measures and aesthetic landscaping elements.",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0012.jpg-thuC2211lwtvME9RleknJGjvxSKvGD.jpeg",
    alt: "Farm entrance with decorative gate",
    category: "Infrastructure",
    title: "Farm Entrance",
    description: "Professional entrance to Udho Farm with secure gating and well-planned perimeter infrastructure.",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0014.jpg-6jZdLjzuXoEX5Hci5DLYJCqa6SknvR.jpeg",
    alt: "Rooftop view of farm buildings at sunset",
    category: "Infrastructure",
    title: "Expansion & Development",
    description:
      "Rooftop view during sunset showing our ongoing expansion and development of additional farming facilities.",
  },
]

const categories = ["All", "Farm Operations", "Infrastructure"]

export function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">Udho Farm Gallery</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Take a visual journey through our modern poultry farming facilities, operations, and infrastructure that
          showcase our commitment to excellence.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-udho-neon-orange-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-udho-neon-orange-light"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            onClick={() => openLightbox(image)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-udho-neon-orange-primary bg-udho-neon-orange-light px-2 py-1 rounded">
                  {image.category}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="text-white">
                  <span className="text-sm font-medium text-udho-neon-orange-primary bg-udho-neon-orange-primary bg-opacity-20 px-2 py-1 rounded mb-2 inline-block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            {filteredImages.length > 1 && (
              <div className="absolute top-4 left-4 bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-udho-neon-orange-primary mb-2">2022</div>
            <div className="text-gray-600">Farm Established</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-udho-neon-orange-primary mb-2">Modern</div>
            <div className="text-gray-600">Infrastructure</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-udho-neon-orange-primary mb-2">Professional</div>
            <div className="text-gray-600">Operations</div>
          </div>
        </div>
      </div>
    </div>
  )
}
