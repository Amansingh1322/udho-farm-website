"use client" // This component needs to be a client component for other interactive elements (if any remain)

import Image from "next/image"
import Link from "next/link"
// Removed useState and Mail import as they are no longer needed for the removed section

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Tips for Raising Healthy Chickens",
    excerpt:
      "Ensuring your flock thrives requires attention to diet, housing, and health. Discover our top tips for happy and healthy chickens.",
    author: "Udho Farm Team",
    date: "June 10, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0009.jpg-IjFaW0NowZjqrd2YhNDkDRk1YcjaL9.jpeg",
    slug: "top-5-tips-raising-healthy-chickens",
  },
  {
    id: 2,
    title: "The Unbeatable Benefits of Farm Fresh Eggs",
    excerpt:
      "Beyond taste, farm fresh eggs offer superior nutritional value and ethical benefits compared to their store-bought counterparts.",
    author: "Nutrition Expert",
    date: "May 25, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0008.jpg-t7Yia7QAKT20YrxZCMcCJBCHiG654X.jpeg",
    slug: "benefits-farm-fresh-eggs",
  },
  {
    id: 3,
    title: "Understanding Poultry Feed: A Comprehensive Guide",
    excerpt:
      "The right feed is fundamental to poultry health and productivity. Learn about different types of feed and how to choose the best for your flock.",
    author: "Farm Nutritionist",
    date: "April 18, 2024",
    category: "Poultry Tips",
    image: "/images/udho-feed-bag-blog.png",
    slug: "understanding-poultry-feed-guide",
  },
  {
    id: 4,
    title: "Embracing Sustainable Practices in Poultry Farming",
    excerpt:
      "Discover how Udho Farm integrates eco-friendly methods to ensure responsible and sustainable poultry production for a healthier planet.",
    author: "Environmental Advocate",
    date: "July 1, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0013.jpg-PHQbwJIUVcE9IHRlQQawCDXUSpAzoy.jpeg",
    slug: "sustainable-practices-poultry-farming",
  },
  {
    id: 5,
    title: "Biosecurity Essentials: Protecting Your Flock from Disease",
    excerpt:
      "Learn the critical biosecurity measures essential for preventing diseases and maintaining a healthy, productive poultry farm.",
    author: "Veterinary Specialist",
    date: "August 15, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0012.jpg-thuC2211lwtvME9RleknJGjvxSKvGD.jpeg",
    slug: "biosecurity-essentials-protecting-flock",
  },
]

export function BlogContent() {
  // Removed email, isSubmitting, statusMessage, isError states and handleSubscribe function

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-udho-neon-orange-primary mb-4">Our Farm Blog</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Stay updated with the latest insights, tips, and stories from Udho Farm.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
              index >= 3 ? "lg:col-span-1" : ""
            } ${index === 3 ? "lg:col-start-1" : ""} ${index === 4 ? "lg:col-start-2" : ""}`}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-udho-neon-orange-light text-udho-neon-orange-dark text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-udho-neon-orange-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>by {post.author}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Newsletter Signup (Stay Updated) - REMOVED */}
      {/* Categories */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Blog Categories</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Poultry Tips</h4>
            <p className="text-sm text-gray-600">Expert advice for raising healthy chickens</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Farm Management</h4>
            <p className="text-sm text-gray-600">Best practices for efficient farm operations</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Sustainability</h4>
            <p className="text-sm text-gray-600">Eco-friendly farming methods and practices</p>
          </div>
        </div>
      </div>
    </div>
  )
}
