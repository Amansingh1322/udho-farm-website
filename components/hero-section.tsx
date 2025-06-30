import Image from "next/image" // Import Image component

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Attractive Background Photo */}
      <Image
        src="/placeholder.svg?height=1080&width=1920" // Placeholder for an attractive farm photo
        alt="Adorable farm animals and lush fields at Udho Farm"
        fill
        className="object-cover opacity-80" // Adjust opacity as needed for text readability
        priority // Load this image with high priority
      />

      {/* Dotted pattern overlay (kept for design consistency) */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 font-black"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-white text-lg font-medium mb-8 tracking-wide">IN PARTNERSHIP WITH FARMERS & INNOVATION</p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-yellow-400">Empowering</span>
            <br />
            <span className="text-yellow-400">Rural Excellence</span>
          </h1>

          <p className="text-white text-xl mb-12 max-w-2xl leading-relaxed">
            Leading a new farming journey with tech, livestock, and training
          </p>

          <div className="mt-16">
            <h2 className="text-white text-5xl md:text-6xl font-bold">Udho Farm</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
