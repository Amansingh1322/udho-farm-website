import Image from "next/image"

export function ProductsContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-6">Our Products</h1>
      <p className="text-gray-700 text-lg mb-10 leading-relaxed">
        We are diligently working to bring you the best quality poultry products.
      </p>

      <div className="bg-gray-50 rounded-lg p-8 shadow-md flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[3/4] mb-8">
          <Image
            src="/images/udho-feed-bag.png"
            alt="Udho Farm Premium Layer Feed 50 KG"
            fill
            className="object-contain"
            priority // Mark as priority since it's a key image on the page
          />
        </div>
        <p className="text-gray-800 text-2xl font-semibold mb-4">Our products will launch soon!</p>
        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Stay tuned for updates and be the first to know when our premium products are available.
        </p>
      </div>
    </div>
  )
}
