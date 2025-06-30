import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToActionSection() {
  return (
    <section className="bg-udho-neon-orange-dark py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Udho Farm Difference?</h2>
        <p className="text-lg mb-10 leading-relaxed">
          Contact us today to learn more about our products, services, or partnership opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-white text-udho-neon-orange-dark hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-colors">
              Get in Touch
            </Button>
          </Link>
          <Link href="/products">
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-udho-neon-orange-dark px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-colors">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
