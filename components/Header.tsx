"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/20 backdrop-blur-md shadow-md" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-40 h-14 flex items-center justify-center">
              <Image
                src="/images/logo.webp"
                alt="Mimetic Nigeria Limited Logo"
                width={160}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium ${
                isActive("/") ? "text-white border-b-2 border-white" : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors font-medium ${
                isActive("/about") ? "text-white border-b-2 border-white" : "text-white/80 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`transition-colors font-medium ${
                isActive("/services") ? "text-white border-b-2 border-white" : "text-white/80 hover:text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/leadership"
              className={`transition-colors font-medium ${
                isActive("/leadership") ? "text-white border-b-2 border-white" : "text-white/80 hover:text-white"
              }`}
            >
              Leadership
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-medium ${
                isActive("/contact") ? "text-white border-b-2 border-white" : "text-white/80 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Button className="bg-green-700 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white backdrop-blur-md font-bold">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className={`block transition-colors ${
                isActive("/") ? "text-green-400" : "text-black hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block transition-colors ${
                isActive("/about") ? "text-green-400" : "text-black hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block transition-colors ${
                isActive("/services") ? "text-green-400" : "text-black hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/leadership"
              className={`block transition-colors ${
                isActive("/leadership") ? "text-green-400" : "text-black hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link
              href="/contact"
              className={`block transition-colors ${
                isActive("/contact") ? "text-green-400" : "text-black hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
