import { Header } from "@/components/header"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

// This would typically come from a database or CMS
const blogPosts = {
  "top-5-tips-raising-healthy-chickens": {
    title: "Top 5 Tips for Raising Healthy Chickens",
    content: `
      <p>Raising healthy chickens is a rewarding experience, but it requires dedication and knowledge. Here's our top 5 tips to ensure your flock thrives:</p>
      
      <h3>1. Provide a Balanced Diet</h3>
      <p>A high-quality, balanced feed is crucial. Ensure your chickens have access to fresh water at all times. Supplement their diet with greens and occasional treats, but in moderation.</p>
      
      <h3>2. Secure and Clean Housing</h3>
      <p>A well-ventilated coop that protects them from predators and harsh weather is essential. Regularly clean the coop to prevent disease and parasites. Provide ample roosting space and nesting boxes.</p>
      
      <h3>3. Monitor for Health Issues</h3>
      <p>Regularly observe your chickens for any signs of illness, such as lethargy, ruffled feathers, or changes in droppings. Early detection can prevent the spread of disease.</p>
      
      <h3>4. Allow Free-Ranging (if possible)</h3>
      <p>If space permits, allow your chickens to free-range. This provides them with natural foraging opportunities, exercise, and mental stimulation, leading to happier and healthier birds.</p>
      
      <h3>5. Dust Baths are a Must</h3>
      <p>Chickens naturally take dust baths to clean their feathers and deter mites and lice. Provide an area with dry soil, sand, or wood ash for them to indulge in this essential activity.</p>
      
      <p><strong>By following these tips, you'll be well on your way to raising a healthy and productive flock!</strong></p>
    `,
    author: "Udho Farm Team",
    date: "June 10, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0009.jpg-IjFaW0NowZjqrd2YhNDkDRk1YcjaL9.jpeg",
    excerpt:
      "Ensuring your flock thrives requires attention to diet, housing, and health. Discover our top tips for happy and healthy chickens.",
  },
  "benefits-farm-fresh-eggs": {
    title: "The Unbeatable Benefits of Farm Fresh Eggs",
    content: `
    <p>There's nothing quite like a farm fresh egg. The vibrant yolk, the rich flavor, and the firm whites are a testament to their quality. But beyond the culinary delight, farm fresh eggs offer a myriad of benefits:</p>
    
    <h3>Superior Nutrition</h3>
    <p>Studies have shown that eggs from pastured hens can have higher levels of Omega-3 fatty acids, Vitamin A, Vitamin E, and Beta-Carotene compared to eggs from conventionally raised hens. This is largely due to the diverse diet of free-ranging chickens.</p>
    
    <h3>Richer Flavor and Texture</h3>
    <p>Many people report that farm fresh eggs simply taste better. The yolks are often a deeper orange, indicating a diet rich in carotenoids, and the whites are firmer, making them ideal for cooking and baking.</p>
    
    <h3>Ethical and Sustainable Choice</h3>
    <p>When you buy farm fresh eggs, especially from local farms like Udho Farm, you're often supporting ethical farming practices where hens are given space to roam, forage, and express natural behaviors. This contributes to better animal welfare and a more sustainable food system.</p>
    
    <h3>Support Local Agriculture</h3>
    <p>Choosing farm fresh eggs means supporting local farmers and the local economy. It helps maintain agricultural land and reduces the carbon footprint associated with long-distance food transportation.</p>
    
    <p><strong>So, next time you're at the market, consider reaching for those farm fresh eggs – your taste buds and your body will thank you!</strong></p>
  `,
    author: "Nutrition Expert",
    date: "May 25, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0008.jpg-t7Yia7QAKT20YrxZCMcCJBCHiG654X.jpeg",
    excerpt:
      "Beyond taste, farm fresh eggs offer superior nutritional value and ethical benefits compared to their store-bought counterparts.",
  },
  "understanding-poultry-feed-guide": {
    title: "Understanding Poultry Feed: A Comprehensive Guide",
    content: `
    <p>Just like any living creature, chickens require a specific diet to thrive. Understanding poultry feed is crucial for ensuring the health, growth, and productivity of your flock. Here's a comprehensive guide:</p>
    
    <h3>Types of Poultry Feed</h3>
    <p><strong>Starter Feed:</strong> High in protein, designed for chicks up to 6-8 weeks old to support rapid growth.</p>
    <p><strong>Grower Feed:</strong> Lower in protein than starter, for pullets (young hens) from 8 weeks until laying age.</p>
    <p><strong>Layer Feed:</strong> Formulated with higher calcium to support eggshell production in laying hens.</p>
    <p><strong>Broiler Feed:</strong> Specifically designed for meat chickens, promoting fast weight gain.</p>
    <p><strong>Scratch Grains:</strong> A treat, not a complete feed. Provides energy but lacks essential nutrients.</p>
    
    <h3>Key Nutrients</h3>
    <p>A good poultry feed should contain a balance of:</p>
    <p><strong>Protein:</strong> Essential for growth, feather development, and egg production.</p>
    <p><strong>Carbohydrates:</strong> Provide energy.</p>
    <p><strong>Fats:</strong> Concentrated energy source.</p>
    <p><strong>Vitamins & Minerals:</strong> Crucial for overall health, immune function, and bone development. Calcium is particularly important for laying hens.</p>
    
    <h3>Choosing the Right Feed</h3>
    <p>The best feed depends on the age and purpose of your chickens. Always choose a reputable brand and ensure the feed is fresh and stored properly to prevent spoilage and contamination.</p>
    
    <p><strong>At Udho Farm, we use and recommend premium feeds that are scientifically formulated to provide optimal nutrition for our birds, ensuring their health and the quality of our products.</strong></p>
  `,
    author: "Farm Nutritionist",
    date: "April 18, 2024",
    category: "Poultry Tips",
    image: "/images/udho-feed-bag-blog.png",
    excerpt:
      "The right feed is fundamental to poultry health and productivity. Learn about different types of feed and how to choose the best for your flock.",
  },
  "sustainable-practices-poultry-farming": {
    title: "Embracing Sustainable Practices in Poultry Farming",
    content: `
    <p>Sustainable poultry farming is not just a buzzword; it's a commitment to practices that protect the environment, ensure animal welfare, and support local communities. At Udho Farm, we are dedicated to embracing sustainability in every aspect of our operations.</p>
    
    <h3>Water Conservation</h3>
    <p>We implement advanced water management systems to minimize waste, including efficient watering systems for our birds and rainwater harvesting techniques for farm use.</p>
    
    <h3>Waste Management</h3>
    <p>Manure is a valuable resource. We compost poultry litter to create nutrient-rich fertilizer for local agriculture, reducing waste and providing a natural soil amendment.</p>
    
    <h3>Energy Efficiency</h3>
    <p>Our farm utilizes energy-efficient lighting and ventilation systems. We are also exploring renewable energy sources like solar power to further reduce our carbon footprint.</p>
    
    <h3>Ethical Animal Welfare</h3>
    <p>Our birds are raised in spacious, clean environments with access to fresh air and natural light. We prioritize their health and well-being, ensuring they can express natural behaviors.</p>
    
    <h3>Local Sourcing and Community Support</h3>
    <p>We strive to source our feed and supplies locally whenever possible, supporting other businesses in our region. We also provide employment opportunities for villagers, contributing to the local economy.</p>
    
    <p><strong>By choosing Udho Farm, you're supporting a future where agriculture thrives in harmony with nature and community.</strong></p>
  `,
    author: "Environmental Advocate",
    date: "July 1, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0013.jpg-PHQbwJIUVcE9IHRlQQawCDXUSpAzoy.jpeg",
    excerpt:
      "Discover how Udho Farm integrates eco-friendly methods to ensure responsible and sustainable poultry production for a healthier planet.",
  },
  "biosecurity-essentials-protecting-flock": {
    title: "Biosecurity Essentials: Protecting Your Flock from Disease",
    content: `
    <p>Biosecurity is the cornerstone of a healthy poultry operation. It involves a set of practices designed to prevent the introduction and spread of disease-causing organisms. Implementing strong biosecurity measures protects your flock, your investment, and the wider poultry industry.</p>
    
    <h3>1. Isolation</h3>
    <p>Keep your flock separate from other birds and animals. Control access to your farm by people and vehicles. Consider a 'clean' and 'dirty' line to prevent cross-contamination.</p>
    
    <h3>2. Traffic Control</h3>
    <p>Limit visitors to your farm. Ensure anyone entering the poultry areas wears clean clothing and footwear, and ideally, uses disposable boot covers or undergoes disinfection.</p>
    
    <h3>3. Sanitation</h3>
    <p>Regularly clean and disinfect all equipment, housing, and vehicles that come into contact with your birds. Use effective disinfectants and follow proper cleaning protocols.</p>
    
    <h3>4. Disease Monitoring</h3>
    <p>Regularly observe your birds for any signs of illness. Promptly isolate sick birds and consult a veterinarian. Maintain accurate records of bird health, mortality, and treatments.</p>
    
    <h3>5. Pest Control</h3>
    <p>Implement effective rodent and insect control programs. Pests can carry and spread diseases, so keeping their populations in check is vital.</p>
    
    <p><strong>By diligently applying these biosecurity essentials, you can significantly reduce the risk of disease outbreaks and ensure the long-term health and productivity of your poultry farm.</strong></p>
  `,
    author: "Veterinary Specialist",
    date: "August 15, 2024",
    category: "Poultry Tips",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250615-WA0012.jpg-thuC2211lwtvME9RleknJGjvxSKvGD.jpeg",
    excerpt:
      "Learn the critical biosecurity measures essential for preventing diseases and maintaining a healthy, productive poultry farm.",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-udho-neon-orange-primary hover:text-udho-neon-orange-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          {/* Featured Image */}
          <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 bg-udho-neon-orange-light text-udho-neon-orange-dark text-sm font-medium px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>by {post.author}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="blog-content" />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-udho-neon-orange-light rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About the Author</h3>
              <p className="text-gray-600">
                The <strong>{post.author}</strong> brings years of experience in poultry farming and is dedicated to
                sharing practical knowledge to help farmers succeed.
              </p>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-udho-neon-orange-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
