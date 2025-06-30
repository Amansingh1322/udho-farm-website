import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Youtube, ChevronRight } from "lucide-react" // Removed Twitter import

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <address className="not-italic space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span>Regd. Office: Udho Farm, VPO Badehar, Teh. & Distt. Una, Himachal Pradesh 174306</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="tel:+918091122984" className="hover:text-gray-200 transition-colors">
                Mobile: +91 8091122984
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="mailto:udhofarms@gmail.com" className="hover:text-gray-200 transition-colors">
                Email Id: udhofarms@gmail.com
              </a>
            </div>
          </address>
        </div>
        {/* Column 2: Useful Links (Consolidated) */}
        <div>
          <div className="font-thin">
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link href="/about" className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> About Us
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2"
              >
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> Privacy Policy
              </Link>
              <Link
                href="/what-we-do"
                className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2"
              >
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> Our Products
              </Link>
              <Link href="/careers" className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> Careers
              </Link>
              <Link href="/blog" className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> Blog
              </Link>
              <Link href="/contact" className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> Contact Us
              </Link>
              <Link href="/gallery" className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> Gallery
              </Link>
              <Link href="/faq" className="hover:text-gray-200 transition-colors text-sm flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-udho-neon-orange-primary flex-shrink-0" /> FAQ
              </Link>
            </div>
          </div>
        </div>
        {/* Column 3: Logo and Social Media */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/udho-farm-logo-new.png"
            alt="Udho Farm Logo"
            width={120}
            height={120}
            className="object-contain mb-4"
          />
          <h3 className="text-lg font-semibold text-white mb-4">Stay connected</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/udhofarm"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            {/* Removed Twitter link */}
            <a
              href="https://www.linkedin.com/in/udho-farm-816693367/"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/udhofarm"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@udhofarm"
              aria-label="YouTube"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Copyright and Privacy Policy */}
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
        <span>&copy; {currentYear} Udho Farm. All rights reserved.</span>
        <Link href="/privacy-policy" className="hover:text-white transition-colors mt-2 sm:mt-0">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
