"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      id="header"
      className={`bg-white shadow-md fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#" className="text-2xl font-bold text-gray-800">
              Chomu Website
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-gray-900 font-medium">
              Products
            </Link>
            {/* <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </Link> */}
            <Link href="#gallery" className="text-gray-700 hover:text-gray-900 font-medium">
              Gallery
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          {/* <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Search className="h-6 w-6" />
            </button>
            <Link href="#cart" className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            <Link
              href="#home"
              className="text-gray-700 hover:text-gray-900 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-gray-900 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            {/* <Link
              href="#services"
              className="text-gray-700 hover:text-gray-900 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link> */}
            <Link
              href="#gallery"
              className="text-gray-700 hover:text-gray-900 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-gray-900 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-gray-900 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
