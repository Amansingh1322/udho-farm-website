"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white py-3 px-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation (Left Side) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            HOME
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            ABOUT US
          </Link>
          <Link href="/what-we-do" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            WHAT WE DO
          </Link>
          <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            GALLERY
          </Link>
          <Link href="/blog" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            BLOG
          </Link>
          <Link href="/faq" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            FAQ
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
            CONTACT
          </Link>
        </nav>

        {/* Mobile menu toggle button and Logo (Right Side) */}
        <div className="flex items-center gap-4">
          {" "}
          {/* Added gap for spacing between toggle and logo */}
          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Logo */}
          <Image
            src="/images/udho-farm-logo-new.png"
            alt="Udho Farm Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8">
          <Link
            href="/"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/what-we-do"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            WHAT WE DO
          </Link>
          <Link
            href="/gallery"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            href="/blog"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </Link>
          <Link
            href="/faq"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  )
}
